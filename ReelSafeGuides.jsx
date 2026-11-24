// Reel Safe Guides for Adobe After Effects. MIT license.
(function () {
    var comp = app.project && app.project.activeItem;
    if (!(comp instanceof CompItem)) {
        alert("Open a composition first, then run Reel Safe Guides again.");
        return;
    }
    if (comp.width * 16 !== comp.height * 9 || comp.pixelAspect !== 1) {
        alert("Choose a 9:16 composition with square pixels, such as 1080 x 1920.");
        return;
    }
    if (!comp.addGuide) {
        alert("This script needs After Effects 16.1 or newer.");
        return;
    }

    var horizontal = typeof GuideOrientationType === "undefined" ? 0 : GuideOrientationType.HORIZONTAL;
    var vertical = typeof GuideOrientationType === "undefined" ? 1 : GuideOrientationType.VERTICAL;
    var pixel = typeof GuidePositionType === "undefined" ? 0 : GuidePositionType.PIXEL;
    var side = Math.round(comp.width * 60 / 1080);
    var top = Math.round(comp.height * 150 / 1920);
    var bottom = comp.height - Math.round(comp.height * 350 / 1920);

    function addIfMissing(orientation, position) {
        var guides = comp.guides;
        for (var i = 0; i < guides.length; i++) {
            var guide = guides[i];
            if (guide.orientationType == orientation && guide.positionType == pixel &&
                !guide.pinned && guide.position === position) {
                return;
            }
        }
        comp.addGuide(orientation, position);
    }

    app.beginUndoGroup("Add Reel Safe Guides");
    try {
        addIfMissing(vertical, side);
        addIfMissing(vertical, comp.width - side);
        addIfMissing(horizontal, top);
        addIfMissing(horizontal, bottom);
    } catch (error) {
        alert("After Effects could not finish adding guides. " + error.toString());
    } finally {
        app.endUndoGroup();
    }
}());

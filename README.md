# Reel Safe Guides

Add four native After Effects guides for laying out text, faces and calls to action in a vertical reel. Run the script on a composition, then move your artwork inside the guides. The guides appear in the editor and do not appear in the rendered video.

## Try it on your Mac

1. On the repository page, choose **Code → Download ZIP**, then unzip the download in Finder.
2. In After Effects, create or open a square-pixel 1080 × 1920 composition. Click its timeline so the composition is active.
3. Choose **File → Scripts → Run Script File…** and select **ReelSafeGuides.jsx**.
4. If the lines are hidden, enable **View → Show Guides**. You should see two vertical lines and two horizontal lines.

## Preset

| Margin | At 1080 × 1920 | Guide coordinate |
| --- | ---: | ---: |
| Left | 60 px | X = 60 |
| Right | 60 px | X = 1020 |
| Top | 150 px | Y = 150 |
| Bottom | 350 px | Y = 1570 |

These are editorial margins for a designer's reel layout. Platform interfaces and crops vary. Preview the final video in its intended placement. The script scales these margins proportionally for other 9:16 resolutions and rounds them to whole pixels.

Run it again to restore missing guides. It preserves existing guides and skips matching unpinned pixel guides. Use **Edit → Undo** immediately after adding guides to reverse the operation.

## Testing and feedback

The maintainer ran the script successfully in After Effects on a Mac. The guide coordinates and repeat-run behavior were also checked with a simulated After Effects API.

Try it on a reel you are editing. If a guide lands somewhere unexpected, open a [GitHub issue](https://github.com/amirsaififorwork-cpu/reel-safe-guides/issues) with your After Effects version, composition dimensions, and the margin you expected.
 
## License

MIT. See LICENSE.

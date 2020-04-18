# chr2mpv
This is a Chromium extension for playing URL's in MPV.

Clicking the little icon in your toolbar will make MPV attempt to play the current URL.

If you want to play a specific link on a page, right-click it and select "Play link in MPV" in the context menu.

The extension can also be activated by the Ctrl+M shortcut.

## Requirements
1. [Extension for Chromium](https://github.com/eastmarch/chr2mpv/releases). Chrome won't install non-store extensions anymore, only some builds of Chromium.
1. [mpv for Windows](https://mpv.io/installation/).
2. [youtube-dl](https://ytdl-org.github.io/youtube-dl) executable needs to be in the same folder as MPV.

## Usage
A native client is not needed. All this extension does is call MPV via the **ytdl://** protocol, which is natively supported. The path to the MPV executable must be added to the registry, though. This can be done by one of the two methods:

### Method 1
1. Download the [ytdlProtocol.bat](https://github.com/eastmarch/chr2mpv/archive/master.zip) file.
2. Move it to the folder where MPV is located (important!).
3. And run the script a single time. No need for administrator permissions.

### Method 2
1. Download the [ytdlProtocol.reg](https://github.com/eastmarch/chr2mpv/archive/master.zip) file.
2. Open it with a text editor.
3. Change the path to the MPV executable inside the file to reflect your installation.
3. Double-click it on file explorer to merge the changes to the registry.

## License

The source code in this repository is licensed under the MIT license.

The icons in this repository are licensed by the MPV team under GNU LGPL, version 2.1.
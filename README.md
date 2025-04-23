# chr2mpv
This is a Chromium addon that makes it easier to stream videos in the MPV player.\
Clicking the icon in your toolbar will make MPV attempt to play the current URL.\
If you want to play a specific link on a page, right-click it and select the context menu.\
This extension can also be activated by the *Ctrl+Shift+Space* shortcut.

## Requirements
1. **[mpv for Windows](https://mpv.io/installation/)**
    - Download: [mpv-x86_64-windows-msvc.zip](https://nightly.link/mpv-player/mpv/workflows/build/master/mpv-x86_64-pc-windows-msvc.zip)
    - Extract the zip file to your destination folder.
2. **[yt-dlp](https://github.com/yt-dlp/yt-dlp)**
    - Allows MPV to open videos directly from streaming sites.
    - Needs to be updated regularly.
    - Download: [yt-dlp.exe](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#recommended)
    - Put the executable inside the MPV folder.
    - Alternative install: `winget install yt-dlp.yt-dlp`
     
## Configuration
A native client is not needed. All this extension does is call MPV via the **ytdl://** protocol, which is natively supported. The path to the MPV executable must be added to the registry, though. This can be done by one of the methods below.

### Method #1
1. Make sure **mpv** and **yt-dlp** are installed / stored in the same folder.
2. Get the **[ytdlProtocol.bat](https://github.com/eastmarch/chr2mpv/archive/master.zip)** file from this repository.
3. Extract it to the folder where MPV is located (important!).
4. Run the script a single time. No need for administrator permissions.
5. Go to YouTube and try it on a video.

### Method #2
1. Make sure **mpv** and **yt-dlp** are installed / stored in the same folder.
2. Get the **[ytdlProtocol.reg](https://github.com/eastmarch/chr2mpv/archive/master.zip)** file from this repository.
4. Open it with a text editor.
5. Change the path to the MPV executable in the editor to reflect your installation.
6. Save, close and double-click it on file explorer to merge the changes to the registry.


## How to install
Third-party extensions from outside the store can only be installed when whitelisted. This can be done by using the group policies available for [Edge](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies#extensioninstallallowlist), [Chrome](https://chromeenterprise.google/policies/?policy=ExtensionInstallAllowlist) or [Chromium](https://chromium.woolyss.com/).
- Run the script `allowExtensionInstall.reg` a single time to whitelist the extension.
- Restart the browser.
- Open the Extensions page.
- Enable `Developer Mode` on the same page.
- Drag-and-drop the downloaded CRX file to the tab.
- Disable `Developer Mode` after install.

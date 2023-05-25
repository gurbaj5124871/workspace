import displaySpotify from "./components/apps/spotify";
import displayYoutubeJimmy from "./components/apps/youtube-jimmy";
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutGurbaj } from "./components/apps/gurbaj";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "chrome",
    title: "Chrome",
    icon: "./themes/Yaru/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calculator",
    icon: "./themes/Yaru/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "about-gurbaj",
    title: "About Gurbaj",
    icon: "./themes/Yaru/system/user-home.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutGurbaj,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Yaru/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Yaru/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: "./themes/Yaru/apps/spotify.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySpotify,
  },
  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Yaru/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Yaru/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayTrash,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/Yaru/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "youtube-jimmy",
    title: "Conversation with Founder of Wikipedia",
    icon: "./themes/Yaru/apps/youtube-logo-png-2067.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayYoutubeJimmy,
  },
];

export default apps;

import React, { useEffect } from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, Decorator } from "@storybook/react";
import { TooltipProvider } from "../src/tooltip";

// Base styles — light/dark mode built-in via .dark class
import "../src/styles/global.css";

// Theme presets (must be imported AFTER base styles for cascade priority)
import "../src/styles/themes/presets/corporate.css";
import "../src/styles/themes/presets/vibrant.css";
import "../src/styles/themes/presets/minimal.css";
import "../src/styles/themes/presets/warm.css";
import "../src/styles/themes/presets/ocean.css";
import "../src/styles/themes/presets/rose.css";

// Swiper CSS for Carousel component
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

// Inject global override styles for toolbar controls
const STYLE_ID = "sb-global-overrides";
function ensureGlobalStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    /* Ring off */
    html.sb-no-ring *:focus,
    html.sb-no-ring *:focus-visible {
      outline: none !important;
      box-shadow: none !important;
      ring: none !important;
    }

    /* Reduce motion */
    html.sb-reduce-motion *,
    html.sb-reduce-motion *::before,
    html.sb-reduce-motion *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  `;
  document.head.appendChild(style);
}

// Decorator: wrap every story in TooltipProvider so Tooltip works anywhere
const withTooltipProvider: Decorator = (Story) => (
  <TooltipProvider>
    <Story />
  </TooltipProvider>
);

// Decorator: theme preset
const withThemePreset: Decorator = (Story, context) => {
  const preset = context.globals.preset || "none";

  useEffect(() => {
    const html = document.documentElement;
    if (preset === "none") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", preset);
    }
  }, [preset]);

  return <Story />;
};

// Decorator: focus ring
const withFocusRing: Decorator = (Story, context) => {
  const ring = context.globals.focusRing ?? "on";

  useEffect(() => {
    ensureGlobalStyle();
    document.documentElement.classList.toggle("sb-no-ring", ring === "off");
  }, [ring]);

  return <Story />;
};

// Decorator: reduce motion
const withReduceMotion: Decorator = (Story, context) => {
  const motion = context.globals.reduceMotion ?? "on";

  useEffect(() => {
    ensureGlobalStyle();
    document.documentElement.classList.toggle("sb-reduce-motion", motion === "off");
  }, [motion]);

  return <Story />;
};

// Decorator: RTL / LTR direction
const withDirection: Decorator = (Story, context) => {
  const dir = context.globals.direction ?? "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    return () => {
      document.documentElement.setAttribute("dir", "ltr");
    };
  }, [dir]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    preset: {
      description: "Theme preset",
      toolbar: {
        title: "Preset",
        icon: "paintbrush",
        items: [
          { value: "none", title: "Default" },
          { value: "corporate", title: "Corporate" },
          { value: "vibrant", title: "Vibrant" },
          { value: "minimal", title: "Minimal" },
          { value: "warm", title: "Warm" },
          { value: "ocean", title: "Ocean" },
          { value: "rose", title: "Rose" },
        ],
        dynamicTitle: true,
      },
    },

    focusRing: {
      description: "Toggle focus ring visibility",
      toolbar: {
        title: "Ring",
        icon: "circle",
        items: [
          { value: "on", title: "Ring: On", right: "on" },
          { value: "off", title: "Ring: Off", right: "off" },
        ],
        dynamicTitle: true,
      },
    },

    reduceMotion: {
      description: "Toggle animations and transitions",
      toolbar: {
        title: "Motion",
        icon: "lightning",
        items: [
          { value: "on", title: "Motion: On", right: "on" },
          { value: "off", title: "Motion: Off (reduce)", right: "off" },
        ],
        dynamicTitle: true,
      },
    },

    direction: {
      description: "Text direction",
      toolbar: {
        title: "Direction",
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR", right: "ltr" },
          { value: "rtl", title: "RTL", right: "rtl" },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    preset: "none",
    focusRing: "on",
    reduceMotion: "on",
    direction: "ltr",
  },

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withTooltipProvider,
    withThemePreset,
    withFocusRing,
    withReduceMotion,
    withDirection,
    // Light/Dark mode switcher (applies .dark class to html)
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;

import watchMedia from "svelte-media";

const mediaqueries = {
  xs: "(max-width: 47.9em)",
  sm: "(min-width: 48em)",
  md: "(min-width: 62em)",
  lg: "(max-height: 75em)",
  landscape: "(orientation: landscape)",
  portrait: "(orientation: portrait)",
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
  noanimations: "(prefers-reduced-motion: reduce)"
};

const media = watchMedia(mediaqueries);

export default media
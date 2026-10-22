export const delay = (ms = 400 + Math.floor(Math.random() * 801)) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, ms));

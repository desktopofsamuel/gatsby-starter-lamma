/* Credit to Janosh.io */

const min = (width) => `only screen and (min-width: ${width}px)`;
const max = (width) => `only screen and (max-width: ${width}px)`;

export const screens = {
  mobile: 425,
  tablet: 768,
  laptop: 1440,
};

const mediaQuery = {};

for (const key of Object.keys(screens)) {
  const Key = key[0].toUpperCase() + key.substr(1);
  for (const [func, name] of [
    [min, `min`],
    [max, `max`],
  ]) {
    // css query
    const query = func(screens[key]);
    mediaQuery[name + Key] = `@media ` + query;
    // js query (see window.matchMedia)
    mediaQuery[name + Key + `Js`] = query;
  }
}

export default mediaQuery;

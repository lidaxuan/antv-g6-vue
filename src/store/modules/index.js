const files = require.context('.', true, /\.js$/);
const moudles = {};

files.keys()
  .forEach((key) => {
    if (key === './index.js') return;
    const fileName = key.replace('./', '').replace('.js', '');
    const storeModule = files(key).default;
    moudles[fileName] = storeModule;
  });

export default moudles;

import utils from 'axios/lib/utils.js';

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

export default function buildParamsSerializer(type) {
  function buildURL(params) {
    if (!params) {
      return '';
    }

    let serializedParams;
    const parts = [];

    utils.forEach(params, (val, key) => {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        if (type === 'toString') {
          val = [val.toString()];
        } else if (type === 'default') {
          key = `${key}[]`;
        }
      } else {
        val = [val];
      }

      utils.forEach(val, (v) => {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(`${encode(key)}=${encode(v)}`);
      });
    });

    // eslint-disable-next-line prefer-const
    serializedParams = parts.join('&');

    return serializedParams;
  }
  return buildURL;
}

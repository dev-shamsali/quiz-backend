const escapeHtml = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};

const sanitizeValue = (val) => {
  if (typeof val === 'string') return escapeHtml(val);
  if (Array.isArray(val)) return val.map(sanitizeValue);
  if (val && typeof val === 'object') return sanitizeObj(val);
  return val;
};

const sanitizeObj = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;
  for (const key of Object.keys(obj)) {
    if (key.startsWith('$') || key.includes('.')) {
      delete obj[key];
    } else {
      obj[key] = sanitizeValue(obj[key]);
    }
  }
  return obj;
};

const sanitizeRequest = (req, res, next) => {
  if (req.body && typeof req.body === 'object') sanitizeObj(req.body);
  if (req.params && typeof req.params === 'object') sanitizeObj(req.params);
  next();
};

export default sanitizeRequest;

let c = require("./const.js");

// 0=silent, 1=errors, 2=warn, 3=info, 4=trace
let logLevel = 0;
let timestampOn = true;
let colorOn = true;

module.exports = {
  log: (message) => {
    _log(0, message)
  },
  setLevel: (level) => {
    logLevel = level;
  },
  error: (message) => {
    _log(1, message);
  },
  warn: (message) => {
    _log(2, message);
  },
  info: (message) => {
    _log(3, message);
  },
  trace: (message) => {
    _log(4, message);
  },
  showTimestamp: (showTimestamp) => {
    timestampOn = showTimestamp;
  },
  useColor: (useColor) => {
    colorOn = useColor;
  },
};

const _log = (level, message) => {
  if (logLevel < level) {
    return
  }
  msg = ""
  // Timestamp
  if (timestampOn) {
    if (colorOn) {
      msg += `${c.COLORS.GRAY}[${_getCurrentTimestamp()}]${c.COLORS.RESET} `;
    } else {
      msg += `[${_getCurrentTimestamp()}] `;
    }
  }
  // Prefix
  if (colorOn) {
    msg += c.LEVEL_COLOR_MAP[level];
  }
  msg += c.LEVEL_PREFIX_MAP[level];
  if (colorOn) {
    msg += c.COLORS.RESET;
  }
  // Message
  msg += message;
  console.log(msg);
}

const _getCurrentTimestamp = () => {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

const COLORS = {
  BLACK: "\x1b[30m",
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  MAGENTA: "\x1b[35m",
  CYAN: "\x1b[36m",
  WHITE: "\x1b[37m",
  GRAY: "\x1b[90m",
  RESET: "\x1b[0m",
};

module.exports = {
  COLORS: COLORS,

// 0=silent, 1=errors, 2=warn, 3=info, 4=trace
  LEVEL_PREFIX_MAP: [
    "",
    "[ERR] ",
    "[WARN] ",
    "[INFO] ",
    "[TRCE] ",
  ],
  LEVEL_COLOR_MAP: [
    "",
    COLORS.RED,
    COLORS.YELLOW,
    COLORS.CYAN,
    COLORS.GRAY,
  ]
};

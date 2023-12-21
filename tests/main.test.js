const c = require("../const")

const EXAMPLE_STRING = "Message123"
const LEVELS = [
  "silent",
  "error",
  "warning",
  "info",
  "trace",
]

let l;
let spy;

describe('general functionality', () => {

  beforeEach(() => {
    l = require("../log")
    spy = jest.spyOn(console, 'log').mockImplementation();
  })

  afterEach(() => {
    spy.mockClear(); // Reset the spy between tests
  });

  test('basic', () => {
    l.log(EXAMPLE_STRING);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(EXAMPLE_STRING));
  });

  test('log level', () => {
    l.useColor(false);
    l.showTimestamp(false);

    l.setLevel(0);
    l.error(EXAMPLE_STRING);
    expect(spy).not.toHaveBeenCalled();

    l.setLevel(1);
    l.error(EXAMPLE_STRING);
    expect(spy).toHaveBeenCalledWith(`${c.LEVEL_PREFIX_MAP[1]}${EXAMPLE_STRING}`);
  })

  test('timestamp off', () => {
    l.showTimestamp(false);
    l.log(EXAMPLE_STRING);
    expect(spy).toHaveBeenCalledWith(EXAMPLE_STRING);
  });

});

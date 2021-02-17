import "react-native";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "https://localhost",
});
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

/**
 * Ignore React Web errors when using React Native
 * allow other errors to propagate if they're relevant.
 */
const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser)|is using incorrect casing/;
const realConsoleError = console.error;
console.error = (message) => {
  if (message.match(suppressedErrors)) {
    return;
  }
  realConsoleError(message);
};

/**
 * This line is necessary as Jest does not work well nicely
 * with embedded Icons from react-native-elements.
 */
jest.mock("react-native-elements/src/icons/Icon");

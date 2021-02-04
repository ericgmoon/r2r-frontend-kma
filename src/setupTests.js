import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
jest.useFakeTimers();

// This line is necessary as Jest does not work well nicely with embedded Icons
// from react-native-elements.
jest.mock("react-native-elements/src/icons/Icon");

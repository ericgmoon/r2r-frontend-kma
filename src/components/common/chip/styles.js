import styled from "styled-components/native";
import { Button } from "react-native-elements";

export default styled(Button).attrs(({ active, activeColor, chipStyle }) => ({
  buttonStyle: {
    borderRadius: 36,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: active ? activeColor : `#ECECEC`,
    ...chipStyle,
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "700",
    color: active ? "white" : "black",
  },
}))([]);

// styled components with attrs (custom style props) require ([]) chained at the end

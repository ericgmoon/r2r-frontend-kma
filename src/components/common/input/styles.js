import styled from "styled-components/native";
import { Input } from "react-native-elements";

export default styled(Input).attrs(({ inputContainerStyle }) => ({
  inputStyle: {
    padding: 12,
    fontWeight: "bold",
    fontSize: 32,
  },
  // Note: borderWidth doesn't control borderBottom
  inputContainerStyle: {
    borderStyle: "solid",
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 2,
    width: "100%",
    ...inputContainerStyle,
  },
  labelStyle: {
    paddingLeft: 16,
    paddingBottom: 4,
    fontSize: 24,
  },
}))([]);

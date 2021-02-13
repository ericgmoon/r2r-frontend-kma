import styled from "styled-components/native";
import { Button } from "react-native-elements";

export default styled(Button).attrs(
  ({ icon, iconLeft, iconContainerStyle }) => ({
    buttonStyle: {
      borderRadius: 36,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 20,
      paddingRight: 20,
      background: "#000",
      ...(icon && (iconLeft ? { paddingLeft: 12 } : { paddingRight: 12 })),
    },
    iconContainerStyle: {
      ...(iconLeft ? { marginRight: 16 } : { marginLeft: 16 }),
      ...iconContainerStyle,
    },
  })
)([]);

// styled components with attrs (custom style props) require ([]) chained at the end

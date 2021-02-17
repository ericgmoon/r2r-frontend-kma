import styled from "styled-components/native";
import { Button } from "react-native-elements";

export default styled(Button).attrs(
  ({ icon, iconRight, iconContainerStyle }) => ({
    buttonStyle: {
      borderRadius: 36,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 20,
      paddingRight: 20,
      background: "#000",
      ...(icon && (iconRight ? { paddingRight: 12 } : { paddingLeft: 12 })),
    },
    iconContainerStyle: {
      ...(iconRight ? { marginLeft: 16 } : { marginRight: 16 }),
      ...iconContainerStyle,
    },
  })
)([]);

// styled components with attrs (custom style props) require ([]) chained at the end

import { Overlay } from "react-native-elements";
import styled from "styled-components/native";

export default styled(Overlay).attrs(() => ({
  overlayStyle: {
    borderRadius: 20,
    padding: 20,
    background: "#fafafa",
    width: "80%",
  },
}))([]);

export const Container = styled.View(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const TitleContainer = styled.View(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
  height: 24,
}));

export const Title = styled.Text(() => ({
  fontWeight: "bold",
  fontSize: 20,
}));

export const ChildrenContainer = styled.View(() => ({
  marginTop: 20,
  marginBottom: 20,
}));

export const ButtonContainer = styled.View(() => ({
  alignItems: "center",
  justifyContent: "center",
}));

export const IconContainer = styled.View(() => ({
  height: 24,
  width: 24,
}));

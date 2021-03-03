import styled from "styled-components/native";
import { Chip } from "@r2r/common";

export const StyledChip = styled(Chip).attrs(() => ({
  chipStyle: {
    paddingLeft: 48,
    paddingRight: 48,
  },
}))([]);

export const NameContainer = styled.View(() => ({
  zIndex: 1,
}));

export const Content = styled.Text(() => ({
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 12,
  marginBottom: 12,
  minHeight: "30%",
}));

export const ButtonContainer = styled.View(() => ({
  marginTop: 16,
  marginBottom: 16,
}));

export const ContentContainer = styled.View(() => ({
  borderRadius: 20,
  padding: 32,
  backgroundColor: "#fff",
  height: "100%",
  width: "100%",
  marginTop: -16,
  overflow: "hidden",
}));

export const Container = styled.View(() => ({
  alignItems: "center",
  width: "70%",
  height: "40%",
}));

export const StyledAvatar = styled.Image(({ active }) => ({
  height: "100%",
  width: 96,
  transform: [{ scaleX: active.isLeft ? -1 : 1 }],
  alignSelf: active.isLeft ? "flex-start" : "flex-end",
}));

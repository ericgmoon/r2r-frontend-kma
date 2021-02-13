import styled from "styled-components/native";
import { Chip } from "@r2r/common";

export const Container = styled.View(({ direction }) => ({
  display: "flex",
  padding: 8,
  flexDirection: direction,
  alignItems: direction === "column" ? "flex-start" : null,
}));

export const StyledChip = styled(Chip)(() => ({
  margin: 4,
}));

import React from "react";
import { Container, StyledChip } from "./styles";

export default function Navigation({
  items,
  current,
  direction = "row",
  onNavigate,
  ...others
}) {
  return (
    <Container direction={direction} {...others}>
      {items.map((item) => (
        <StyledChip
          key={item.value}
          label={item.label}
          value={item.value}
          active={current === item.value}
          onPress={() => {
            onNavigate(item.value);
          }}
        />
      ))}
    </Container>
  );
}

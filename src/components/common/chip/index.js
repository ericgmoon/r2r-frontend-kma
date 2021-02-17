import React from "react";
import StyledChip from "./styles";

export default function Chip({ label, value, active, ...others }) {
  return <StyledChip title={label} value={value} active={active} {...others} />;
}

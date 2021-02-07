import React from "react";
import { ListItem as EListItem, ThemeProvider } from "react-native-elements";

export default function ListItem(props) {
  const { children, title, subtitle, icon, iconColor, color, ...others } = props;

  return (
    <ThemeProvider theme={{
      colors: { primary: color || "black" }
    }}>
      <EListItem {...others}>
        <EListItem.Content>
          <EListItem.Title>{title}</EListItem.Title>
          <EListItem.Subtitle>{subtitle}</EListItem.Subtitle>
        </EListItem.Content>
      </EListItem>
    </ThemeProvider>
  );
}

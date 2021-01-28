import React from "react";
import { Text, View } from "react-native";
import { Overlay as EOverlay, ThemeProvider } from "react-native-elements";
import Button from "../button";
import styles from "./styles";

export default function Overlay(props) {
  const { title, buttonProps, button, children, ...others } = props;

  return (
    <ThemeProvider>
      <EOverlay isVisible={true} overlayStyle={styles.overlay} {...others}>
        <View>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          <View style={styles.children}>{children}</View>
          {button ? <Button {...buttonProps}>{button}</Button> : null}
        </View>
      </EOverlay>
    </ThemeProvider>
  );
}

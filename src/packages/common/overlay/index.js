import React from "react";
import { Text, View } from "react-native";
import {
  Overlay as EOverlay,
  ThemeProvider,
  Icon,
} from "react-native-elements";
import Button from "../button";
import styles from "./styles";

export default function Overlay(props) {
  const {
    title,
    close,
    onClosePress,
    buttonProps,
    button,
    children,
    ...others
  } = props;

  return (
    <ThemeProvider>
      <EOverlay isVisible={true} overlayStyle={styles.overlay} {...others}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              height: 25,
            }}
          >
            <View>
              {title ? <Text style={styles.title}>{title}</Text> : null}
            </View>
            <View style={{ height: 15, width: 25 }}>
              {close ? null : (
                <Icon name="clear" color="black" onPress={onClosePress} />
              )}
            </View>
          </View>

          <View style={styles.children}>{children}</View>
          <View style={styles.button}>
            {button ? <Button {...buttonProps}>{button}</Button> : null}
          </View>
        </View>
      </EOverlay>
    </ThemeProvider>
  );
}

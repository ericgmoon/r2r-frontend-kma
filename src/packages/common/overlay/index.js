import React from "react";
import { Text, View } from "react-native";
<<<<<<< Updated upstream
import {
  Overlay as EOverlay,
  ThemeProvider,
  Icon,
} from "react-native-elements";
=======
import { Overlay as EOverlay, ThemeProvider } from "react-native-elements";
>>>>>>> Stashed changes
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
      <EOverlay isVisible={true} overlayStyle={styles.overlay} {...others}>
        <View style={styles.flexContainer}>
          <View style={styles.flexTitleContainer}>
            <View>
              {title ? <Text style={styles.title}>{title}</Text> : null}
            </View>
            <View style={styles.iconContainer}>
              {close ? (
                <Icon name="clear" color="black" onPress={onClosePress} />
              ) : null}
            </View>
          </View>

          <View style={styles.children}>{children}</View>
          <View style={styles.button}>
            {button ? <Button {...buttonProps}>{button}</Button> : null}
          </View>
        </View>
      </EOverlay>
  );
}

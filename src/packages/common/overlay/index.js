import React from "react";
import { Text, View } from "react-native";
import { Overlay as EOverlay, Icon } from "react-native-elements";
import Button from "../button";
import styles from "./styles";

export default function Overlay(props) {
  const {
    title,
    isCloseIconVisible,
    onClosePress,
    buttonProps,
    button,
    children,
    ...others
  } = props;

  return (
    <EOverlay isVisible overlayStyle={styles.overlay} {...others}>
      <View style={styles.flexContainer}>
        <View style={styles.flexTitleContainer}>
          <View>
            {title ? <Text style={styles.title}>{title}</Text> : null}
          </View>
          <View style={styles.iconContainer}>
            {isCloseIconVisible ? (
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

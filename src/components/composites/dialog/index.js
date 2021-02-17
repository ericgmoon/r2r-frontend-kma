import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import { Button, Chip } from "@r2r/common";
import styles from "./styles";

const MAX_LINES = 3;

export default function Dialog(props) {
  const { data, avatars, onDialogFinish, ...others } = props;

  const [index, setIndex] = useState(0);
  const [truncatedData, setTruncatedData] = useState(data);
  const [active, setActive] = useState(truncatedData[0]);

  useEffect(() => setActive(truncatedData[index]), [index]);

  const onNextPress = () => {
    if (index + 1 < truncatedData.length) setIndex(index + 1);
    else onDialogFinish();
  };

  return (
    <View style={styles.root}>
      <View style={styles.nameContainer}>
        <Chip
          label={active.name}
          chipStyle={styles.name}
          active
          activeColor={active.nameColor}
          isStatic
        />
      </View>
      <View style={styles.body} {...others}>
        <Text
          style={styles.text}
          onTextLayout={async ({ nativeEvent: { lines } }) => {
            /**
             * As the Dialog design does not allow text to be longer than a
             * certain number of lines (device dependent), any overflow text is
             * split into a separate panel.
             */
            if (lines.length > MAX_LINES) {
              const currEntry = { ...active };
              const nextEntry = { ...active };
              currEntry.text = lines
                .slice(0, 3)
                .map((e) => e.text)
                .join("");
              nextEntry.text = lines
                .slice(3)
                .map((e) => e.text)
                .join("");
              await setTruncatedData([
                ...truncatedData.slice(0, index),
                currEntry,
                nextEntry,
                ...truncatedData.slice(index + 1),
              ]);
            }
          }}
          ellipsizeMode="clip"
          numberOfLines={MAX_LINES}
        >
          {active.text}
        </Text>
        <Image
          source={avatars[active.avatar]}
          style={[
            styles.avatar,
            {
              transform: [{ scaleX: active.isLeft ? -1 : 1 }],
              alignSelf: active.isLeft ? "flex-start" : "flex-end",
            },
          ]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.navButtonContainer}>
        <Button icon={active.buttonIcon || "east"} onPress={onNextPress}>
          {active.buttonText || "next"}
        </Button>
      </View>
    </View>
  );
}

Dialog.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      nameColor: PropTypes.string,
      isLeft: PropTypes.bool,
      buttonText: PropTypes.string,
      buttonIcon: PropTypes.string,
    })
  ).isRequired,
  avatars: PropTypes.objectOf(PropTypes.node),
  onDialogFinish: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  avatars: {},
};

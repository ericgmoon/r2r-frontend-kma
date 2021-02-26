import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@r2r/common";
import {
  Container,
  StyledChip,
  NameContainer,
  ContentContainer,
  Content,
  StyledAvatar,
  ButtonContainer,
} from "./styles";

const MAX_LINES = 3;

export default function Dialog(props) {
  const { content, avatars, onDialogFinish, ...others } = props;

  const [index, setIndex] = useState(0);
  const [truncatedContent, setTruncatedContent] = useState(content);
  const [active, setActive] = useState(truncatedContent[0]);

  useEffect(() => setActive(truncatedContent[index]), [index]);
  useEffect(() => setActive(truncatedContent[index]), [truncatedContent]);

  const onNextPress = () => {
    if (index + 1 < truncatedContent.length) setIndex(index + 1);
    else {
      onDialogFinish();
    }
  };

  return (
    <Container>
      <NameContainer>
        <StyledChip
          label={active.name}
          active
          activeColor={active.nameColor}
          isStatic
        />
      </NameContainer>
      <ContentContainer {...others}>
        <Content
          onTextLayout={async ({ nativeEvent: { lines } }) => {
            /**
             * As the Dialog design does not allow text to be longer than a
             * certain number of lines (device dependent), any overflow text is
             * split into a separate panel.
             */
            if (lines.length > MAX_LINES) {
              const currEntry = {
                ...active,
                ...(active.applyCustomButtonForTruncation
                  ? null
                  : { buttonText: undefined, buttonIcon: undefined }),
              };
              const nextEntry = {
                ...active,
              };
              currEntry.text = lines
                .slice(0, 3)
                .map((e) => e.text)
                .join("");
              nextEntry.text = lines
                .slice(3)
                .map((e) => e.text)
                .join("");
              await setTruncatedContent([
                ...truncatedContent.slice(0, index),
                currEntry,
                nextEntry,
                ...truncatedContent.slice(index + 1),
              ]);
            }
          }}
          ellipsizeMode="clip"
          numberOfLines={MAX_LINES}
        >
          {active.text}
        </Content>
        <StyledAvatar
          source={avatars[active.avatar]}
          active={active}
          resizeMode="contain"
        />
      </ContentContainer>
      <ButtonContainer>
        <Button
          testID="nextButton"
          icon={active.buttonIcon || "east"}
          onPress={onNextPress}
        >
          {active.buttonText || "next"}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

Dialog.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      nameColor: PropTypes.string,
      isLeft: PropTypes.bool,
      buttonText: PropTypes.string,
      buttonIcon: PropTypes.string,
      applyCustomButtonForTruncation: PropTypes.bool,
    })
  ).isRequired,
  avatars: PropTypes.objectOf(PropTypes.node),
  onDialogFinish: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  avatars: {},
};

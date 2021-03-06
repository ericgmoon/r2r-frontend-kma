import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import Button from "@r2r/common/button";
import StyledOverlay, {
  Container,
  TitleContainer,
  Title,
  ChildrenContainer,
  ButtonContainer,
  IconContainer,
} from "./styles";

export default function Overlay({
  title,
  showClose,
  onClose = () => {},
  buttonProps,
  buttonLabel,
  children,
  ...others
}) {
  return (
    <StyledOverlay {...others}>
      <Container>
        <TitleContainer>
          <View>{title && <Title>{title}</Title>}</View>
          <IconContainer>
            {showClose ? (
              <Icon
                name="clear"
                color="black"
                size={24}
                onPress={onClose}
                testID="closeButton"
                type="material"
              />
            ) : null}
          </IconContainer>
        </TitleContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <ButtonContainer>
          {buttonLabel ? (
            <Button testID="mainOverlayButton" {...buttonProps}>
              {buttonLabel}
            </Button>
          ) : null}
        </ButtonContainer>
      </Container>
    </StyledOverlay>
  );
}

import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "@r2r/common";
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
  button,
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
                type="material"
              />
            ) : null}
          </IconContainer>
        </TitleContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <ButtonContainer>
          {button ? <Button {...buttonProps}>{button}</Button> : null}
        </ButtonContainer>
      </Container>
    </StyledOverlay>
  );
}

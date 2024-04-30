import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  small: {
    iconSize: 16,
    iconStroke: 1,
    "--icon-wrapper__height": "16px",
    "--text-input__height": "1.5rem",
    "--text-input__padding-left": "24px",
    "--text-input__outline-offset": "2px",
    "--text-input__font-size": "0.875rem",
    "--text-input__border-block-end": `1px solid ${COLORS.gray700}`,
    "--text-input__border-block-end--hover": `1px solid ${COLORS.black}`,
  },
  large: {
    iconSize: 24,
    iconStroke: 2,
    height: 36,
    "--icon-wrapper__height": "24px",
    "--text-input__height": "2.25rem",
    "--text-input__padding-left": "36px",
    "--text-input__outline-offset": "3px",
    "--text-input__font-size": "1.125rem",
    "--text-input__border-block-end": `2px solid ${COLORS.gray700}`,
    "--text-input__border-block-end--hover": `2px solid ${COLORS.black}`,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const sizeStyles = SIZE_STYLES[size.toLocaleLowerCase()];
  if (!sizeStyles) throw new Error(`Unrecognized IconInput size "${size}".`);

  return (
    <Container style={sizeStyles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={sizeStyles.iconSize}>
        <Icon
          id={icon}
          size={sizeStyles.iconSize}
          strokeWidth={sizeStyles.iconStroke}
        />
      </IconWrapper>
      <TextInput width={width} {...delegated} />
    </Container>
  );
};

const Container = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-wrapper__height);
`;

const TextInput = styled.input.attrs({ type: "text" })`
  height: var(--text-input__height);
  border: none;
  border-block-end: var(--text-input__border-block-end);
  outline-offset: var(--text-input__outline-offset);
  padding-top: 2px;
  padding-left: var(--text-input__padding-left);
  font-weight: 700;
  font-size: var(--text-input__font-size);
  color: inherit;
  width: ${({ width }) => width}px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    border-block-end: var(--text-input__border-block-end--hover);
  }
`;

export default IconInput;

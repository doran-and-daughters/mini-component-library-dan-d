import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <Wrapper size={24}>
          <Icon id="chevron-down" size={24} strokeWidth={2}></Icon>
        </Wrapper>
      </PresentationalSelect>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  opacity: 0; /* NB */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font: 400 1rem/1.2 Roboto, sans-serif;
  height: 42px;
  padding: 11px 16px 13px;
  padding-right: 3rem;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px auto hsl(218 57 53); /* fallback */
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  pointer-events: none;
`;

export default Select;

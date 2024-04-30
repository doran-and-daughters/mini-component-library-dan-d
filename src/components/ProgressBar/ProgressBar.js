/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const SIZE_STYLES = {
  small: {
    "--bar__height": "8px",
    "--container__padding": 0,
    "--container__border-radius": "4px",
    "--wrapper__border-radius": "4px",
  },
  medium: {
    "--bar__height": "12px",
    "--container__padding": 0,
    "--container__border-radius": "4px",
    "--wrapper__border-radius": "4px",
  },
  large: {
    "--bar__height": "16px",
    "--container__padding": "4px",
    "--container__border-radius": "8px",
    "--wrapper__border-radius": "6px", // NB
  },
};

const ProgressBar = ({ value, size }) => {
  const sizeStyles = SIZE_STYLES[size.toLocaleLowerCase()];
  if (!sizeStyles) throw new Error(`Unrecognized ProgressBar size "${size}".`);

  return (
    <Container style={sizeStyles} role="progressbar" aria-valuenow={value}>
      <Wrapper>
        <Bar style={{ "--bar__width": `${value}%` }}></Bar>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--container__border-radius);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--container__padding);
`;

const Wrapper = styled.div`
  border-radius: var(--wrapper__border-radius);
  /* Trim corners of child once it reaches complete. */
  overflow: clip;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--bar__height);
  width: var(--bar__width);
`;

export default ProgressBar;

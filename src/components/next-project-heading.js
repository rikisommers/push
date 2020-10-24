import React from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";

const Heading = styled(Text)`

  font-weight: normal;
`;

const Rule = styled.hr`
  background: #e3e4e5;
  height: 1px;
  border: 0;
`;

const NextProjectHeading = () => (
  <Box mb={5}>
    <Rule />
    <Heading pt={3}>Next Project</Heading>
  </Box>
);

export default NextProjectHeading;
import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Text>&copy; Copyright 2021 Pawan JS</Styled.Text>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;

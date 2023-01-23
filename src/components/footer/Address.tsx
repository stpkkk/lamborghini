import React from 'react';
import styled from 'styled-components';
import { Typography } from '../common';

const AddressWrapper = styled.div`
  address {
    padding: 0 0 20px;
    color: #ffffff;
    flex-basis: 462px;
  }
`;

export const Address: React.FC = () => (
  <AddressWrapper>
    <Typography fz={16} p="0 0 20px" color="#ffffff">
      АДРЕС
    </Typography>
    <address>
      Sitio do Escampadinho, Mexilhoeira Grande, 8500-148 Portimao, Portugal
    </address>
  </AddressWrapper>
);

import React from 'react';
import styled from 'styled-components';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { Typography } from '../common';

const AddressWrapper = styled.div`
  filter: grayscale(1);
  -ms-filter: grayscale(1);
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(1);
  -o-filter: grayscale(1);
  address {
    margin: 0 0 20px;
    color: #ffffff;
    flex-basis: 462px;
	max-width: 350px;
  }
`;

export const Address: React.FC = () => (
  <AddressWrapper>
    <Typography fz={16} m="0 0 20px" color="#ffffff">
      АДРЕС
    </Typography>
    <address>
      Sitio do Escampadinho, Mexilhoeira Grande, 8500-148 Portimao, Portugal
    </address>
    <YMaps>
      <Map
        defaultState={{
          center: [37.23142279396843, -8.628370515477373],
          zoom: 14,
        }}
        width="330px"
        height="220px"
      />
    </YMaps>
  </AddressWrapper>
);

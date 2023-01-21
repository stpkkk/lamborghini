import React from 'react';
import styled from 'styled-components';
import { Typography } from '../common';
import { theme } from '../../styles';
import { Container } from '../layout';
import EvoCar from '../../assets/images/evo-car.png';
import FirstDecImage from '../../assets/images/evo-dec-1.png';
import SecondDecImage from '../../assets/images/evo-dec-2.png';

const { darkGray } = theme.colors.background;

const EvoBlackWrapper = styled.div`
  background: ${darkGray};
  padding: 100px 0 50px;
  min-height: 100vh;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    background: url(${FirstDecImage});
    width: 185px;
    height: 213px;
    top: 320px;
    left: 380px;
  }
  ::after {
    content: '';
    position: absolute;
    background: url(${SecondDecImage});
    width: 498px;
    height: 572px;
    top: 400px;
    left: 470px;
  }
  img {
    margin: 0 auto 60px;
    display: block;
    position: relative;
    z-index: 1;
  }
`;

const EvoBlackInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 200px;
  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 0 50px 0;
  }
`;
const EvoBlackTextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 440px;
  gap: 30px;
`;
const StyledDl = styled.dl`
  display: flex;
  justify-content: center;
  gap: 0 65px;
  position: relative;
  z-index: 1;
  dd,
  dt {
    color: #ffffff;
  }
`;

export const EvoBlack: React.FC = () => {
  const descriptionListData = [
    ['ПЕРЕМЕЩЕНИЕ', '5204 см³'],
    ['КРУТЯЩИЙ МОМЕНТ', '570 Нм при 6500 об/мин'],
    ['МОЩНОСТЬ (л.с.) / МОЩНОСТЬ (КВТ)', '620 л.с. при 8250 об/мин'],
    ['МАКС. СКОРОСТЬ', '325 км /ч'],
    ['0-100 КМ/Ч', '2,9 с'],
  ];

  return (
    <EvoBlackWrapper>
      <Container mw={920}>
        <EvoBlackInfoWrapper>
          <h3>СУПЕР ТРОФЕО ЭВО</h3>
          <EvoBlackTextBox>
            <Typography color="#FFFFFF">
              Новый Huracán Super Trofeo EVO достигает еще больших высот, чем
              его прославленный предшественник, благодаря полностью
              переработанной аэродинамике. Huracán Super Trofeo EVO является
              идеальной стартовой площадкой для всех водителей, которые хотят
              начать карьеру в гонках класса GT.
            </Typography>
            <Typography color="#FFFFFF">
              Huracán EVO — это эволюция самого успешного Lamborghini с
              двигателем V10. В результате тонкой настройки и усовершенствования
              существующих функций в сочетании с новыми конструктивными
              решениями, повышающими производительность, автомобиль выделяется
              своей способностью предугадывать и удовлетворять поведение,
              ожидания и желания водителя.
            </Typography>
          </EvoBlackTextBox>
        </EvoBlackInfoWrapper>
        <img src={EvoCar} alt="Huracán Super Trofeo EVO" />
        <StyledDl>
          {descriptionListData.map((d) => (
            <div key={crypto.randomUUID()}>
              <dd>{d[0]}</dd>
              <dt>{d[1]}</dt>
            </div>
          ))}
        </StyledDl>
      </Container>
    </EvoBlackWrapper>
  );
};

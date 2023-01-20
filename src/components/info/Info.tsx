import React from 'react';
import styled from 'styled-components';
import { Typography } from '../common';
import { Container } from '../layout';
import infoFirstImage from '../../assets/images/info-first.jpg';
import infoSecondImage from '../../assets/images/info-second.png';
import { InfoTable } from './InfoTable';

const InfoSection = styled.section`
  margin-bottom: 100px;
`;

const InfoPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 0 0 0;
  h3 {
    margin: 0 0 30px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
  }
  img {
    object-fit: cover;
    align-self: center;
  }
  :nth-child(1) {
    display: block;
  }
  :nth-child(3) {
    padding: 66px 0 0 0;
  }
`;

const InfoTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 20px;
  margin: 0 0 30px;
`;

const InfoContent = styled.div`
  flex-basis: 415px;
`;

export const Info: React.FC = () => (
  <Container mw={920}>
    <InfoSection>
      <InfoPart>
        <h3>СУПЕР ТРОФЕО МИРОВОЙ ФИНАЛ</h3>
        <InfoTextBox>
          <Typography fb="440px">
            Мировой финал Lamborghini завершает каждый сезон Super Trofeo с 2013
            года. Каждый год гонщики всех континентальных чемпионатов
            отправляются на разные трассы и принимают участие в двух 50-минутных
            спринтерских гонках, где определяется победитель в общем зачете. как
            чемпион мира Lamborghini. Мировой финал Lamborghini — это не только
            крупнейший гоночный уик-энд года, но и настоящий фестиваль
            автоспорта, который привлекает поклонников со всего мира.
          </Typography>
          <Typography fb="440px" fw={700}>
            Парад владельцев, превью и развлечения в паддоке для болельщиков —
            это лишь некоторые из мероприятий, организованных в рамках
            мероприятия.
          </Typography>
        </InfoTextBox>
        <img src={infoFirstImage} alt="race" />
      </InfoPart>
      <InfoPart>
        <InfoContent>
          <h3>КОМАНДЫ СУПЕР ТРОФЕО</h3>
          <Typography mw={352} m="0 0 30px">
            Все автомобили, которые участвуют в чемпионатах Lamborghini Super
            Trofeo, управляются частными командами, которые используют свой опыт
            для тонкой настройки их для водителей. Для каждого континентального
            чемпионата Lamborghini Super Trofeo существуют рейтинги пилотов и
            команд.
          </Typography>
          <Typography mw={352}>
            Пилоты и команды, участвующие в континентальной серии, каждый год
            соревнуются друг с другом в Гранд Финале Lamborghini, мероприятии,
            которое завершает спортивный сезон Super Trofeo. Две
            квалификационные сессии и две гонки определяют чемпионов мира серии.
            Каждый год Гранд-финал проводится на разных трассах, и в прошлых
            выпусках он уже затрагивал европейский, азиатский и американский
            континенты.
          </Typography>
        </InfoContent>
        <img src={infoSecondImage} alt="race" />
      </InfoPart>
      <InfoPart className="info-part-third">
        <InfoContent>
          <h3>КАЛЕНДАРЬ СЕЗОНА SUPER TROFEO EUROPE 2023 ГОДА</h3>
          <Typography mw={377}>
            14 в истории серии GT, посвященный автомобилям Lamborghini Huracan
            Super Trofeo Evo. Шесть этапов, в общей сложности 12 гонок и 600
            минут соревнований будут разыграны на некоторых из самых престижных
            трасс Европы.
          </Typography>
        </InfoContent>
        <InfoTable />
      </InfoPart>
    </InfoSection>
  </Container>
);

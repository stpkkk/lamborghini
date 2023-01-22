import React from 'react';
import styled from 'styled-components';
import { Typography } from '../common';
import BlogQuoteImage from '../../assets/images/blog-quote-1.png';
import { theme } from '../../styles/theme';

const { gold } = theme.colors.text;

const BlogQuoteWrapper = styled.div`
  padding: 0 30px 100px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const BlogQuoteTextBox = styled.div`
  padding: 0 0 100px;
  flex-basis: 434px;
  blockquote {
    margin: 0 0 30px;
    cite {
      font-weight: 700;
    }
    span {
      display: block;
      font-size: 12px;
      color: ${gold};
      margin-bottom: 3px;
    }
  }
`;

export const BlogQuote: React.FC = () => (
  <BlogQuoteWrapper>
    <BlogQuoteTextBox>
      <blockquote>
        <cite>
          <span>Чемпион Am</span>Анджей Левандовски
        </cite>
        <Typography m="10px 0" fs="italic">
          «Я очень доволен титулом, моей второй победой в Am и четвертой в Super
          Trofeo, мне очень приятно делать это в этом году, потому что уровень
          соревнований очень высок. Должен сказать, сегодня было довольно легко,
          так как я все время контролировал ситуацию».
        </Typography>
      </blockquote>
      <blockquote>
        <cite>
          <span>Обладатель кубка Lamborghini</span>Жерар ван дер Хорст
        </cite>
        <Typography m="10px 0" fs="italic">
          «Я очень доволен титулом, моей второй победой в Am и четвертой в Super
          Trofeo, мне очень приятно делать это в этом году, потому что уровень
          соревнований очень высок. Должен Обладатель кубка Lamborghini добавил:
          «Здорово выиграть титул, спустя четыре года после последнего...».
        </Typography>
      </blockquote>
    </BlogQuoteTextBox>
    <img src={BlogQuoteImage} alt="quote" height={272} />
  </BlogQuoteWrapper>
);

import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';

const StyledTable = styled.table`
  flex-basis: 450px;
  border-bottom: 1px solid ${theme.colors.line.black};
  position: relative;
  top: 20px;
  ::before {
    content: '';
    border-top: 1px solid ${theme.colors.line.black};
    position: absolute;
    width: 100%;
    top: -20px;
  }
  td {
    padding: 0 5px 20px 5px;
  }
  ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export const InfoTable: React.FC = () => {
  const tableData = [
    ['Этап 1:', 'Имола (Италия)', '1-3 апреля'],
    ['Этап 2:', 'Ле-Кастелле (Франция)', '3–5 июня'],
    ['Этап 3:', 'Мизано (Италия)', '1–3 июля'],
    ['Этап 4:', 'Спа-Франкоршам (Бельгия)', '29–30 июля'],
    ['Этап 5:', 'Барселона (Испания)', '30 сентября–2 октября'],
    ['Этап 6:', 'Портимао (Португалия)', '3-4 ноября'],
    ['Гранд-финал 2023 :', 'Портимао (Португалия)', '5-6 ноября'],
  ];

  const keys = Object.keys(tableData[0]);
  return (
    <StyledTable>
      <tbody>
        {tableData.map((obj) => (
          <tr key={crypto.randomUUID()}>
            {keys.map((cell: any) => {
              const value = obj[cell];
              return <td key={crypto.randomUUID()}>{value}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

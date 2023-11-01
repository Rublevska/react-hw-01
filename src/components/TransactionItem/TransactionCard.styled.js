import styled from 'styled-components';

export const Line = styled.tr`
  height: 40px;
  color: ${p => p.theme.colors.cardTextColor};
  &:nth-child(2n-1) {
    background-color: ${p => p.theme.colors.statsColor};
  }
`;

export const Column = styled.td`
  border-left: 1px solid ${p => p.theme.colors.borderColor};
  border-right: 1px solid ${p => p.theme.colors.borderColor};
`;

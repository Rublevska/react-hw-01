import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 750px;
  margin: 0 auto ${p => p.theme.spasing(20)} auto;
  background-color: ${p => p.theme.colors.tableRows};
  box-shadow: ${p => p.theme.shadows.small};
  text-align: center;
  border-collapse: collapse;
`;

export const Header = styled.thead`
  height: 40px;
  background-color: ${p => p.theme.colors.tableHeader};
  color: ${p => p.theme.colors.whiteText};
  border: 1px solid ${p => p.theme.colors.borderColor};
`;

export const Column = styled.th`
  border: 1px solid ${p => p.theme.colors.borderColor};
`;

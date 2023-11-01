import styled from 'styled-components';

export const RangList = styled.ul`
  display: flex;
  border-bottom-left-radius: ${p => p.theme.radii.sd};
  border-bottom-right-radius: ${p => p.theme.radii.sd};
  background-color: ${p => p.theme.colors.statsColor};
`;

export const RangItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 3);
  padding-top: ${p => p.theme.spasing(3)};
  padding-bottom: ${p => p.theme.spasing(3)};
  border-top: 1px solid ${p => p.theme.colors.borderColor};
  border-left: 1px solid ${p => p.theme.colors.borderColor};
`;

export const RangInfo = styled.span`
  font-weight: 700;
`;

export const RangTitle = styled.span`
  color: ${p => p.theme.colors.cardTextColor};
`;

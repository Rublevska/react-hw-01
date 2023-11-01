import styled from 'styled-components';

export const StatisticSection = styled.section`
  max-width: 300px;
  margin: 0px auto ${p => p.theme.spasing(20)} auto;
  padding-top: ${p => p.theme.spasing(7)};

  border-radius: ${p => p.theme.radii.sd};
  background-color: ${p => p.theme.colors.cardColor};
  box-shadow: ${p => p.theme.shadows.small};
`;

export const TitleWrapper = styled.div`
  text-align: center;
  font-size: large;
  font-weight: 700;
  margin-bottom: ${p => p.theme.spasing(7)};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: large;
  font-weight: 700;
`;

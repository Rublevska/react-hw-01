import { StatisticsList } from 'components/StatisticsList/StatisticList';
import { StatisticSection, TitleWrapper, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticSection>
    {title && (
      <TitleWrapper>
        <Title>Upload stats</Title>
      </TitleWrapper>
    )}
    <StatisticsList stats={stats} />
  </StatisticSection>
);

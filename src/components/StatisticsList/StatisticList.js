import { UploadList, UploadItem, UploadInfo } from './StatisticsList.styled.js';

export const StatisticsList = ({ stats }) => (
  <UploadList>
    {stats.map(statItem => (
      <UploadItem key={statItem.id}>
        <span>{statItem.label}</span>
        <UploadInfo>{statItem.percentage}%</UploadInfo>
      </UploadItem>
    ))}
  </UploadList>
);

import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const UploadList = styled.ul`
  display: flex;
`;

export const UploadItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  gap: ${p => p.theme.spasing(2)};
  padding-top: ${p => p.theme.spasing(3)};
  padding-bottom: ${p => p.theme.spasing(3)};
  border-top: 1px solid ${p => p.theme.colors.borderColor};
  border-left: 1px solid ${p => p.theme.colors.borderColor};
  color: ${p => p.theme.colors.whiteText};
  background-color: ${getRandomHexColor};
`;

export const UploadInfo = styled.span`
  font-size: 1.3em;
`;

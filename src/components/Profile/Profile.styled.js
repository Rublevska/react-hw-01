import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 300px;
  margin: ${p => p.theme.spasing(20)} auto;

  border-radius: ${p => p.theme.radii.sd};
  background-color: ${p => p.theme.colors.cardColor};
  box-shadow: ${p => p.theme.shadows.small};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.spasing(7)};
  padding-bottom: ${p => p.theme.spasing(7)};
  gap: ${p => p.theme.spasing(3)};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${p => p.theme.radii.ld};
  border: 1px solid ${p => p.theme.colors.borderColor};
  margin-bottom: ${p => p.theme.spasing(2)};
`;

export const Username = styled.span`
  font-size: large;
  font-weight: 700;
`;

export const Userinfo = styled.span`
  color: ${p => p.theme.colors.cardTextColor};
`;

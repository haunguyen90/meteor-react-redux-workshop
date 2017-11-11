import styled, { css } from 'styled-components';

export const DashboardStyled = styled.div``;

export const DashboardContentStyled = styled.div`
  display: block;
  overflow: overlay;
`;

export const DashboardContentItemStyled = styled.div`
  display: flex;
  height: 70px;
  margin: 3px 0;
  justify-content: center;
  align-items: center;
  &:nth-child(even) {
    background: ${props => props.theme.colorStyled.ColorBgSeashell};
  }
  &:nth-child(odd) {
    background: ${props => props.theme.colorStyled.ColorBgList};
  }
`;

export const ErrorBlockStyled = styled.div`
  padding: 10px 0;
  color: red;
`;

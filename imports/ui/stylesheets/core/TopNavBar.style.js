import styled, { css } from 'styled-components';

export const TopNavBarStyled = styled.div`
  display: flex;
  align-items: top;
  height: 55px;
  position: relative;
  padding: 0 0px 0px 30px;
  @media (max-width: 940px) {
    padding-left: 15px;
  }

  a {
    color: ${props => props.theme.colorStyled.ColorDoveGray};
    text-decoration: none;
    font-family: ${props => props.theme.fontFamily.BaseFontFamily};
  }
`;

export const LogoStyled = styled.img`
  width: 65px;
  height: auto;
  position: absolute;
  top: 10px;
`;

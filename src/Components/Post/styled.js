import styled, { css }  from "styled-components";

export const Container = styled.article`
  margin-bottom: 1.5rem;

  /* opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? '#F00' : '#fff'}; */
  ${(props) => css`
  opacity: ${props.removed ? '#F00' : '#fff'};
  color: ${props.removed ? '#F00' : '#fff'}
  `}
`

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 0.625rem;
  opacity: 0.7;
`


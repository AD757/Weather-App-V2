import styled from 'styled-components';
import device from '../../Responsive/Device';

const Large = styled.h2`
  color: ${({ color }) => color || '#031027'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '30px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '32px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '32px'};
  } 
`;

export default Large;

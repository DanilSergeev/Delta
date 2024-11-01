import { styled } from 'styled-components';
import { FC } from 'react';
import Wrapper from './Wrapper';
import { FlexProps } from '@/models/IFlexProps';


const FlexStyled = styled(Wrapper) <FlexProps>`
  display: flex;
  align-items: ${props => props.align || 'flex-start'};
  flex-direction: ${props => props.flex || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
  padding-top: ${props => props.pt || '0'};
  padding-bottom: ${props => props.pb || '0'};
  gap: ${props => props.gap || '0'};
  text-align: ${props => props.$textAlign || 'left'};


  ${props => props.$isEqualWidth && `
    & > * {
      flex: 1;
    }
  `}


@media ${props => props.theme.media.tablet} {
    max-width: 80%;
    flex-direction: column;
    gap: 1rem;

    ${props => props.align === "center"?  `
     align-items: center;
  `:"align-items: stretch;"}
  }


`;

const FlexWrapper: FC<FlexProps> = ({ ...props }) => {
  return <FlexStyled {...props} />;
};

export default FlexWrapper;
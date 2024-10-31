import { styled } from 'styled-components';
import { FC, ReactNode } from 'react';
import Wrapper from './Wrapper';

interface FlexProps {
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  flex?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Indicates whether the width of child elements is equal (accepts "true" as a string) */
  $isEqualWidth?: string;
  mt?: string;
  mb?: string;
  pt?: string;
  pb?: string;
  gap?: string;
  textAlign?: 'center' | 'left' | 'justify' | 'right';
  children: ReactNode;
}

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
  text-align: ${props => props.textAlign || 'left'};


  ${props => props.$isEqualWidth && `
    & > * {
      flex: 1;
    }
  `}

`;

const FlexWrapper: FC<FlexProps> = ({ ...props }) => {
  return <FlexStyled {...props} />;
};

export default FlexWrapper;
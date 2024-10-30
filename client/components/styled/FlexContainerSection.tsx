import {  styled } from 'styled-components';
import Wrapper from './Wrapper';
import { FC, ReactNode } from 'react';

interface FlexSectionProps {
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  flex?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Indicates whether the width of child elements is equal (accepts "true" as a string) */
  $isEqualWidth?: string;
  children: ReactNode;
}

const FlexStyled = styled(Wrapper)<FlexSectionProps>`
  display: flex;
  align-items: ${props => props.align || 'flex-start'};
  flex-direction: ${props => props.flex || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'wrap'};

  ${props => props.$isEqualWidth && `
    & > * {
      flex: 1;
    }
  `}
`;

const FlexSection: FC<FlexSectionProps> = ({ ...props }) => {
  return <FlexStyled {...props} />;
};

export default FlexSection;
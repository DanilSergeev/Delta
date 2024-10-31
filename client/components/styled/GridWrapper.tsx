import { styled } from 'styled-components';
import { FC, ReactNode } from 'react';
import Wrapper from './Wrapper';

interface GridProps {
  templateColumns?: string;
  templateRows?: string;
  gap?: string;
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  textAlign?: 'center' | 'left' | 'justify' | 'right';

  mt?: string;
  mb?: string;
  children: ReactNode;
}

const GridStyled = styled(Wrapper)<GridProps>`
  display: grid;
  grid-template-columns: ${props => props.templateColumns || '1fr'};
  grid-template-rows: ${props => props.templateRows || 'auto'};
  gap: ${props => props.gap || '1rem'};
  justify-items: ${props => props.justifyItems || 'stretch'};
  align-items: ${props => props.alignItems || 'stretch'};
  text-align: ${props => props.textAlign || 'left'};
  
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
`;

const GridWrapper: FC<GridProps> = ({ ...props }) => {
  return <GridStyled {...props} />;
};

export default GridWrapper;

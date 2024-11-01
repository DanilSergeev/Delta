import { styled } from 'styled-components';
import { FC } from 'react';
import Wrapper from './Wrapper';
import { IGridProps } from '@/models/IGridProps';


const GridStyled = styled(Wrapper) <IGridProps>`
  display: grid;
  grid-template-columns: ${props => props.$templateColumns || '1fr'};
  grid-template-rows: ${props => props.templateRows || 'auto'};
  gap: ${props => props.gap || '1rem'};
  justify-items: ${props => props.justifyItems || 'stretch'};
  align-items: ${props => props.alignItems || 'stretch'};
  text-align: ${props => props.textAlign || 'left'};
  
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};


  @media ${props => props.theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 80%;

  }

`;

const GridWrapper: FC<IGridProps> = ({ ...props }) => {
  return <GridStyled  {...props} />;
};

export default GridWrapper;

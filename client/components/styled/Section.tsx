import { styled } from 'styled-components';
import { FC } from 'react';
import { ISectionProps } from '@/models/ISectionProps';



const SectionStyled = styled.section <ISectionProps>`
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
  padding-top: ${props => props.pt || '7vh'};
  padding-bottom: ${props => props.pb || '7vh'};
  background-color: ${props => props.bg || 'unset'};
`;

const Section: FC<ISectionProps> = ({ ...props }) => {
  return <SectionStyled {...props} />;
};

export default Section;
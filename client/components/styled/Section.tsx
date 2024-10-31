import { styled } from 'styled-components';
import { FC, ReactNode } from 'react';

interface SectionProps {
  mt?: string;
  mb?: string;
  pt?: string;
  pb?: string;
  bg?: string;
  children: ReactNode;
}

const SectionStyled = styled.section <SectionProps>`
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
  padding-top: ${props => props.pt || '7vh'};
  padding-bottom: ${props => props.pb || '7vh'};
  background-color: ${props => props.bg || 'unset'};
`;

const Section: FC<SectionProps> = ({ ...props }) => {
  return <SectionStyled {...props} />;
};

export default Section;
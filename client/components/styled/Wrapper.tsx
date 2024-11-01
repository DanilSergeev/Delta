import { WrapperProps } from '@/models/IWrapperProps';
import {styled} from 'styled-components';




const Wrapper  = styled.div<WrapperProps>`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;

  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
`;

export default Wrapper;
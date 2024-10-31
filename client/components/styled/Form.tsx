import styled from 'styled-components';
import { Form as BootstrapForm } from 'react-bootstrap';

export const Form = styled(BootstrapForm)`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
`;

export const FormGroup = styled(BootstrapForm.Group)`
    margin-bottom: 2vh; 
`;
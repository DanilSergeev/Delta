import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 8px 12px;
    border: 1px solid #dddddd;
    border-radius: 6px;
    width: 100%;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }

    &.error {
        border-color: red;
    }
`;

export const StyledTextArea = styled.textarea`
    padding: 8px 12px;
    border: 1px solid #dddddd;
    border-radius: 6px;
    width: 100%;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }

    &.error {
        border-color: red;
    }
`;
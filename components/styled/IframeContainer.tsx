import styled from "styled-components";

const IframeContainer = styled.div`
  max-width: 100%; 
  max-height: 100%; 
  position: relative;
  overflow: hidden; 
  
  iframe {
    width: 100%; 
    height: 30vh; 
    border: none; 
  }
`;

export default IframeContainer
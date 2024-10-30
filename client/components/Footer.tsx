import {styled} from 'styled-components';

const Wrapper  = styled.section`
  /* max-width: 1220px; */
  /* width: 100%; */
  /* margin: 0 auto; */
`;



const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <p>
                Copyright © 2024 - All rights reserved || Designed By: Danil
                </p>
            </Wrapper>
        </footer>
    )
}
export default Footer
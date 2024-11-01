import { Button } from "react-bootstrap"
import Section from "./styled/Section"
import FlexWrapper from "./styled/FlexWrapper"
import Link from "next/link"

const ContactSection = () => {
    return (
        <Section
            bg="#f4f3f5"
        >
            <FlexWrapper
                flex="column"
                align="center"
                $textAlign="center"
            >
                <h2>Хотите узнать больше о путешествиях по России?</h2>
                <Link href="/contacts">
                    <Button aria-label="Contact us" variant="info" className="mt-3" >Связаться с нами</Button>
                </Link>
            </FlexWrapper>
        </Section>
    )
}
export default ContactSection
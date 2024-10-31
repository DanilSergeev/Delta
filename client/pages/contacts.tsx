import FlexWrapper from "@/components/styled/FlexWrapper";
import MainContainer from "@/components/styled/MainContainer";
import Section from "@/components/styled/Section";
import MassageForm from '@/components/MassageForm';


const ContactsPage = () => {

    const onSubmit = async () => {

    };

    return (
        <MainContainer>
            <MassageForm />

            <Section>
                <FlexWrapper flex='column' align='center'>
                    <h2>Thank you for your interest, Name</h2>
                </FlexWrapper>
            </Section>

            <Section >
                <FlexWrapper flex='column' align='center'>
                    <h2>CADEX</h2>
                </FlexWrapper>
            </Section>
        </MainContainer>
    );
}

export default ContactsPage;

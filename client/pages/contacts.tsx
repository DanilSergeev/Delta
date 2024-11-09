import FlexWrapper from "@/components/styled/FlexWrapper";
import MainContainer from "@/components/styled/MainContainer";
import Section from "@/components/styled/Section";
import MassageForm from '@/components/MassageForm';
import { IFormData } from "@/models/IFormData";
import { useState } from "react";



const ContactsPage = () => {
    const [message, setMessage] = useState('');

    const onSubmit = async (data: IFormData) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setMessage(result.message)
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <MainContainer
            keywords={`контакты, форма обратной связи, связь с нами, поддержка клиентов, 
            услуги, вопросы, отзывы, сообщения, Delta`}
            description="Свяжитесь с нами через форму обратной связи. Мы ценим ваше мнение и готовы ответить на ваши вопросы. 
            Оставьте сообщение, и мы свяжемся с вами в кратчайшие сроки."
        >
            {
                !!message ?
                    <Section
                        bg='#f4f3f5'
                        pt='25vh'
                        pb='25vh'
                    >
                        <FlexWrapper flex='column' align='center'>
                            <h2>Thank you for your interest, {message}</h2>
                        </FlexWrapper>
                    </Section>
                    :
                    <MassageForm onSubmit={onSubmit} />
            }


            <Section>
                <FlexWrapper mt="auto" flex='column' align='center'>
                    <h2>Delta</h2>
                </FlexWrapper>
            </Section>
        </MainContainer>
    );
}

export default ContactsPage;

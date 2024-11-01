import * as yup from 'yup';
import FlexWrapper from "@/components/styled/FlexWrapper";
import Section from "@/components/styled/Section";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';
import { StyledInput, StyledTextArea } from "@/components/styled/StyledInput";
import { Form, FormGroup } from "@/components/styled/Form";
import { IFormData } from '@/models/IFormData';


interface MassageFormProps {
    onSubmit: (data: IFormData) => Promise<void>;
}

const schema = yup.object().shape({
    name: yup.string().required('Поле имя обязательно'),
    email: yup.string().email('Неверный адрес электронной почты').required('Поле email обязателен'),
    message: yup.string().required('Поле сообщение обязательно'),
});

const MassageForm = ({ onSubmit }: MassageFormProps) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });


    return (
        <Section
            bg='#f4f3f5'
            pt='15vh'
        >
            <FlexWrapper flex="column" align='center'>
                <h2>Оставьте нам сообщение</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup controlId="formName">
                        <Form.Label>Имя</Form.Label>
                        <StyledInput
                            type="text"
                            {...register('name')}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <div className="error-message">{errors.name.message}</div>}
                    </FormGroup>

                    <FormGroup controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <StyledInput
                            type="email"
                            {...register('email')}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <div className="error-message">{errors.email.message}</div>}
                    </FormGroup>

                    <FormGroup controlId="formMessage">
                        <Form.Label>Сообщение</Form.Label>
                        <StyledTextArea
                            {...register('message')}
                            className={errors.message ? 'error' : ''}
                        />
                        {errors.message && <div className="error-message">{errors.message.message}</div>}
                    </FormGroup>

                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting || Object.keys(errors).length > 0}
                    >
                        Отправить
                    </Button>
                </Form>
            </FlexWrapper>
        </Section>
    );
}

export default MassageForm;

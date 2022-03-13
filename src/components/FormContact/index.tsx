import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, Input } from 'components';
import { useRef } from 'react';
import { getValidationErrors } from 'utils/getValidationErrors';
import * as Yup from 'yup';
import * as S from './styles';

type DataSubmit = {
  name: string;
  email: string;
  job: string;
  telephone: string;
};

export function FormContact() {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmitForm(data: DataSubmit) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite seu nome'),
        email: Yup.string()
          .required('Digite seu e-mail')
          .email('Digite um e-mail valido'),
        job: Yup.string().required('Digite seu cargo'),
        telephone: Yup.string().required('Digite seu telephone'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <S.Container>
      <h2>Melhore os seus processos de manutenção</h2>
      <p>Preencha o formulário para entrar em contato!</p>

      <Form ref={formRef} onSubmit={handleSubmitForm}>
        <Input name="name" label="Nome" placeholder="Insira seu nome" />

        <Input name="job" label="Cargo" placeholder="Insira seu cargo" />

        <S.ContentInput>
          <Input
            name="email"
            label="E-mail profissional"
            placeholder="Insira seu e-mail profissional"
          />
          <Input
            name="telephone"
            label="Telefone"
            placeholder="(XX) XXXXX-XXXX"
          />
        </S.ContentInput>

        <Button type="submit">Enviar</Button>
      </Form>
    </S.Container>
  );
}

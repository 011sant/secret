import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.textLight};
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.textLight};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  font-weight: 600;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.5rem;
  display: block;
`;

export const CareerForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            required
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            required
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefone</Label>
          <Input
            type="tel"
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Currículo</Label>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFormState({ ...formState, resume: e.target.files?.[0] || null })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mensagem</Label>
          <TextArea
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          />
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Candidatura
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

import { FooterContainer, FooterGrid, FooterColumn, FooterLinks, Copyright, CareerSection, CareerText } from './styles';

const GOOGLE_FORM_URL = "https://forms.gle/seu-link-do-form"; // Substitua com seu link do Google Forms

export const Footer = () => (
  <FooterContainer>
    <CareerSection>
      <CareerText>
        Deseja trabalhar com a gente? Preencha o{' '}
        <a 
          href={GOOGLE_FORM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          formulário
        </a>
      </CareerText>
    </CareerSection>
    {/* ... resto do código do footer ... */}
  </FooterContainer>
);

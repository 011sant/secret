"use client";

import React from 'react';
import {
  FeatureSection,
  FeatureContainer,
  FeatureGrid,
  FeatureCardWrapper,
  StyledCard,
  IconWrapper,
  CardTitle,
  CardDescription,
  ExpandedContent
} from './FeatureCards/styles';

const featureData = [
  {
    icon: '🤖',
    title: 'IA Personalizada',
    description: 'IA treinada especificamente para seu negócio, disponível 24/7.',
    details: 'Nossa tecnologia de IA se adapta ao seu setor, aprendendo continuamente com as interações para oferecer respostas cada vez mais precisas. Integração com sistemas existentes em minutos.'
  },
  {
    icon: '📊',
    title: 'Analytics Intuitivos',
    description: 'Analytics intuitivos com insights acionáveis em tempo real.',
    details: 'Transforme dados em decisões com painéis personalizáveis, alertas inteligentes e previsões baseadas em ML. Visualize tendências e identifique oportunidades antes da concorrência.'
  },
  {
    icon: '🔒',
    title: 'Segurança Empresarial',
    description: 'Segurança de nível empresarial sem custos empresariais.',
    details: 'Criptografia de ponta a ponta, autenticação multi-fator, auditorias de segurança automatizadas e conformidade com LGPD/GDPR incluídas em todos os planos.'
  }
];

const FeatureCards = () => {
  return (
    <FeatureSection>
      <FeatureContainer>
        <FeatureGrid>
          {featureData.map((feature, index) => (
            <FeatureCardWrapper
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <StyledCard>
                <IconWrapper>{feature.icon}</IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
                
                <ExpandedContent>
                  <IconWrapper>{feature.icon}</IconWrapper>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.details}</CardDescription>
                </ExpandedContent>
              </StyledCard>
            </FeatureCardWrapper>
          ))}
        </FeatureGrid>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default FeatureCards;
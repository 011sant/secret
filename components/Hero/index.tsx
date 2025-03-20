import { motion } from 'framer-motion';
import { HeroSection, HeroContent, Title, Description, ButtonContainer } from './styles';
import { Button } from '../Button';

const titleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <Title as={motion.h1} variants={titleAnimation}>
          Tecnologia que transforma, integra e evolui seu negócio.
        </Title>
        <Description as={motion.p} variants={titleAnimation}>
          Todas as suas ferramentas em um hub central: chatbots inteligentes, 
          analytics robustos e gestão financeira simplificada.
        </Description>
        <ButtonContainer as={motion.div} variants={titleAnimation}>
          <Button href="#solucoes">Descubra Nossas Soluções</Button>
          <Button href="#demo" variant="outline">Solicitar Demo</Button>
        </ButtonContainer>
      </motion.div>
    </HeroContent>
  </HeroSection>
);

export default Hero;

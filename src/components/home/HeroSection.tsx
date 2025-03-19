"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Tecnologia que transforma, integra e evolui seu negócio.</h1>
        <p>Todas as suas ferramentas em um hub central: chatbots inteligentes, analytics robustos e gestão financeira simplificada.</p>
        <div className="hero-buttons">
          <a href="#solucoes" className="btn">Descubra Nossas Soluções</a>
          <a href="#demo" className="btn btn-outline">Solicitar Demo</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
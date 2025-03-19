"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Produtos</h3>
            <ul className="footer-links">
              <li><a href="#">Analytics</a></li>
              <li><a href="#">ChatBots</a></li>
              <li><a href="#">Gestão Financeira</a></li>
              <li><a href="#">Automação</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Recursos</h3>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentação</a></li>
              <li><a href="#">Comunidade</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Empresa</h3>
            <ul className="footer-links">
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Parceiros</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <ul className="footer-links">
              <li>contato@spectersoftware.com</li>
              <li>+55 (11) 1234-5678</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2025 Specter Software. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
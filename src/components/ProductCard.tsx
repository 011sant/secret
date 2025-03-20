import React, { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  stats?: string[];
}

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 1 };
const ROTATION_RANGE = 7;

export function ProductCard({ title, description, icon, link, stats }: ProductCardProps) {
  console.log(`ProductCard component rendered for: ${title}`);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, SPRING_CONFIG);
  const mouseYSpring = useSpring(y, SPRING_CONFIG);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${ROTATION_RANGE}deg`, `-${ROTATION_RANGE}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${ROTATION_RANGE}deg`, `${ROTATION_RANGE}deg`]);

  const handleMouseMove = useMemo(() => (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return;
    
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }, [shouldReduceMotion, x, y]);

  return (
    <Card
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform: `${shouldReduceMotion ? '' : `rotateX(${rotateX}) rotateY(${rotateY})`}`,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
      role="article"
      aria-label={`${title} card`}
    >
      <div className="p-6" style={{ transform: "translateZ(50px)" }}>
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-secundario rounded-full blur-md opacity-50 group-hover:opacity-70" />
          <div className="relative w-full h-full bg-gradient-secundario rounded-full flex items-center justify-center">
            {icon}
          </div>
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-principal mb-3 text-center"
          animate={{ y: isHovered ? -5 : 0 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 text-center mb-4"
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
        >
          {description}
        </motion.p>

        {stats && (
          <motion.div 
            className="grid grid-cols-1 gap-2 mt-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm text-roxo-medio dark:text-lilas-claro bg-gradient-principal 
                         bg-opacity-10 dark:bg-opacity-20 rounded-full px-4 py-2 text-center
                         backdrop-blur-sm border border-white/10 dark:border-roxo-medio/10"
              >
                {stat}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="px-6 pb-6 text-center" style={{ transform: "translateZ(30px)" }}>
        <Link 
          href={link} 
          className="group inline-flex items-center justify-center w-full px-6 py-3 
                   bg-gradient-principal relative overflow-hidden rounded-md transition-all
                   hover:shadow-lg hover:shadow-roxo-medio/20"
          aria-label={`Saiba mais sobre ${title}`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-secundario opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              backgroundPosition: isHovered ? "100%" : "0%",
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="relative font-medium">Saiba mais</span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ 
              x: isHovered ? 5 : 0,
              scale: isHovered ? 1.2 : 1
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </Link>
      </div>

      {/* Partículas de fundo */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{ 
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            scale: 0,
            opacity: 0 
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 0.2 : 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </Card>
  );
}


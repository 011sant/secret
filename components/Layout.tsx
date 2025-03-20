import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipToContent, ErrorBoundary } from './accessibility';
import { initGA, pageview } from '../lib/analytics';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    initGA();
    pageview(window.location.pathname);

    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, []);

  return (
    <ErrorBoundary>
      <SkipToContent />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default Layout;

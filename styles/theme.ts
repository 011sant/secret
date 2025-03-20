export const theme = {
  colors: {
    primary: '#5525ab',
    primaryLight: '#7837df',
    primaryDark: '#3b1980',
    secondary: '#f5f5f5',
    textLight: '#ffffff',
    textDark: '#333333',
    accent: '#ff8a00',
    success: '#00c853',
    background: '#f8f9fa',
    gradient: 'linear-gradient(135deg, #5525ab, #2b1263)',
    gray: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e'
    }
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  shadows: {
    small: '0 4px 12px rgba(0, 0, 0, 0.1)',
    medium: '0 10px 20px rgba(0, 0, 0, 0.1)',
    large: '0 15px 30px rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.4s ease'
  },
  animation: {
    duration: {
      fast: '0.2s',
      default: '0.3s',
      slow: '0.5s'
    },
    curve: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  blur: {
    light: 'blur(4px)',
    medium: 'blur(8px)',
    heavy: 'blur(16px)'
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    full: '9999px'
  },
  effects: {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    tap: {
      scale: 0.98,
      transition: { type: 'spring', stiffness: 500, damping: 20 }
    }
  },
  sizes: {
    maxWidth: '1200px',
    headerHeight: '80px',
    footerHeight: '300px'
  },
  zIndex: {
    modal: 1000,
    overlay: 900,
    dropdown: 800,
    header: 700,
    footer: 600
  }
};

import { CustomCursor } from './styles';
import { useMousePosition } from '@/hooks/useMousePosition';

export const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <CustomCursor
      animate={{
        x: x - 16,
        y: y - 16,
        scale: 1,
        opacity: 1
      }}
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15
      }}
    />
  );
};

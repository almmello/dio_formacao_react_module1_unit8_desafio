import { useCallback, useRef } from 'react';

export const useTouch = (onClick) => {
  const touchStartTime = useRef(0);
  const touchStartPosition = useRef({ x: 0, y: 0 });
  const isTouchDevice = useRef(false);

  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    isTouchDevice.current = true;
    touchStartTime.current = Date.now();
    touchStartPosition.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    
    // Efeito visual de toque
    e.currentTarget.style.transform = 'scale(0.95)';
    e.currentTarget.style.opacity = '0.8';
  }, []);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime.current;
    
    // Verificar se é um toque válido (não muito longo e não muito curto)
    if (touchDuration > 50 && touchDuration < 500) {
      // Verificar se o toque não se moveu muito (para evitar scroll acidental)
      const touchEndPosition = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
      
      const distance = Math.sqrt(
        Math.pow(touchEndPosition.x - touchStartPosition.current.x, 2) +
        Math.pow(touchEndPosition.y - touchStartPosition.current.y, 2)
      );
      
      if (distance < 10) { // Se o toque não se moveu mais de 10px
        onClick();
      }
    }
    
    // Restaurar estilo
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.opacity = '1';
  }, [onClick]);

  const handleClick = useCallback((e) => {
    // Só executar onClick se não for um dispositivo de toque
    // para evitar dupla execução
    if (!isTouchDevice.current) {
      onClick();
    }
  }, [onClick]);

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onClick: handleClick
  };
};

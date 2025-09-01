// Detecção de dispositivo móvel com validações de segurança
export const isMobileDevice = () => {
  // Validar se estamos em um ambiente de navegador
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           ('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0);
  } catch (error) {
    console.warn('Erro na detecção de dispositivo móvel:', error);
    return false;
  }
};

// Detecção de dispositivo com tela pequena
export const isSmallScreen = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    return window.innerWidth <= 768;
  } catch (error) {
    console.warn('Erro na detecção de tela pequena:', error);
    return false;
  }
};

// Detecção de dispositivo com tela muito pequena
export const isVerySmallScreen = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    return window.innerWidth <= 480;
  } catch (error) {
    console.warn('Erro na detecção de tela muito pequena:', error);
    return false;
  }
};

// Detecção de orientação do dispositivo
export const getDeviceOrientation = () => {
  if (typeof window === 'undefined') {
    return 'portrait';
  }
  
  try {
    if (window.screen && window.screen.orientation) {
      return window.screen.orientation.type;
    }
    return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
  } catch (error) {
    console.warn('Erro na detecção de orientação:', error);
    return 'portrait';
  }
};

// Função para prevenir zoom em dispositivos móveis com validação
export const preventZoom = () => {
  if (typeof document === 'undefined') {
    return;
  }
  
  try {
    let lastTouchEnd = 0;
    
    const touchHandler = (event) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };
    
    // Adicionar listener com opções de segurança
    document.addEventListener('touchend', touchHandler, { 
      passive: false,
      capture: false 
    });
    
    // Retornar função de limpeza
    return () => {
      document.removeEventListener('touchend', touchHandler);
    };
  } catch (error) {
    console.warn('Erro ao configurar prevenção de zoom:', error);
  }
};

// Função para configurar viewport para dispositivos móveis com validação
export const setupMobileViewport = () => {
  if (typeof document === 'undefined') {
    return;
  }
  
  try {
    if (isMobileDevice()) {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }
  } catch (error) {
    console.warn('Erro ao configurar viewport móvel:', error);
  }
};

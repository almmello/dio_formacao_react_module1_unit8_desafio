// Detecção de dispositivo móvel
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         ('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0) ||
         (navigator.msMaxTouchPoints > 0);
};

// Detecção de dispositivo com tela pequena
export const isSmallScreen = () => {
  return window.innerWidth <= 768;
};

// Detecção de dispositivo com tela muito pequena
export const isVerySmallScreen = () => {
  return window.innerWidth <= 480;
};

// Detecção de orientação do dispositivo
export const getDeviceOrientation = () => {
  if (window.screen && window.screen.orientation) {
    return window.screen.orientation.type;
  }
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

// Função para prevenir zoom em dispositivos móveis
export const preventZoom = () => {
  let lastTouchEnd = 0;
  
  document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
};

// Função para configurar viewport para dispositivos móveis
export const setupMobileViewport = () => {
  if (isMobileDevice()) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }
};

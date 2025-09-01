# Calculadora React com Suporte Mobile

Uma calculadora moderna desenvolvida em React com suporte completo para dispositivos móveis e toque.

## 🚀 Funcionalidades

### ✨ Funcionalidades Principais
- Operações matemáticas básicas (adição, subtração, multiplicação, divisão)
- Cálculo de porcentagem
- Memória de operações
- Interface limpa e intuitiva

### 📱 Suporte Mobile Avançado
- **Eventos de Toque**: Suporte completo para dispositivos touchscreen
- **Responsividade**: Interface adaptável para diferentes tamanhos de tela
- **Otimizações Mobile**: 
  - Prevenção de zoom acidental
  - Feedback visual de toque
  - Botões otimizados para dedos
  - Suporte para orientação landscape/portrait
- **Performance**: Hook personalizado para gerenciamento eficiente de eventos
- **Acessibilidade**: Suporte para preferências de movimento reduzido

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Styled Components** - Estilização componentizada
- **BigNumber.js** - Precisão matemática
- **Vite** - Build tool e dev server
- **Hooks Personalizados** - Gerenciamento de eventos de toque

## 📱 Recursos Mobile

### Eventos de Toque
- `onTouchStart`: Detecta início do toque
- `onTouchEnd`: Detecta fim do toque com validação
- Prevenção de scroll acidental durante toque
- Feedback visual imediato

### Responsividade
- **Tablets (≤768px)**: Ajustes de tamanho e espaçamento
- **Smartphones (≤480px)**: Otimizações para telas pequenas
- **Orientação**: Suporte para landscape e portrait

### Otimizações
- Prevenção de seleção de texto
- Tap highlight transparente
- Touch action manipulation
- Font smoothing para telas de alta densidade

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Button/         # Botão padrão com suporte touch
│   ├── ButtonDouble/   # Botão duplo com suporte touch
│   ├── Input/          # Campo de entrada
│   └── ...
├── hooks/              # Hooks personalizados
│   └── useTouch.js     # Hook para eventos de toque
├── utils/              # Utilitários
│   └── deviceDetection.js # Detecção de dispositivos
├── styles.js           # Estilos principais
├── mobile.css          # Estilos específicos mobile
└── App.jsx             # Componente principal
```

## 🎯 Hook useTouch

O hook `useTouch` gerencia eventos de toque de forma inteligente:

```jsx
const touchHandlers = useTouch(onClick);

return (
  <Button {...touchHandlers}>
    {label}
  </Button>
);
```

**Características:**
- Prevenção de dupla execução (touch + click)
- Validação de duração e distância do toque
- Feedback visual automático
- Compatibilidade cross-browser

## 📱 Detecção de Dispositivos

```jsx
import { isMobileDevice, isSmallScreen, getDeviceOrientation } from './utils/deviceDetection';

// Detectar dispositivo móvel
const isMobile = isMobileDevice();

// Detectar tamanho da tela
const isSmall = isSmallScreen();

// Obter orientação
const orientation = getDeviceOrientation();
```

## 🎨 Estilos Responsivos

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px

### Adaptações Automáticas
- Tamanho de fonte ajustável
- Espaçamentos responsivos
- Botões otimizados para toque
- Layout adaptativo

## 🔧 Configurações Mobile

### Meta Tags
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
```

### CSS Mobile-First
- Estilos base para mobile
- Media queries para telas maiores
- Otimizações específicas por dispositivo

## 🚀 Deploy

A aplicação está configurada para deploy em:
- **Vercel**: Configuração automática
- **Netlify**: Compatível
- **GitHub Pages**: Suporte completo

## 📄 Licença

Este projeto foi desenvolvido como parte da formação React da DIO.

## 👨‍💻 Desenvolvido por

- **Desenvolvedor**: almmello
- **Empresa**: Goalmoon
- **Ano**: 2024

---

**Nota**: Esta calculadora foi otimizada especificamente para oferecer a melhor experiência possível em dispositivos móveis, mantendo a funcionalidade completa em desktop.

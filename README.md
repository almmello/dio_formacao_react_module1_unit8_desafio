# Calculadora React com Suporte Mobile e Lógica Aprimorada

Uma calculadora moderna desenvolvida em React com suporte completo para dispositivos móveis, lógica de cálculo robusta e funcionalidades avançadas.

## 🚀 Funcionalidades

### ✨ Funcionalidades Principais
- **Operações Matemáticas Básicas**: Adição, subtração, multiplicação, divisão
- **Operações Avançadas**: Porcentagem, raiz quadrada, potência ao quadrado, inverso (1/x)
- **Sistema de Memória**: MC (limpar), MR (recuperar), M+ (adicionar), M- (subtrair)
- **Histórico de Cálculos**: Rastreamento completo das operações realizadas
- **Interface Intuitiva**: Design limpo e responsivo

## 🎯 **Guia Completo das Teclas**

### 🔧 **Primeira Linha - Funções de Limpeza e Histórico**
- **`C` (Clear)**: Limpa completamente a calculadora (display, operações e memória)
- **`CE` (Clear Entry)**: Limpa apenas o número atual no display
- **`CH` (Clear History)**: Limpa todo o histórico de cálculos
- **`H` (History)**: Exibe o histórico completo de todos os cálculos realizados

### 📱 **Segunda Linha - Funções de Memória e Controle**
- **`MC` (Memory Clear)**: Limpa completamente a memória da calculadora
- **`MR` (Memory Recall)**: Recupera o valor armazenado na memória
- **`±` (Toggle Sign)**: Alterna o sinal do número atual (positivo/negativo)
- **`%` (Percentage)**: Calcula a porcentagem do número atual (divide por 100)

### 🧮 **Terceira Linha - Funções Matemáticas Avançadas**
- **`√` (Square Root)**: Calcula a raiz quadrada do número atual
- **`x²` (Square)**: Eleva o número atual ao quadrado
- **`1/x` (Inverse)**: Calcula o inverso do número atual (1 dividido pelo número)
- **`/` (Division)**: Define a operação de divisão

### 🔢 **Quarta Linha - Números e Multiplicação**
- **`7`, `8`, `9`**: Dígitos numéricos para entrada de dados
- **`×` (Multiplication)**: Define a operação de multiplicação

### 🔢 **Quinta Linha - Números e Subtração**
- **`4`, `5`, `6`**: Dígitos numéricos para entrada de dados
- **`-` (Subtraction)**: Define a operação de subtração

### 🔢 **Sexta Linha - Números e Adição**
- **`1`, `2`, `3`**: Dígitos numéricos para entrada de dados
- **`+` (Addition)**: Define a operação de adição

### 🔢 **Sétima Linha - Zero, Decimal e Igual**
- **`0` (Zero Duplo)**: Botão de largura dupla para o dígito zero
- **`.` (Decimal Point)**: Adiciona ponto decimal ao número atual
- **`=` (Equals)**: Executa a operação e exibe o resultado

## 📋 **Como Usar a Calculadora**

### 🔢 **Entrada de Números**
1. **Digite números**: Clique nas teclas numéricas (0-9)
2. **Ponto decimal**: Use `.` para números decimais
3. **Sinal negativo**: Use `±` para alternar entre positivo e negativo
4. **Limite de dígitos**: Máximo de 15 dígitos por número

### 🧮 **Realizando Operações**
1. **Digite o primeiro número**
2. **Clique na operação** (+, -, ×, /)
3. **Digite o segundo número**
4. **Pressione `=` para ver o resultado**
5. **Continue calculando** com o resultado anterior

### 💾 **Usando a Memória**
1. **`M+`**: Adiciona o número atual à memória
2. **`M-`**: Subtrai o número atual da memória
3. **`MR`**: Recupera o valor da memória
4. **`MC`**: Limpa a memória

### 📊 **Histórico de Cálculos**
1. **`H`**: Visualiza todos os cálculos realizados
2. **`CH`**: Limpa o histórico completo
3. **Rastreamento automático**: Todas as operações são registradas

### ⚡ **Operações Avançadas**
- **Porcentagem**: Digite um número e pressione `%`
- **Raiz quadrada**: Digite um número e pressione `√`
- **Potência ao quadrado**: Digite um número e pressione `x²`
- **Inverso**: Digite um número e pressione `1/x`

## 💡 **Exemplos Práticos de Uso**

### 🧮 **Cálculo Básico**
```
1. Digite: 15
2. Pressione: +
3. Digite: 27
4. Pressione: =
5. Resultado: 42
```

### 💰 **Cálculo de Porcentagem**
```
1. Digite: 200
2. Pressione: %
3. Resultado: 2 (200 ÷ 100)
```

### 📐 **Cálculo de Raiz Quadrada**
```
1. Digite: 16
2. Pressione: √
3. Resultado: 4
```

### 🔢 **Cálculo com Memória**
```
1. Digite: 100
2. Pressione: M+ (adiciona à memória)
3. Digite: 50
4. Pressione: M+ (adiciona à memória)
5. Pressione: MR (recupera da memória)
6. Resultado: 150 (100 + 50)
```

### 📊 **Sequência de Operações**
```
1. Digite: 10
2. Pressione: ×
3. Digite: 5
4. Pressione: =
5. Resultado: 50
6. Pressione: +
7. Digite: 25
8. Pressione: =
9. Resultado: 75
```

## 🚀 **Dicas e Truques**

### ⚡ **Atalhos Úteis**
- **Limpeza rápida**: Use `CE` para limpar apenas o número atual
- **Correção de sinal**: Use `±` para corrigir números negativos rapidamente
- **Histórico**: Use `H` para revisar cálculos anteriores
- **Memória**: Use `MC` para limpar a memória antes de novos cálculos

### 🎯 **Melhores Práticas**
- **Verifique o display**: Sempre confirme o número antes de pressionar uma operação
- **Use a memória**: Para cálculos complexos com múltiplos números
- **Limpe o histórico**: Use `CH` regularmente para manter a calculadora organizada
- **Teste operações**: Use números simples para verificar se a operação está correta

### ⚠️ **Limitações e Observações**
- **Divisão por zero**: Não é permitida (mostra erro)
- **Raiz de número negativo**: Não é permitida (mostra erro)
- **Inverso de zero**: Não é permitido (mostra erro)
- **Máximo de dígitos**: 15 dígitos por número
- **Precisão**: Usa BigNumber.js para cálculos precisos

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

### 🔧 Lógica de Cálculo Aprimorada
- **Validações Robustas**: Verificação de entrada de dados e operações matemáticas
- **Tratamento de Erros**: Sistema de notificações elegante para erros e avisos
- **Precisão Matemática**: Uso da biblioteca BigNumber.js para cálculos precisos
- **Prevenção de Falhas**: Validação de divisão por zero, números negativos, etc.
- **Formatação Inteligente**: Exibição otimizada de números (inteiros vs. decimais)
- **Limite de Dígitos**: Prevenção de overflow com limite de 15 dígitos

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Styled Components** - Estilização componentizada
- **BigNumber.js** - Precisão matemática e validações
- **Vite** - Build tool e dev server
- **Hooks Personalizados** - Gerenciamento de eventos de toque
- **Sistema de Notificações** - Feedback visual para o usuário

## 🚨 Problemas Corrigidos

### ❌ **Falhas de Lógica Anteriores:**
1. **Divisão por Zero**: Não havia validação, causando erros
2. **Estados Inconsistentes**: Múltiplos estados booleanos dessincronizados
3. **Lógica Complexa**: Função `handleOperations` confusa e propensa a erros
4. **Falta de Validação**: Ausência de verificação de entrada de dados
5. **Tratamento de Erros**: Uso de `alert()` básico para erros
6. **Overflow**: Sem limite para números muito longos
7. **Precisão**: Problemas com números decimais e operações complexas

### ✅ **Soluções Implementadas:**
1. **Validações Matemáticas**: Funções robustas para todas as operações
2. **Estados Simplificados**: Redução de estados complexos para 4 principais
3. **Tratamento de Erros**: Sistema de notificações elegante e informativo
4. **Prevenção de Falhas**: Validação de entrada e operações
5. **Formatação Inteligente**: Exibição otimizada de resultados
6. **Sistema de Notificações**: Feedback visual sem interrupção do fluxo
7. **Histórico de Cálculos**: Rastreamento completo das operações

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
│   ├── Notification/   # Sistema de notificações
│   └── ...
├── hooks/              # Hooks personalizados
│   └── useTouch.js     # Hook para eventos de toque
├── utils/              # Utilitários
│   ├── deviceDetection.js # Detecção de dispositivos
│   └── calculatorUtils.js # Validações e cálculos matemáticos
├── styles.js           # Estilos principais
├── mobile.css          # Estilos específicos mobile
└── App.jsx             # Componente principal com lógica aprimorada
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

## 🔧 Utilitários de Cálculo

### Validações Matemáticas
```jsx
import { 
  validateNumber, 
  validateDivision, 
  safeAdd, 
  safeDivide 
} from './utils/calculatorUtils';

// Validação antes de operações
if (validateDivision(divisor)) {
  const result = safeDivide(dividend, divisor);
}
```

### Funções Seguras
- `safeAdd(a, b)` - Adição com validação
- `safeSubtract(a, b)` - Subtração com validação
- `safeMultiply(a, b)` - Multiplicação com validação
- `safeDivide(a, b)` - Divisão com validação e prevenção de divisão por zero
- `safePercent(value)` - Porcentagem com validação
- `safeSquareRoot(value)` - Raiz quadrada com validação de números negativos
- `safeSquare(value)` - Potência ao quadrado
- `safeInverse(value)` - Inverso (1/x) com validação de zero

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

## 🔄 Histórico de Melhorias

### Versão 2.0 - Lógica Aprimorada
- ✅ Correção de falhas matemáticas
- ✅ Sistema de validação robusto
- ✅ Tratamento de erros elegante
- ✅ Sistema de notificações
- ✅ Histórico de cálculos
- ✅ Funções matemáticas avançadas

### Versão 1.0 - Suporte Mobile
- ✅ Eventos de toque
- ✅ Interface responsiva
- ✅ Otimizações mobile
- ✅ Hook personalizado useTouch

**Nota**: Esta calculadora foi completamente reescrita para oferecer a melhor experiência possível, com lógica matemática robusta, suporte mobile nativo e interface profissional.

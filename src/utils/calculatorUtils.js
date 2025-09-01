import BigNumber from "bignumber.js";

// Configuração do BigNumber para maior precisão e segurança
BigNumber.config({
  DECIMAL_PLACES: 20,
  ROUNDING_MODE: BigNumber.ROUND_HALF_UP,
  EXPONENTIAL_AT: [-7, 21],
  // Configurações de segurança
  CRYPTO: false, // Desabilitar funcionalidades criptográficas
  MODULO_MODE: BigNumber.ROUND_DOWN
});

// Constantes de segurança
const MAX_SAFE_NUMBER = 1e15; // Limite máximo para evitar overflow
const MIN_SAFE_NUMBER = -1e15; // Limite mínimo para evitar underflow

// Validações matemáticas com proteções de segurança
export const validateNumber = (value) => {
  if (value === null || value === undefined || value === '') {
    return false;
  }
  
  // Verificar se é uma string válida
  if (typeof value === 'string') {
    // Prevenir injeção de código malicioso
    if (value.includes('<') || value.includes('>') || value.includes('script')) {
      return false;
    }
    
    // Verificar se contém apenas caracteres numéricos válidos
    if (!/^[0-9.-]+$/.test(value)) {
      return false;
    }
  }
  
  try {
    const num = parseFloat(value);
    if (isNaN(num) || !isFinite(num)) {
      return false;
    }
    
    // Verificar limites de segurança
    if (num > MAX_SAFE_NUMBER || num < MIN_SAFE_NUMBER) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.warn('Erro na validação de número:', error);
    return false;
  }
};

export const validateDivision = (divisor) => {
  if (!validateNumber(divisor)) {
    return false;
  }
  
  try {
    const num = new BigNumber(divisor);
    return !num.isZero();
  } catch (error) {
    console.warn('Erro na validação de divisão:', error);
    return false;
  }
};

export const validateSquareRoot = (value) => {
  if (!validateNumber(value)) {
    return false;
  }
  
  try {
    const num = parseFloat(value);
    return num >= 0;
  } catch (error) {
    console.warn('Erro na validação de raiz quadrada:', error);
    return false;
  }
};

export const validateInverse = (value) => {
  if (!validateNumber(value)) {
    return false;
  }
  
  try {
    const num = parseFloat(value);
    return num !== 0;
  } catch (error) {
    console.warn('Erro na validação de inverso:', error);
    return false;
  }
};

// Funções de cálculo com validação e proteções de segurança
export const safeAdd = (a, b) => {
  if (!validateNumber(a) || !validateNumber(b)) {
    throw new Error('Valores inválidos para adição');
  }
  
  try {
    const first = new BigNumber(a);
    const second = new BigNumber(b);
    const result = first.plus(second);
    
    // Verificar se o resultado está dentro dos limites seguros
    if (result.isGreaterThan(MAX_SAFE_NUMBER) || result.isLessThan(MIN_SAFE_NUMBER)) {
      throw new Error('Resultado fora dos limites seguros');
    }
    
    return result.toNumber();
  } catch (error) {
    console.error('Erro na adição segura:', error);
    throw new Error('Erro no cálculo de adição');
  }
};

export const safeSubtract = (a, b) => {
  if (!validateNumber(a) || !validateNumber(b)) {
    throw new Error('Valores inválidos para subtração');
  }
  
  try {
    const first = new BigNumber(a);
    const second = new BigNumber(b);
    const result = first.minus(second);
    
    // Verificar se o resultado está dentro dos limites seguros
    if (result.isGreaterThan(MAX_SAFE_NUMBER) || result.isLessThan(MIN_SAFE_NUMBER)) {
      throw new Error('Resultado fora dos limites seguros');
    }
    
    return result.toNumber();
  } catch (error) {
    console.error('Erro na subtração segura:', error);
    throw new Error('Erro no cálculo de subtração');
  }
};

export const safeMultiply = (a, b) => {
  if (!validateNumber(a) || !validateNumber(b)) {
    throw new Error('Valores inválidos para multiplicação');
  }
  
  try {
    const first = new BigNumber(a);
    const second = new BigNumber(b);
    const result = first.times(second);
    
    // Verificar se o resultado está dentro dos limites seguros
    if (result.isGreaterThan(MAX_SAFE_NUMBER) || result.isLessThan(MIN_SAFE_NUMBER)) {
      throw new Error('Resultado fora dos limites seguros');
    }
    
    return result.toNumber();
  } catch (error) {
    console.error('Erro na multiplicação segura:', error);
    throw new Error('Erro no cálculo de multiplicação');
  }
};

export const safeDivide = (a, b) => {
  if (!validateNumber(a) || !validateNumber(b)) {
    throw new Error('Valores inválidos para divisão');
  }
  
  if (!validateDivision(b)) {
    throw new Error('Divisão por zero não é permitida');
  }
  
  try {
    const first = new BigNumber(a);
    const second = new BigNumber(b);
    const result = first.dividedBy(second);
    
    // Verificar se o resultado está dentro dos limites seguros
    if (result.isGreaterThan(MAX_SAFE_NUMBER) || result.isLessThan(MIN_SAFE_NUMBER)) {
      throw new Error('Resultado fora dos limites seguros');
    }
    
    return result.toNumber();
  } catch (error) {
    console.error('Erro na divisão segura:', error);
    throw new Error('Erro no cálculo de divisão');
  }
};

export const safePercent = (value) => {
  if (!validateNumber(value)) {
    throw new Error('Valor inválido para cálculo de porcentagem');
  }
  
  try {
    const num = new BigNumber(value);
    const result = num.dividedBy(100);
    
    // Verificar se o resultado está dentro dos limites seguros
    if (result.isGreaterThan(MAX_SAFE_NUMBER) || result.isLessThan(MIN_SAFE_NUMBER)) {
      throw new Error('Resultado fora dos limites seguros');
    }
    
    return result.toNumber();
  } catch (error) {
    console.error('Erro no cálculo de porcentagem:', error);
    throw new Error('Erro no cálculo de porcentagem');
  }
};

export const safeSquareRoot = (value) => {
  if (!validateSquareRoot(value)) {
    throw new Error('Não é possível calcular raiz quadrada de número negativo');
  }
  
  const num = parseFloat(value);
  return Math.sqrt(num);
};

export const safeSquare = (value) => {
  if (!validateNumber(value)) {
    throw new Error('Valor inválido para cálculo de potência');
  }
  
  const num = new BigNumber(value);
  return num.pow(2).toNumber();
};

export const safeInverse = (value) => {
  if (!validateInverse(value)) {
    throw new Error('Não é possível calcular inverso de zero');
  }
  
  const num = new BigNumber(value);
  return new BigNumber(1).dividedBy(num).toNumber();
};

// Formatação de números para display
export const formatNumber = (value) => {
  if (!validateNumber(value)) {
    return '0';
  }
  
  const num = parseFloat(value);
  
  // Se for um número inteiro, não mostrar decimais
  if (Number.isInteger(num)) {
    return String(num);
  }
  
  // Limitar casas decimais para evitar números muito longos
  const formatted = num.toFixed(10).replace(/\.?0+$/, '');
  return formatted;
};

// Verificação de overflow
export const checkOverflow = (value) => {
  if (!validateNumber(value)) {
    return false;
  }
  
  const num = parseFloat(value);
  return Math.abs(num) > Number.MAX_SAFE_INTEGER;
};

// Função para lidar com erros de cálculo
export const handleCalculationError = (error, fallbackValue = 0) => {
  console.error('Erro de cálculo:', error.message);
  
  // Em produção, você pode querer mostrar uma notificação mais elegante
  if (typeof window !== 'undefined') {
    alert(`Erro de cálculo: ${error.message}`);
  }
  
  return fallbackValue;
};

// Função para validar expressões matemáticas
export const validateExpression = (expression) => {
  try {
    // Verificar se a expressão contém apenas caracteres válidos
    const validChars = /^[0-9+\-*/().\s]+$/;
    if (!validChars.test(expression)) {
      return false;
    }
    
    // Tentar avaliar a expressão
    const result = eval(expression);
    return validateNumber(result);
  } catch (error) {
    return false;
  }
};

// Função para calcular com histórico
export const calculateWithHistory = (operations) => {
  if (!Array.isArray(operations) || operations.length === 0) {
    throw new Error('Histórico de operações inválido');
  }
  
  let result = operations[0];
  
  for (let i = 1; i < operations.length; i += 2) {
    const operator = operations[i];
    const operand = operations[i + 1];
    
    switch (operator) {
      case '+':
        result = safeAdd(result, operand);
        break;
      case '-':
        result = safeSubtract(result, operand);
        break;
      case '*':
        result = safeMultiply(result, operand);
        break;
      case '/':
        result = safeDivide(result, operand);
        break;
      default:
        throw new Error(`Operador inválido: ${operator}`);
    }
  }
  
  return result;
};

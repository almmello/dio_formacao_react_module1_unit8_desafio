
import Input from './components/Input/index.jsx';
import Button from './components/Button/index.jsx';
import ButtonDouble from './components/ButtonDouble/index.jsx';
import MyImage from './components/MyImage/index.jsx';
import Text01 from './components/Text01/index.jsx';
import Notification from './components/Notification/index.jsx';

import { Container, Content, Foot, Head, Row } from './styles.js';
import { useState, useEffect } from 'react';
import { isMobileDevice, setupMobileViewport, preventZoom } from './utils/deviceDetection.js';
import {
  safeAdd,
  safeSubtract,
  safeMultiply,
  safeDivide,
  safePercent,
  safeSquareRoot,
  safeSquare,
  safeInverse,
  formatNumber,
  handleCalculationError
} from './utils/calculatorUtils.js';

import LogoSrc from './logo.png';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memoryValue, setMemoryValue] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Configurar dispositivo móvel na inicialização
    const mobile = isMobileDevice();
    setIsMobile(mobile);
    
    if (mobile) {
      setupMobileViewport();
      preventZoom();
    }
  }, []);

  // Função para mostrar notificação
  const showNotification = (message, type = 'info', duration = 3000) => {
    setNotification({ message, type, duration });
  };

  // Função para fechar notificação
  const closeNotification = () => {
    setNotification(null);
  };

  // Função para limpar tudo
  const clearAll = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setCalculationHistory([]);
    showNotification('Calculadora limpa', 'success', 2000);
  };

  // Função para limpar apenas o display atual
  const clearEntry = () => {
    setDisplayValue('0');
    setWaitingForOperand(false);
  };

  // Função para adicionar dígito
  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      // Limitar o número de dígitos para evitar overflow
      if (displayValue.length >= 15) {
        showNotification('Número muito longo', 'warning', 2000);
        return;
      }
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  // Função para adicionar ponto decimal
  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  // Função para calcular porcentagem
  const inputPercent = () => {
    try {
      const result = safePercent(displayValue);
      setDisplayValue(formatNumber(result));
      setWaitingForOperand(true);
    } catch (error) {
      const fallbackValue = handleCalculationError(error, 0);
      setDisplayValue(formatNumber(fallbackValue));
      setWaitingForOperand(true);
      showNotification(error.message, 'error');
    }
  };

  // Função para executar operação
  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      try {
        const result = calculate(previousValue, inputValue, operation);
        setDisplayValue(formatNumber(result));
        setPreviousValue(result);
        
        // Adicionar à história
        setCalculationHistory(prev => [...prev, operation, inputValue, '=', result]);
      } catch (error) {
        const fallbackValue = handleCalculationError(error, previousValue);
        setDisplayValue(formatNumber(fallbackValue));
        setPreviousValue(fallbackValue);
        showNotification(error.message, 'error');
      }
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  // Função para calcular resultado
  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return safeAdd(firstValue, secondValue);
      case '-':
        return safeSubtract(firstValue, secondValue);
      case '*':
        return safeMultiply(firstValue, secondValue);
      case '/':
        return safeDivide(firstValue, secondValue);
      default:
        return secondValue;
    }
  };

  // Função para executar igual
  const performEquals = () => {
    if (!operation || previousValue === null) return;

    const inputValue = parseFloat(displayValue);
    
    try {
      const result = calculate(previousValue, inputValue, operation);
      setDisplayValue(formatNumber(result));
      
      // Adicionar à história
      setCalculationHistory(prev => [...prev, operation, inputValue, '=', result]);
      
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    } catch (error) {
      const fallbackValue = handleCalculationError(error, inputValue);
      setDisplayValue(formatNumber(fallbackValue));
      setWaitingForOperand(true);
      showNotification(error.message, 'error');
    }
  };

  // Função para alternar sinal
  const toggleSign = () => {
    const value = parseFloat(displayValue);
    if (value === 0) return;
    
    setDisplayValue(String(-value));
  };

  // Função para calcular raiz quadrada
  const calculateSquareRoot = () => {
    try {
      const result = safeSquareRoot(displayValue);
      setDisplayValue(formatNumber(result));
      setWaitingForOperand(true);
    } catch (error) {
      const fallbackValue = handleCalculationError(error, 0);
      setDisplayValue(formatNumber(fallbackValue));
      setWaitingForOperand(true);
      showNotification(error.message, 'error');
    }
  };

  // Função para calcular potência ao quadrado
  const calculateSquare = () => {
    try {
      const result = safeSquare(displayValue);
      setDisplayValue(formatNumber(result));
      setWaitingForOperand(true);
    } catch (error) {
      const fallbackValue = handleCalculationError(error, 0);
      setDisplayValue(formatNumber(fallbackValue));
      setWaitingForOperand(true);
      showNotification(error.message, 'error');
    }
  };

  // Função para calcular inverso (1/x)
  const calculateInverse = () => {
    try {
      const result = safeInverse(displayValue);
      setDisplayValue(formatNumber(result));
      setWaitingForOperand(true);
    } catch (error) {
      const fallbackValue = handleCalculationError(error, 0);
      setDisplayValue(formatNumber(fallbackValue));
      setWaitingForOperand(true);
      showNotification(error.message, 'error');
    }
  };

  // Função para limpar memória
  const clearMemory = () => {
    setMemoryValue(0);
    showNotification('Memória limpa', 'success', 2000);
  };

  // Função para adicionar à memória
  const addToMemory = () => {
    const value = parseFloat(displayValue);
    setMemoryValue(prev => prev + value);
    setWaitingForOperand(true);
    showNotification(`Adicionado ${value} à memória`, 'info', 2000);
  };

  // Função para subtrair da memória
  const subtractFromMemory = () => {
    const value = parseFloat(displayValue);
    setMemoryValue(prev => prev - value);
    setWaitingForOperand(true);
    showNotification(`Subtraído ${value} da memória`, 'info', 2000);
  };

  // Função para recuperar da memória
  const recallMemory = () => {
    setDisplayValue(formatNumber(memoryValue));
    setWaitingForOperand(true);
    showNotification(`Memória recuperada: ${memoryValue}`, 'info', 2000);
  };

  // Função para mostrar histórico
  const showHistory = () => {
    if (calculationHistory.length > 0) {
      const historyText = calculationHistory.join(' ');
      showNotification(`Histórico: ${historyText}`, 'info', 5000);
    } else {
      showNotification('Nenhum cálculo realizado ainda', 'info', 2000);
    }
  };

  // Função para limpar histórico
  const clearHistory = () => {
    setCalculationHistory([]);
    showNotification('Histórico limpo', 'success', 2000);
  };

  return (
    <Container>
      <Head>
        <MyImage src={LogoSrc} alt="Goalmoon" href="https://goalmoon.com" />
      </Head>
      <Content>
        <Input value={displayValue} />
        
        {/* Primeira linha - Funções de limpeza e histórico */}
        <Row>
          <Button label="C" onClick={clearAll} />
          <Button label="CE" onClick={clearEntry} />
          <Button label="CH" onClick={clearHistory} />
          <Button label="H" onClick={showHistory} />
        </Row>

        {/* Segunda linha - Funções de memória e especiais */}
        <Row>
          <Button label="MC" onClick={clearMemory} />
          <Button label="MR" onClick={recallMemory} />
          <Button label="±" onClick={toggleSign} />
          <Button label="%" onClick={inputPercent} />
        </Row>

        {/* Terceira linha - Funções matemáticas */}
        <Row>
          <Button label="√" onClick={calculateSquareRoot} />
          <Button label="x²" onClick={calculateSquare} />
          <Button label="1/x" onClick={calculateInverse} />
          <Button label="/" onClick={() => performOperation('/')} />
        </Row>

        {/* Quarta linha - Números e operações */}
        <Row>
          <Button label="7" onClick={() => inputDigit('7')} />
          <Button label="8" onClick={() => inputDigit('8')} />
          <Button label="9" onClick={() => inputDigit('9')} />
          <Button label="×" onClick={() => performOperation('*')} />
        </Row>

        {/* Quinta linha - Números e operações */}
        <Row>
          <Button label="4" onClick={() => inputDigit('4')} />
          <Button label="5" onClick={() => inputDigit('5')} />
          <Button label="6" onClick={() => inputDigit('6')} />
          <Button label="-" onClick={() => performOperation('-')} />
        </Row>

        {/* Sexta linha - Números e operações */}
        <Row>
          <Button label="1" onClick={() => inputDigit('1')} />
          <Button label="2" onClick={() => inputDigit('2')} />
          <Button label="3" onClick={() => inputDigit('3')} />
          <Button label="+" onClick={() => performOperation('+')} />
        </Row>

        {/* Sétima linha - Zero, decimal e igual */}
        <Row>
          <ButtonDouble label="0" onClick={() => inputDigit('0')} />
          <Button label="." onClick={inputDecimal} />
          <Button label="=" onClick={performEquals} />
        </Row>
      </Content>
      <Foot>
        <Text01 valueT="Goalmoon© Copyright 2008-2025" />
        <Text01 valueT="Developed by " href="https://almmello.com" valueL="almmello" />
      </Foot>

      {/* Sistema de notificações */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onClose={closeNotification}
        />
      )}
    </Container>
  );
}

export default App;

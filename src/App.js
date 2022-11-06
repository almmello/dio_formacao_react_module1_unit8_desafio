
import Input from './components/Input';
import Button from './components/Button';
import ButtonDouble from './components/ButtonDouble';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [memNumber, setMemNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [newOperation, setNewOperation] = useState(false);
  const [isClear, setIsClear] = useState(true);
  const [isFirstClear, setIsFirstClear] = useState(true);
  const [isMemClear, setIsMemClear] = useState(true);

  const handleOnClear = () => {
    setIsClear(true)
    setIsFirstClear(true)
    setIsMemClear(true)
    setCurrentNumber('0')
    setFirstNumber('0')
    setMemNumber('0')
    setOperation('')
    setNewOperation(false)
  };


  const handleAddNumber = (num) => {
    if (operation === '') {
      if (isClear) {
        setCurrentNumber(num);
        setIsClear(false)
      } else {
        setCurrentNumber(currentNumber + '' + num);
        setIsClear(false)
      }
    } else {
      if (newOperation) {
        setFirstNumber(String(currentNumber));
        setIsFirstClear(false)
        setCurrentNumber(num);
        setIsClear(false)
        setNewOperation(false)
      } else {
        setCurrentNumber(currentNumber + '' + num);
        setIsClear(false)
      }
    }
  }


  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }

  const handleOperations = (oriEqual, operationSign) => {
    setOperation(operationSign)
    if (!oriEqual) {
      setMemNumber('0')
      setIsMemClear(true)
    }
    if (isFirstClear) {
      setNewOperation(true)
    } else {
      if ((isMemClear && oriEqual) || (!oriEqual && !newOperation)) {
        const result = operations[operationSign](Number(firstNumber), Number(currentNumber));
        setCurrentNumber(String(result))
        setIsClear(false)
      } else if (oriEqual) {
        const result = operations[operationSign](Number(currentNumber), Number(memNumber));
        setCurrentNumber(String(result))
        setIsClear(false)
      }
      setFirstNumber('0');
      setIsFirstClear(true)
      setNewOperation(true)
    }
  }


  const handlePercent = (oriEqual) => {
    
    const result = Number(currentNumber) / 100;
    setCurrentNumber(String(result))
    setIsClear(false)
    setFirstNumber('0');
    setIsFirstClear(true)
    setNewOperation(false)
    
  }

  const handleEquals = () => {

    if (operation !== '') {
      handleOperations(true, operation)
      const result = operations[operation](Number(firstNumber), Number(currentNumber));
      if (isMemClear) {
        setMemNumber(currentNumber)
        setIsMemClear(false)
      }
      setFirstNumber(String(result));
      setIsFirstClear(false)
    }
  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <ButtonDouble label="C" onClick={handleOnClear} />
          <Button label="%" onClick={() => handlePercent(false)}/>
          <Button label="/" onClick={() => handleOperations(false, '/')}/>          
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleOperations(false, '*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperations(false, '-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperations(false, '+')} />
        </Row>
        <Row>
          <ButtonDouble label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={() => handleEquals()}/>          
        </Row>
      </Content>
    </Container>
  );
}

export default App;

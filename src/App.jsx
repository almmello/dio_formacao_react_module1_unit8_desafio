
import Input from './components/Input/index.jsx';
import Button from './components/Button/index.jsx';
import ButtonDouble from './components/ButtonDouble/index.jsx';
import MyImage from './components/MyImage/index.jsx';
import Text01 from './components/Text01/index.jsx';

import { Container, Content, Foot, Head, Row } from './styles.js';
import { useState } from 'react';

import BigNumber from "bignumber.js";
//import { BigNumber } from "./node_modules/bignumber.js/bignumber.mjs";

import LogoSrc from './logo.png';


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
    '+': (a, b) => a.plus(b),
    '-': (a, b) => a.minus(b),
    '*': (a, b) => a.times(b),
    '/': (a, b) => a.dividedBy(b),
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
        const result = operations[operationSign](BigNumber(firstNumber), BigNumber(currentNumber));
        setCurrentNumber(String(result))
        setIsClear(false)
      } else if (oriEqual) {
        const result = operations[operationSign](BigNumber(currentNumber),BigNumber(memNumber));
        setCurrentNumber(String(result))
        setIsClear(false)
      }
      setFirstNumber('0');
      setIsFirstClear(true)
      setNewOperation(true)
    }
  }


  const handlePercent = (oriEqual) => {
    
    const result = BigNumber(currentNumber).dividedBy(100);
    setCurrentNumber(String(result))
    setIsClear(false)
    setFirstNumber('0');
    setIsFirstClear(true)
    setNewOperation(false)
    
  }

  const handleEquals = () => {

    if (operation !== '') {
      handleOperations(true, operation)
      const result = operations[operation](BigNumber(firstNumber), BigNumber(currentNumber));
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
      <Head>
        <MyImage src={LogoSrc} alt="Goalmoon" href="https://goalmoon.com" />
      </Head>
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
      <Foot>
        <Text01 valueT="Goalmoon© Copyright 2008-2022" />
        <Text01 valueT="Developed by " href="https://almmello.com" valueL="almmello" />
      </Foot>
    </Container>
  );
}

export default App;

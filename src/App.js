
import Input from './components/Input';
import Button from './components/Button';

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

  const handleSumNumbers = (oriEqual) => {
    setOperation('+')
    if (!oriEqual) {
      setMemNumber('0')
      setIsMemClear(true)
    }
    if(isFirstClear){
        setNewOperation(true)
    } else {
      if ((isMemClear && oriEqual) || (!oriEqual && !newOperation)) {
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
        setIsClear(false)
      } else if (oriEqual) {
        const sum = Number(currentNumber) + Number(memNumber);
        setCurrentNumber(String(sum))
        setIsClear(false)
      }
      setFirstNumber('0');
      setIsFirstClear(true)
      setNewOperation(true)
    }
  }

  const handleMinusNumbers = (oriEqual) => {
    setOperation('-')
    if (!oriEqual) {
      setMemNumber('0')
      setIsMemClear(true)
    }
    if(isFirstClear){
        setNewOperation(true)
    } else {
      if ((isMemClear && oriEqual) || (!oriEqual && !newOperation)) {
        const minus = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(minus))
        setIsClear(false)
      } else if (oriEqual) {
        const minus = Number(currentNumber) - Number(memNumber);
        setCurrentNumber(String(minus))
        setIsClear(false)
      }
      setFirstNumber('0');
      setIsFirstClear(true)
      setNewOperation(true)
    }
  }

  const handleEquals = () => {

    if(operation !== ''){
        switch(operation){
          case '+':
            handleSumNumbers(true);
            const sum = Number(firstNumber) + Number(memNumber);
            if (isMemClear) {
              setMemNumber(currentNumber)
              setIsMemClear(false)
            } 
            setFirstNumber(String(sum));
            setIsFirstClear(false)
            break;
          case '-':
            handleMinusNumbers(true);
            const minus = Number(firstNumber) - Number(memNumber);
            if (isMemClear) {
              setMemNumber(currentNumber)
              setIsMemClear(false)
            } 
            setFirstNumber(String(minus));
            setIsFirstClear(false)
            break;
          default: 
            break;
        }
    }

  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleMinusNumbers(false)}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleSumNumbers(false)}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={() => handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;

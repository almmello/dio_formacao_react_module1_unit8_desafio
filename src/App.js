
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

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setMemNumber('0')
    setOperation('')
    setNewOperation(false)
  };


  const handleAddNumber = (num) => {
    if (operation === '') {
      if (currentNumber === '0') {
        setCurrentNumber(num);
      } else {
        setCurrentNumber(currentNumber + '' + num);
      }
    } else {
      if (newOperation) {
        setFirstNumber(String(currentNumber));
        setCurrentNumber(num);
        setNewOperation(false)
      } else {
        setCurrentNumber(currentNumber + '' + num);
      }
    }
  }

  const handleSumNumbers = (oriEqual) => {
    if (!oriEqual) {
      setMemNumber('0')
    }
    if(firstNumber === '0'){
        setOperation('+')
        setNewOperation(true)
    } else {
      if ((memNumber === '0' && oriEqual) || (!oriEqual && !newOperation)) {
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
      } else if (oriEqual) {
        const sum = Number(currentNumber) + Number(memNumber);
        setCurrentNumber(String(sum))
      }
      setFirstNumber('0');
      setNewOperation(true)
    }
  }

  const handleMinusNumbers = (oriEqual) => {
    if (!oriEqual) {
      setMemNumber('0')
    }
    if(firstNumber === '0'){
        setOperation('-')
        setNewOperation(true)
    } else {
      if ((memNumber === '0' && oriEqual) || (!oriEqual && !newOperation)) {
        const minus = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(minus))
      } else if (oriEqual) {
        const minus = Number(currentNumber) - Number(memNumber);
        setCurrentNumber(String(minus))
      }
      setFirstNumber('0');
      setNewOperation(true)
    }
  }

  const handleEquals = () => {

    if(operation !== ''){
        switch(operation){
          case '+':
            handleSumNumbers(true);
            const sum = Number(firstNumber) + Number(memNumber);
            if (memNumber === '0') {
              setMemNumber(currentNumber)
            } 
            setFirstNumber(String(sum));
            break;
          case '-':
            handleMinusNumbers(true);
            const minus = Number(firstNumber) - Number(memNumber);
            if (memNumber === '0') {
              setMemNumber(currentNumber)
            } 
            setFirstNumber(String(minus));
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

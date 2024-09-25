import { useState } from "react";
import "./App.css"

function App() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('+');
  const [secondNumber, setSecondNumber] = useState('0')
  const [result, setResult] = useState(0)
  const [storedResult, setStoredResult] = useState(0)

  const updateFirst = (number) => {
    if (number === 'clear') {
      setFirstNumber('0')
    }
    else if (number === 'recall') {
      setFirstNumber('' + storedResult)
    }
    else if (number === '.') {
      if (!firstNumber.includes('.')) {
        setFirstNumber((display) => display + number)
      }
    }
    else if (firstNumber === '0') {
      setFirstNumber('' + number)
    } else {
      setFirstNumber((display) => display + number)
    }
  }

  const updateOperation = (operation) => {
    setOperation(operation)
  }

  const updateSecond = (number) => {
    if (number === 'clear') {
      setSecondNumber('0')
    }
    else if (number === 'recall') {
      setSecondNumber('' + storedResult)
    }
    else if (number === '.') {
      if (!secondNumber.includes('.')) {
        setSecondNumber((display) => display + number)
      }
    }
    else if (secondNumber === '0') {
      setSecondNumber('' + number)
    } else {
      setSecondNumber((display) => display + number)
    }
  }

  const updateResult = () => {
    if (operation === '÷') setResult(parseInt(firstNumber) / parseInt(secondNumber))
    else setResult(eval(firstNumber + operation + secondNumber))
  }

  const storeResult = () => {
    setStoredResult(result)
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => updateFirst(1)}>1</button>
          <button onClick={() => updateFirst(2)}>2</button>
          <button onClick={() => updateFirst(3)}>3</button>
          <button onClick={() => updateFirst(4)}>4</button>
          <button onClick={() => updateFirst(5)}>5</button>
          <button onClick={() => updateFirst(6)}>6</button>
          <button onClick={() => updateFirst(7)}>7</button>
          <button onClick={() => updateFirst(8)}>8</button>
          <button onClick={() => updateFirst(9)}>9</button>
          <button onClick={() => updateFirst(0)}>0</button>
          <button onClick={() => updateFirst('clear')}>Clear</button>
          <button onClick={() => updateFirst('recall')}>Recall</button>
          <button onClick={() => updateFirst('.')}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => updateOperation('+')}>+</button>
          <button onClick={() => updateOperation('-')}>-</button>
          <button onClick={() => updateOperation('*')}>*</button>
          <button onClick={() => updateOperation('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => updateSecond(1)}>1</button>
          <button onClick={() => updateSecond(2)}>2</button>
          <button onClick={() => updateSecond(3)}>3</button>
          <button onClick={() => updateSecond(4)}>4</button>
          <button onClick={() => updateSecond(5)}>5</button>
          <button onClick={() => updateSecond(6)}>6</button>
          <button onClick={() => updateSecond(7)}>7</button>
          <button onClick={() => updateSecond(8)}>8</button>
          <button onClick={() => updateSecond(9)}>9</button>
          <button onClick={() => updateSecond(0)}>0</button>
          <button onClick={() => updateSecond('clear')}>Clear</button>
          <button onClick={() => updateSecond('recall')}>Recall</button>
          <button onClick={() => updateSecond('.')}>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => updateResult()}>=</button>
          <button onClick={() => storeResult()}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App

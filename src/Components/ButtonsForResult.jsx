export const ButtonsForResult = ({ setCalculateNumber, res, addNumber, calculator, resultStatus }) => {

  if (resultStatus === false) {
    return (
      <>
        <p>
          <button onClick={() => setCalculateNumber('')}>Delete</button>
          <button onClick={res}>Reset</button>
        </p>
        <p>
          <button onClick={() => addNumber(1)}>1</button>
          <button onClick={() => addNumber(2)}>2</button>
          <button onClick={() => addNumber(3)}>3</button>
          <button onClick={() => calculator('/')}>/</button>
          <button onClick={() => calculator('*')}>x</button>
        </p>
        <p>
          <button onClick={() => addNumber(4)}>4</button>
          <button onClick={() => addNumber(5)}>5</button>
          <button onClick={() => addNumber(6)}>6</button>
          <button onClick={() => calculator('+')}>+</button>
          <button onClick={() => calculator('-')}>-</button>
        </p>
        <p>
          <button onClick={() => addNumber(7)}>7</button>
          <button onClick={() => addNumber(8)}>8</button>
          <button onClick={() => addNumber(9)}>9</button>
          <button onClick={() => addNumber(0)}>0</button>
          <button onClick={() => addNumber('.')}>.</button>
        </p></>
    );
  }

  return (
    <p>
      <button onClick={res}>Reset</button>
    </p>

  );
};

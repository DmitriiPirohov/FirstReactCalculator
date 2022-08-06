import { useState } from "react";
import { ButtonForResult } from "./ButtonForResult";
import { ButtonsForResult } from "./ButtonsForResult";
import { Input } from "./Input";


export const Calculator = () => {
  const [calculateNumber, setCalculateNumber] = useState('');
  const [members, setMembers] = useState('');
  const [status, setStatus] = useState(false);
  const [math, setMath] = useState('');
  const [result, setResult] = useState(0);
  const [resultStatus, setResultStatus] = useState(false);

  function addNumber(a) {
    if (a === '.' && calculateNumber.length < 1) {
      a = '0.';
    }
    let copy = [...calculateNumber];

    if (a === '.' && (copy.filter(a => a === '.').length > 0)) {
      a = '';
    }
    return setCalculateNumber(prev => prev + a);
  }

  function calculator(action) {

    if (status === false) {
      return (
        setMembers(calculateNumber),
        setCalculateNumber(''),
        setStatus(true),
        setMath(action)
      );
    }

    switch (math) {
      case '/':
        return (
          setResult(Number(members) / Number(calculateNumber)),
          setCalculateNumber(''),
          setResultStatus(true)
        );
      case '*':
        return (
          setResult(Number(members) * Number(calculateNumber)),
          setCalculateNumber(''),
          setResultStatus(true)
        );
      case '-':
        return (
          setResult(Number(members) - Number(calculateNumber)),
          setCalculateNumber(''),
          setResultStatus(true)
        );
      case '+':
        return (
          setResult(Number(members) + Number(calculateNumber)),
          setCalculateNumber(''),
          setResultStatus(true)
        );

      default:
        break;
    }
  }

  const res = () => {
    return (
      setMembers([]),
      setCalculateNumber(''),
      setStatus(false),
      setResult(0),
      setResultStatus(false),
      setMath('')
    );
  };

  return (
    <>
      <p>Calculator with useState</p>


      <Input par={resultStatus} calc={calculateNumber} result={result} math={math} members={members} />

      <ButtonsForResult setCalculateNumber={setCalculateNumber} res={res} addNumber={addNumber} calculator={calculator} resultStatus={resultStatus} />

      <p>
        <ButtonForResult stat={math} f={calculator} number={calculateNumber} resultStatus={resultStatus} />
      </p>

    </>
  );
};

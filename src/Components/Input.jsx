
export const Input = ({ par, calc, result, math, members }) => {
  if (par === false) {
    return (
      <input
        type="text"
        value={`${members} ${math} ${calc}`} />
    );
  }

  return (
    <input
      type="text"
      value={result}
      placeholder='Enter the number' />
  );
};

export const ButtonForResult = ({ stat, f, number, resultStatus }) => {
  if (resultStatus === true) {
    return;
  }

  if (stat === '') {
    return (
      <button>..</button>
    );
  }

  if (number === '') {
    return (
      <button>...</button>
    );
  }

  return (
    <button onClick={() => f()}>=</button>
  );
};

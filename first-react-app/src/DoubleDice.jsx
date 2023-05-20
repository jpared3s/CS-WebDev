export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;

  return (
    <div>
      <h2>Double Dice</h2>
      {num1 === num2 && <h3>You Win!</h3>}
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>
    </div>
  );
}

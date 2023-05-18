export default function Greeter(props) {
  return (
    <div>
      <h1>Hello {props.person}!!</h1>
      <h2>from, {props.from}</h2>
    </div>
  );
}

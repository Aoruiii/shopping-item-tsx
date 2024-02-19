interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return (
    <div>
      <h1>{`Hello, ${person}`}</h1>
    </div>
  );
}

export default Greeter;

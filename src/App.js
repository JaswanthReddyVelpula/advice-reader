import { react, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Click on to get advice");
  const [count, setCount] = useState(0);

  async function settingAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={settingAdvice}>Click on</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have clicked <strong>{props.count}</strong> times
    </p>
  );
}

import { useEffect, useState } from "react";

function DualEffectComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Text has changed to:${text}`);
  }, [text]);

  return (
    <>
      <div>
        <p>Counter {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <p>Text: {text}</p>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </div>
    </>
  );
}
export default DualEffectComponent;

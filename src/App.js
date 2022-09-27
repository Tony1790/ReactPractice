import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time"); //이 코드는 state가 변할 때 마다 매번 실행됨.
  useEffect(() => {
    console.log("call the API");
  }, []);
  /* useEffect를 사용하니 state가 변화하더라도 한번만 실행. 
    첫번째 인자는 한번만 실행, 두번째 인자는 */
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;

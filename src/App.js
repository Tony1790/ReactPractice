import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time"); //이 코드는 state가 변할 때 마다 매번 실행됨.
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when Keyword is changed");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when Counter is changed");
  }, [counter]);
  /* useEffect를 사용하니 state가 변화하더라도 한번만 실행. 
    첫번째 인자는 한번만 실행, 두번째 인자는 */
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;

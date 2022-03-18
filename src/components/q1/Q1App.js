import { useEffect } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function Q1App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));

  /**
   * create two states called value1 and value 2
   */

  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */

  const changeValue1 = () => {
    /**
     * get value of input from ref and set first state
     */
  };
  const changeValue2 = () => {
    /**
     * get value of input from ref and set second state
     */
  };
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{/**pass first state */}</Title>
        <br />
        change first value:
        <input />
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{/**pass second state */}</Title>
        <br />
        change second value:
        <input />
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default Q1App;

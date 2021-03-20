import React, { useContext, createContext, useState, useCallback } from "react";
import UseToggle from './hookstest/useToggle';
import UseReq from './hookstest/useRequest';
import UseReqMa from './hookstest/useRequestManual';
import SelCo from './formcomponent/selectComp';

const MydisPatch = createContext();

const set = new Set();

export const useDisp = () => {
  return useContext(MydisPatch);
}

const App = () => {
  const [value, setValue] = useState(0);

  // 起到类似缓存函数引用的效果了
  const changeValue = useCallback(() => {
    setValue(value + 1);
  }, []);

  const [count, setCount] = useState(0);

  set.add(changeValue);
  console.log(set.size);

  return (
    <>
      <MydisPatch.Provider value={() => {console.log('1221 改变')}}>
        <UseToggle changeValue={changeValue} />
        <UseReq />
        <UseReqMa />
        <SelCo />
        <button onClick={() => setCount(count + 1)}>count++</button>
      </MydisPatch.Provider>
    </>
  );
};

export default App;
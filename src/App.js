import React from "react";
import UseToggle from './hookstest/useToggle';
import UseReq from './hookstest/useRequest';
import UseReqMa from './hookstest/useRequestManual';

const App = () => {
  return (
    <>
      <UseToggle />
      <UseReq />
      <UseReqMa />
    </>
  );
};

export default App;
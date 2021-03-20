// 在组件初次加载时， 自动触发该函数执行。
import { useRequest } from 'ahooks';
import React from 'react';
import { useDisp } from '../App.js';

function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('testName');
    }, 1000);
  });
}

const UseRModal = () => {
  console.log(useDisp(), '通过这种方式获取函数方法');
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data}</div>;
};

export default UseRModal;

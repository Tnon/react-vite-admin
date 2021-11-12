/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-09 17:16:20
 * @LastEditTime: 2021-11-11 14:51:37
 */
import { FC, useState } from "react";

const Overview: FC = () => {
  const [count, setCount] = useState(0);
  debugger;
  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }
  // 多次点击click me按钮，然后点击一下show alert按钮，然后又快速点击多次click me按钮，alert出来的count是点击该按钮时的count还是最新的count？？
  // 实验表明，显示的是点击时的按钮，这就意味着handleAlertClick这个函数capture了被点击时的那个count，这也就是说每一轮的count都是不一样的
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};
export default Overview;

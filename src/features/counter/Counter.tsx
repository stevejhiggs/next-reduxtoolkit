import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <>
      <p>Clicked: {count} times</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;

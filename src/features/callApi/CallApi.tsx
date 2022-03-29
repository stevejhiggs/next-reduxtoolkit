import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { callApiAsync, selectApiState } from "./callApiSlice";

const CallApi: FC = () => {
  const dispatch = useAppDispatch();
  const result = useAppSelector(selectApiState);

  return (
    <>
      <p>Current state: {result}</p>
      <button onClick={() => dispatch(callApiAsync())}>Call api</button>
    </>
  );
};

export default CallApi;

import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import { increment, decrement } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>{count}</p>
      <div>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          +
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          -
        </Button>
      </div>
    </>
  );
};

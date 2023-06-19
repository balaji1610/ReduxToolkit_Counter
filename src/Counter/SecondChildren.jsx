import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../features/counter/counterSlice";
import { Button } from "@mui/material";
export default function SecondChildren() {
  const dispatch = useDispatch();

  const dec = useSelector((state) => state.counter.value);

  const isCounterZero = dec === 0;
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(decrement())}
        disabled={isCounterZero}
      >
        -
      </Button>
    </div>
  );
}

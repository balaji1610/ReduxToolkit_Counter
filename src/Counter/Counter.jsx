import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/counter/counterSlice";
import SecondChildren from "./SecondChildren";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment("Balaji"))}
      >
        +
      </Button>
      <SecondChildren />
    </div>
  );
}

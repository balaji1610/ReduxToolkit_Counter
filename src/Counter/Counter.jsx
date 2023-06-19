import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/counter/counterSlice";
import SecondChildren from "./SecondChildren";
import Grid from "@mui/material/Grid";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        columns={12}
      >
        <Grid item xs={4}>
          <div>
            {" "}
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(increment())}
            >
              +
            </Button>{" "}
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            {" "}
            <h1>{count}</h1>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div>
            {" "}
            <SecondChildren />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

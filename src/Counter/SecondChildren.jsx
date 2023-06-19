import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function SecondChildren() {
  const up = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{up}</h1>
      <Button variant="contained" color="error">
        -
      </Button>
    </div>
  );
}

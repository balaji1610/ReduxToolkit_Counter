import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { addCustomincrement } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

export default function Inputfield() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(2);

  const Changevalue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Grid container columns={12} spacing={5}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          xs={4}
        >
          <div>
            {" "}
            <TextField
              color="error"
              inputProps={{
                min: "1",
                max: "10",
                style: { width: "60px", fontSize: "20px" },
              }}
              type="number"
              value={value}
              onChange={Changevalue}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(addCustomincrement(Number(value)))}
            >
              Add To {value}
            </Button>
          </div>    
        </Grid>
      </Grid>
    </div>
  );
}

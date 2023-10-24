/* eslint-disable react/prop-types */
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

function FilterTaskList({ filter, setFilter }) {
  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Container>
      <Typography variant="h6" marginBottom={1} marginTop={2}>
        Filter by status
      </Typography>
      <FormControl component="fieldset" variant="standard">
        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.high}
                onChange={handleChange}
                name="high"
              />
            }
            label="High"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.normal}
                onChange={handleChange}
                name="normal"
              />
            }
            label="Normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.low}
                onChange={handleChange}
                name="low"
              />
            }
            label="Low"
          />
        </FormGroup>
      </FormControl>
    </Container>
  );
}

export default FilterTaskList;

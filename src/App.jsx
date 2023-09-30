import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <>
      <Box
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eee",
          padding: 10,
        }}
      >
        <Card sx={{ minWidth: 600 }}>
          <CardContent>
            <Typography variant="h4" textAlign={"center"}>
              Todo App MUI
            </Typography>
            <Container>
              <Typography variant="h6" marginBottom={1} marginTop={2}>
                Filter by status
              </Typography>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="High"
                  />
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
                </RadioGroup>
              </FormControl>
            </Container>
            <Container sx={{ height: 400 }}>
              <Typography variant="h6" marginBottom={1} marginTop={2}>
                Your tasks
              </Typography>
              <Stack direction={"column"}>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <Checkbox />
                  <Typography variant="body" flex={1}>
                    Nau com
                  </Typography>
                  <Chip label="high" color="error" />
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <Checkbox />
                  <Typography
                    variant="body"
                    flex={1}
                    sx={{ textDecoration: "line-through" }}
                  >
                    Rua chen
                  </Typography>
                  <Chip label="low" color="warning" />
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <Checkbox />
                  <Typography variant="body" flex={1}>
                    Lau nha
                  </Typography>
                  <Chip label="normal" color="success" />
                </Stack>
              </Stack>
            </Container>
            <Divider sx={{ marginY: 2 }}></Divider>
            <Container>
              <Typography variant="h6" marginBottom={1} marginTop={2}>
                Create task
              </Typography>
              <Stack direction={"row"} gap={2}>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  sx={{ flex: 3 }}
                />
                <Box sx={{ flex: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Priority
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Priority"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>High</MenuItem>
                      <MenuItem value={20}>Normal</MenuItem>
                      <MenuItem value={30}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
              <Button variant="contained" sx={{ width: "100%", marginTop: 2 }}>
                Add task
              </Button>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;

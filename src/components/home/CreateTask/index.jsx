/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";


function CreateTask({ task, isValidate, setTask, setIsvalidate, setTaskList, taskList }) {
  const handleSubmit = () => {
    if (task.title.trim() === "") {
      setIsvalidate(true);
      toast.error("Add task faild!!!");
      return;
    }
    setTaskList([
      ...taskList,
      {
        ...task,
        id: uuidv4(),
      },
    ]);
    setTask({
      id: "",
      title: "",
      priority: "normal",
      isDone: false,
    });
    setIsvalidate(false);
    toast.success("Add task successfully!!!");
  };

  return (
    <Container>
      <Typography variant="h6" marginBottom={1} marginTop={2}>
        Create task
      </Typography>
      <Stack direction={"row"} gap={2}>
        <TextField
          error={isValidate && task.title.trim() === ""}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={task.title}
          sx={{ flex: 3 }}
          onChange={(e) =>
            setTask({
              ...task,
              title: e.target.value,
            })
          }
        />
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={task.priority}
              label="Priority"
              onChange={(event) =>
                setTask({
                  ...task,
                  priority: event.target.value,
                })
              }
            >
              <MenuItem value={"high"}>High</MenuItem>
              <MenuItem value={"normal"}>Normal</MenuItem>
              <MenuItem value={"low"}>Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "100%", marginTop: 2 }}
        onClick={handleSubmit}
      >
        Add task
      </Button>
    </Container>
  );
}

export default CreateTask;

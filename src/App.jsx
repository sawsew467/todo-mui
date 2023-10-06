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
import { getColor } from "./ultils/color";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const DATA = [
  {
    id: 1,
    title: "Ăn cơm",
    priority: "high",
    isDone: false,
  },
  {
    id: 2,
    title: "Nấu cơm",
    priority: "normal",
    isDone: true,
  },
  {
    id: 3,
    title: "Rửa chén",
    priority: "low",
    isDone: false,
  },
];

function App() {
  const [filter, setFilter] = useState("all");
  const [task, setTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Ăn cơm",
      priority: "high",
      isDone: false,
    },
    {
      id: 2,
      title: "Nấu cơm",
      priority: "normal",
      isDone: true,
    },
    {
      id: 3,
      title: "Rửa chén",
      priority: "low",
      isDone: false,
    },
  ]);

  const handleSubmit = () => {
    console.log(task);
    setTaskList([...taskList, task]);
    setTask({
      id: "",
      title: "",
      priority: "high",
      isDone: false,
    });
    toast.error("Add task successfully!!!");
  };

  const handleDelete = (x) => {
    const newArray = taskList.filter((task, index) => index !== x);
    setTaskList(newArray);
  };

  const toggleStatus = (x) => {
    const newTaskList = taskList.map((task, index) => {
      if (x === index) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }

      return task;
    });
    setTaskList(newTaskList);
  };

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
        
      <ToastContainer />
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
                <RadioGroup
                  onChange={(e) => setFilter(e.target.value)}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={filter}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="all"
                  />
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
                {taskList.map((task, index) =>
                  task.priority === filter || filter === "all" ? (
                    <>
                      <Stack
                        direction={"row"}
                        gap={1}
                        alignItems={"center"}
                        key={index}
                      >
                        <Checkbox
                          checked={task.isDone}
                          onChange={() => toggleStatus(index)}
                        />
                        <Typography
                          variant="body"
                          flex={1}
                          sx={{
                            textDecoration: task.isDone
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {task.title}
                        </Typography>
                        <Chip
                          label={task.priority}
                          color={getColor(task.priority)}
                        />
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={() => handleDelete(index)}
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Stack>
                    </>
                  ) : (
                    <></>
                  )
                )}
                {taskList.filter(
                  (task, index) => task.priority === filter || filter === "all"
                ).length === 0 ? (
                  <Typography>Empty</Typography>
                ) : (
                  <></>
                )}
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
                    <InputLabel id="demo-simple-select-label">
                      Priority
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={"normal"}
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
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;

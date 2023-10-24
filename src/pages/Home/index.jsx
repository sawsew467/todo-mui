import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
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
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { getColor } from "../../ultils/color";
import CreateTask from "../../components/home/CreateTask";

function Home() {
  const [open, setOpen] = useState(false);
  const [isValidate, setIsvalidate] = useState(false);

  const [filter, setFilter] = useState({
    high: true,
    normal: true,
    low: true,
  });
  const [editedTask, setEditedTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });
  const [task, setTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("list")) ?? []
  );

  

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

  const handleEditClick = (task) => {
    setOpen(true);
    setEditedTask(task);
  };

  const handleUpdateTask = () => {
    const newTaskList = taskList.map((task, index) => {
      if (editedTask.id === task.id) {
        return editedTask;
      } else {
        return task;
      }
    });
    setTaskList(newTaskList);
    setOpen(false);
  };

  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    localStorage?.setItem("list", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <Dialog maxWidth={"lg"} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit your task</DialogContentText>
          <Stack direction={"row"} gap={2} width={600} marginTop={2}>
            <TextField
              error={isValidate && editedTask.title.trim() === ""}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={editedTask.title}
              sx={{ flex: 3 }}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
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
                  defaultValue={editedTask.priority}
                  label="Priority"
                  onChange={(event) =>
                    setEditedTask({
                      ...editedTask,
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateTask}>Submit</Button>
        </DialogActions>
      </Dialog>
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
            <Container sx={{ height: 400 }}>
              <Typography variant="h6" marginBottom={1} marginTop={2}>
                Your tasks
              </Typography>
              <Stack direction={"column"}>
                {taskList.map((task, index) =>
                  filter[task?.priority] ? (
                    <Stack
                      direction={"row"}
                      gap={1}
                      alignItems={"center"}
                      key={index}
                    >
                      <Checkbox
                        checked={task?.isDone}
                        onChange={() => toggleStatus(index)}
                      />
                      <Typography
                        variant="body"
                        flex={1}
                        sx={{
                          textDecoration: task.isDone ? "line-through" : "none",
                        }}
                      >
                        {task.title}
                      </Typography>
                      <Chip
                        label={task.priority}
                        color={getColor(task.priority)}
                      />
                      <IconButton
                        aria-label="edit"
                        size="large"
                        onClick={() => handleEditClick(task)}
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  ) : (
                    <></>
                  )
                )}
              </Stack>
            </Container>
            <Divider sx={{ marginY: 2 }}></Divider>
            <CreateTask
              number={5}
              number2={10}
              task={task}
              isValidate={isValidate}
              setTask={setTask}
              setIsvalidate={setIsvalidate}
              setTaskList={setTaskList}
              taskList={taskList}
            ></CreateTask>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Home;

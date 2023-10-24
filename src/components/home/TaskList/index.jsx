/* eslint-disable react/prop-types */
import {
  Checkbox,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getColor } from "../../../ultils/color";

function TaskList({ taskList, filter, setTaskList, setOpen, setEditedTask }) {
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
  return (
    <Container sx={{ height: 400 }}>
      <Typography variant="h6" marginBottom={1} marginTop={2}>
        Your tasks
      </Typography>
      <Stack direction={"column"}>
        {taskList.map((task, index) =>
          filter[task?.priority] ? (
            <Stack direction={"row"} gap={1} alignItems={"center"} key={index}>
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
              <Chip label={task.priority} color={getColor(task.priority)} />
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
  );
}

export default TaskList;

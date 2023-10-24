import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import CreateTask from "../../components/home/CreateTask";
import FilterTaskList from "../../components/home/FilterTaskList";
import TaskList from "../../components/home/TaskList";
import EditModal from "../../components/home/EditModal";

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

  useEffect(() => {
    localStorage?.setItem("list", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <EditModal
        taskList={taskList}
        setTaskList={setTaskList}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        setOpen={setOpen}
        open={open}
        isValidate={isValidate}
      ></EditModal>
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
            <FilterTaskList
              filter={filter}
              setFilter={setFilter}
            ></FilterTaskList>
            <TaskList
              filter={filter}
              taskList={taskList}
              setTaskList={setTaskList}
              setOpen={setOpen}
              setEditedTask={setEditedTask}
            ></TaskList>

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

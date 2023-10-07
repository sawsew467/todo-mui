import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [inputValues, setInputValues] = useState({
    username: "admin",
    password: "123456",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputValues.username === "admin" && inputValues.password === "123456") {
        toast.success("Login successfully!!!")
        navigate('/home')
    } else {
        toast.error("Invalid username or password")
    }
  };

  return (
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
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" textAlign={"center"} marginBottom={2}>
            Login
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ flex: 3 }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ flex: 3, marginTop: 2 }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ my: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography variant="body" textAlign={"center"}>
            Don't have account?
          </Typography>
          <Link to={"/register"} style={{ width: "100%" }}>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
              Register
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;

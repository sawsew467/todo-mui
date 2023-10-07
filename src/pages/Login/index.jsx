import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
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
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h4" textAlign={"center"} marginBottom={2}>
            Login
          </Typography>
          <TextField fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ flex: 3 }}
          />
          <TextField fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ flex: 3, marginTop: 2 }}
          />
          <Button variant="contained" fullWidth sx={{my: 2}}>Login</Button>
          <Typography variant="body" textAlign={"center"}>
            Don't have account?
          </Typography>
          <Link to={'/register'}>fewfewfew</Link>
          <Button variant="outlined" fullWidth sx={{mt: 2}}>Register</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;

import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';

const Login = () => {

  return (
    <Card>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          component="form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography>Email</Typography>
          <TextField id="Email1" variant="outlined" />
          <Typography>Password</Typography>
          <TextField id="Password" variant="outlined" />
          <Button variant="contained">Log in</Button>
        </Box>
      </Box>
    </Card>
  );
}

export default Login;
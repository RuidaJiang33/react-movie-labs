import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useAuth } from '../../contexts/authContext'
import Alert from '@mui/material/Alert';

const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {

    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match')
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false);
  }

  return (
    <Card>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'left'
        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <h2>Sign up</h2>
          {currentUser && currentUser.email}
          {error && <Alert severity="error">{error}</Alert>}
          <Typography style={{ textAlign: 'left' }}>Email</Typography>
          <TextField id="Email1" variant="outlined" inputRef={emailRef} />
          <Typography>Password</Typography>
          <TextField id="Password" variant="outlined" type="password" inputRef={passwordRef} />
          <Typography>PasswordConfirm</Typography>
          <TextField id="PasswordConfirm" variant="outlined" type="password" inputRef={passwordConfirmRef} />
          <Button variant="contained" type="submit" disabled={loading}>Sign up</Button>
        </form>
      </Box>
    </Card>
  );
}

export default Signup;
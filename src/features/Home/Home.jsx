import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectHomeData } from './slice'
import { homeTestSaga } from './actions'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme();

export default function Home() {
  const dispatch = useDispatch();
  const homeData = useSelector(selectHomeData);

  const handleRequest = () => {
    dispatch(homeTestSaga());
  }

  return (
    <>
    {console.log(homeData)}
      <ThemeProvider theme={theme} > 
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Button variant="outlined" onClick={() => { handleRequest(); }}>Outlined</Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

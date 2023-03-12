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

  let show = <h2>Loading ...</h2>
  if (homeData) {
    show = (
      <div>
                  {homeData.map((item, index) => {
            return <li key={index} >{item.id}</li>
          })}
      </div>
    )
  }

  return (
    <>
    {console.log(homeData)}
      <ThemeProvider theme={theme} > 
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Button variant="outlined" onClick={() =>  dispatch(homeTestSaga()) }>Outlined</Button>
        </Container>
        <Container>
          {/* {homeData.map((item, index) => {
            return <li key={index} >{item.id}</li>
          })} */}
          {/* {Object.entries(homeData).map(i => console.log('i', i))} */}
          {/* {Array.from(homeData).map(i => console.log('i2', i))}
          {console.log('loggg', homeData)} */}
          {show}
        </Container>
      </ThemeProvider>
    </>
  );
}

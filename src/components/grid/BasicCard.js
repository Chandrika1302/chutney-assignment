import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@mui/material/FormHelperText';


import './BasicCard.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00e676',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicCard() { 
  function handleSubmit(e) {
    e.preventDefault()
    const {name,phoneNumber} = e.target.elements
    console.log({name: name.value });
    console.log({number:phoneNumber.value });
    console.log(e.target.Item.innerText);
  }

  function handleAdd(){
    return(
      <div>hi</div>
    )

  }
  

  return (
    <div><Box sx={{ flexGrow: 1 }} style={{margin:40}}>
    <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(50)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item className='item'>{index+1}
          <div>
          <Box>
        <form onSubmit={handleSubmit}>
        <FormControl required>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input id='name' type='text' ></Input>
          <FormHelperText><span className='red'>required</span></FormHelperText>
        </FormControl><br/>

        <FormControl required>
          <InputLabel htmlFor='phoneNumber'>Number</InputLabel>
          <Input id='phoneNumber' type='number' ></Input>
          <FormHelperText><span className='red'>required</span></FormHelperText>
        </FormControl><br/><br/>
        <Button variant="contained" onClick={handleAdd}>Add</Button>
        </form>
        </Box>
            </div></Item>
        </Grid>
      ))}
    </Grid>
  </Box>
  
    </div>
  );
}

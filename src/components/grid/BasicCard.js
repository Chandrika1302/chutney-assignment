import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';


import './BasicCard.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00e676',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div><Box sx={{ flexGrow: 1 }} style={{margin:40}}>
    <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(50)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item className='item'>{index+1}
          <div>
          <Button variant="contained" onClick={handleOpen}>Add</Button>
            </div></Item>
        </Grid>
      ))}
    </Grid>
  </Box>
  <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <FormControl required>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input id='username' type='text'></Input>
          <FormHelperText><span className='red'>required</span></FormHelperText>
        </FormControl><br/>

        <FormControl required>
          <InputLabel htmlFor='phoneNumber'>Number</InputLabel>
          <Input id='phoneNumber' type='number'></Input>
          <FormHelperText><span className='red'>required</span></FormHelperText>
        </FormControl><br/><br/>
        <Button variant='contained' color='primary'>Submit</Button>
        </Box>
      </Modal>
    </div>
    </div>
    
  );
}

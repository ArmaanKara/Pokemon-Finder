import React from 'react';
import './Card.css';
// import Card from '@mui/material/Card';
import { Box, Card } from '@mui/material';

const Cards = ({
  height,
  abilties,
  weight,
  hp,
  attack,
  defence
}) => {
  return (
    // <Box
    //   sx={{
    //     maxWidth: 300,
    //     maxHeight: 300,
    //     // textAlign: 'center',
    //     marginLeft: 'auto',
    //     marginRight: 'auto'
    //   }}>
    //   <Card variant='outlined'>Card info</Card>
    // </Box>
    <div className='card'>
      size
      <div className='container'>
        <div className='headings'>Height </div>
        <p>{height}</p>
        <div className='headings'>weight</div>
        <p>{weight}</p>
        <div className='headings'>Hp </div>
        <p>{hp}</p>
      </div>
    </div>
  );
};

export default Cards;

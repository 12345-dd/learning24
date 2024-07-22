import { Rating } from '@mui/material';
import React, { useState } from 'react'

export const RatingComponent = () => {
    const [value, setvalue] = useState();

    const ratingMessage = (value) => {
      switch (value) {
        case 1:
          return 'Very Bad';
        case 2:
          return 'Bad';
        case 3:
          return 'Good';
        case 4:
          return 'Very Good';
        case 5:
          return 'Excellent';
        default:
          return 'Rate Us';
      }
    };
  return (
    <div style={{padding:"20px"}}>
        <h1>Rating Component</h1>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setvalue(newValue);
        }}
        />
        <p>{ratingMessage(value)}</p>
  </div>
  )
}

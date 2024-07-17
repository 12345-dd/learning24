import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'

import React, { useState } from 'react'

export const ButtonComponent = () => {
    const [isLoading, setisLoading] = useState(true);

    setTimeout(()=>{
        setisLoading(false);
    },3000);
  return (
    <div>
        <h1>Material UI</h1>
        <div>
            <Button variant='contained'>Hello</Button>
            <Button variant='text'>Hello</Button>
            <Button variant='outlined' disabled>Hello</Button>
        </div>
        <div>
            <LoadingButton loading={isLoading}>Loading</LoadingButton>
        </div>
    </div>
  )
}

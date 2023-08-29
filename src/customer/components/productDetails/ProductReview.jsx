import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReview = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                </Box>
            </Grid>
        </Grid>

        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Sekou</p>
                    <p className='opacity-70'>August 29, 2023</p>
                </div>
            </div>
            <Rating value={4.4} name='full-rating' readOnly precision={.5}/>
            <p>The Basic Tee 6-Pack allows you to fully 
                express your vibrant personality with three grayscale options.
                </p>
        </Grid>
    </div>
  )
}

export default ProductReview
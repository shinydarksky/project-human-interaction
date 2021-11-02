import { Grid } from '@material-ui/core'
import React from 'react'

export default function MainImage({ src }) {
    return (
        <Grid >
            <img 
                width="100%"
                src={src}
                style={{  borderRadius: '10px',maxWidth:'600px',maxHeight:'300px' }}
                alt={src}
            />
        </Grid>
    )
}

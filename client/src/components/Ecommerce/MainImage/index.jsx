import { Grid } from '@material-ui/core'
import React from 'react'

export default function MainImage({ src }) {
    return (
        <Grid >
            <img
                width="100%"
                src={src}
                style={{ border: 'solid 10px #eee', borderRadius: '10px',maxWidth:'400px',maxHeight:'300px' }}
                alt={src}
            />
        </Grid>
    )
}

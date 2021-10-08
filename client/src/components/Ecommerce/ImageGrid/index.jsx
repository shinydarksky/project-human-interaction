import React from 'react'
import { Grid } from '@material-ui/core'
export default function ImageGrid({ images, onSelection }) {
    return (
        <Grid item container direction="row" sm={12} justifyContent="center" alignItems="center" >
            {images.map((image, idx) => {
                return (
                    <Grid item sm={3} xs={2} key={idx} >
                        <img
                            width="100%"
                            src={image}
                            alt={image}
                            style={{ border: 'solid 5px #eee', borderRadius: '5px'}}
                            onClick={() => onSelection(idx)}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

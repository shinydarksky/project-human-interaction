import { Divider, Grid, Typography,Box } from '@material-ui/core'
import React from 'react'


export default function InforImage() {
    return (
        <div>
            <Grid container direction="column" style={{height:"100%"}}>
                <Typography variant="subtitle1">{'Cái gì đó'}</Typography>
                <Divider/>
                <Box>
                    <Typography variant="h5">{'Tên tiếng việt (Tên khoa học )'}</Typography>
                    <Typography variant="subtitle1">{"Mô tả tản sản phẩm"}</Typography>
                    <Typography variant="subtitle1">{"Mô tả tản sản phẩm"}</Typography>
                    <Typography variant="subtitle1">{"Mô tả tản sản phẩm"}</Typography>
                    <Typography variant="subtitle1">{"Mô tả tản sản phẩm"}</Typography>
                    <Typography variant="subtitle1">{"Mô tả tản sản phẩm"}</Typography>
                    <Typography variant="subtitle1">{"Mô tả tản sản phẩm"}</Typography>
                    
                </Box>
            </Grid>
        </div>
    )
}

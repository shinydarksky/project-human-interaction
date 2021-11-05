import { Divider, Grid, Typography, Box } from '@material-ui/core'
import React from 'react'


export default function InforImage({ data, name }) {
    let ten_dv = ''
    let mo_ta = ''
    let dia_diem = ''
    if (data) {
        ten_dv = data.ten_dv
        mo_ta = data.mo_ta
        dia_diem = data.dia_diem
    }

    return (
        <div>
            <Grid container direction="column" style={{ height: "100%" }}>
                    
                <Typography variant="subtitle1">{'Thuộc họ: ' + name}</Typography>
                <Divider />
                <Box>
                    <Typography variant="h5">{`${ten_dv}`}</Typography>
                    <Divider />
                    <Typography variant="subtitle1">{`Mô tả: ${mo_ta}`}</Typography>
                    <Divider />
                    <Typography variant="subtitle1">{`Địa điểm sinh sống: ${dia_diem}`}</Typography>
                </Box>
            </Grid>
        </div>
    )
}

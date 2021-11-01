import { Divider, Grid, Typography,Box } from '@material-ui/core'
import React from 'react'


export default function InforImage({data}) {
    let ten_dv = ''
    let mo_ta = ''
    let dia_diem = ''
    if(data){
         ten_dv = data.ten_dv
         mo_ta = data.mo_ta
         dia_diem = data.dia_diem
    }
    return (
        <div>
            <Grid container direction="column" style={{height:"100%"}}>
                <Typography variant="subtitle1">{'Thuộc họ: '}</Typography>
                <Divider/>
                <Box>
                    <Typography variant="h5">{`Tên con vật ${ten_dv}`}</Typography>
                    <Typography variant="subtitle1">{`Mô tả: ${mo_ta}`}</Typography>
                    <Typography variant="subtitle1">{`Địa điểm sinh sống: ${dia_diem}`}</Typography>
                </Box>
            </Grid>
        </div>
    )
}

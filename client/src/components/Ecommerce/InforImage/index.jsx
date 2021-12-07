import { Divider, Grid, Typography, Box } from '@material-ui/core'
import React from 'react'


export default function InforImage({ data, familyAnimal }) {
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
            <Grid className="" container direction="column" style={{ height: "100%" }}>
                    
                <Box>
                <Typography variant="subtitle1"><span className="pb-4">Thuộc họ:</span> {familyAnimal.ten_ho}</Typography>
                {/* <Typography variant="subtitle1">{`${familyAnimal.mo_ta}`}</Typography> */}
                </Box>
                <Divider />
                <Box>
                    <Typography variant="h5" style={{padding:10}}>{`${ten_dv}`}</Typography>
                    <Divider />
                    <Typography variant="subtitle1"><span className="pb-4">Mô tả:</span>{` ${mo_ta}`}</Typography>
                    <Divider />
                    <Typography variant="subtitle1"><span className="pb-4">Địa điểm sinh sống: </span>{`${dia_diem}`}</Typography>
                </Box>
            </Grid>
        </div>
    )
}

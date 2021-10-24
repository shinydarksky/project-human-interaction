import React, { useState } from 'react'
import AnimalCard from '../AnimalCard'
import { useSelector } from 'react-redux'
import {    Dialog,
            DialogTitle, 
            DialogActions, 
            DialogContent, 
            TextField,
            Button,
            MenuItem, 
        } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import SearchBar from "material-ui-search-bar"
export default function AnimalBoard() {
    let animals = useSelector(state => state.animals)
    animals = animals.slice(0,12)
    function renderCardList() {
        return animals.map((animal, index) => {
            return (
                <div className="col-6 col-sm-4 col-md-2 grid-layout__column" key={index}>
                    <AnimalCard animal={animal} isadmin={true}/>
                </div>
            )
        })
    }
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
    ];

    const [currency, setCurrency] = React.useState('USD');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };


    return (
        <div >
            <div className="title">
                <h3>Quản lý danh sách động vật</h3>
            </div>
            <div className="gp-btn" >
                <button onClick={handleClickOpen} style={{float:"left"}}>Thêm</button>
                <SearchBar 
                    style={{
                        margin: '0 auto',
                        maxWidth: 1000
                    }}
                    placeholder="Tìm kiếm động vật"
                />
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Thêm động vật</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tên động vật"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Mô tả"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        minRows={1}
                    />
                    <TextField
                        margin="dense"
                        id="address"
                        label="Địa điểm"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="species"
                        select
                        label="Mã Họ động vật"
                        value={currency}
                        onChange={handleChange}
                        variant="standard"
                        fullWidth
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                    ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleClose}>Thêm</Button>
                </DialogActions>
            </Dialog>
            <div className="grid-layout">
                <div className="container">
                    <div className="row">{renderCardList()}</div>
                </div>
                <Pagination count={10} showFirstButton showLastButton />
            </div>
        </div>
    )
}

import React from 'react';
import { TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@material-ui/core';

export default function AnimalSpecies() {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
    createData(1, "huygggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg", 6.0, 24, 4.0),
    createData(2, 237, 9.0, 37, 4.3),
    createData(3, 262, 16.0, 24, 6.0),
    createData(4, 305, 3.7, 67, 4.3),
    createData(5, 356, 16.0, 49, 3.9),
    ];
    return (
        <div>
            <div className="title">
                <h3>Quản lý danh sách họ động vật</h3>
            </div>
            <TextField id="demo-helper-text-misaligned-no-helper" label="Nhập họ động vật" />
            <div className="gp-btn">
                <button>Thêm</button>
            </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell >Họ động vật</TableCell>
            <TableCell ></TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >
                  <Button variant="outlined" color="primary">Sửa</Button>
              </TableCell>
              <TableCell >
              <Button variant="outlined" color="secondary">Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

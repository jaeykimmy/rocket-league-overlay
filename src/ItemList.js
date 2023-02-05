import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { hardcodeddata } from "./hardcodeddata";
const useStyles = makeStyles({
  tableRow: {
    height: "20px",
    padding: 0,
  },
});
export default function ItemList({ items }) {
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    setData(items);
  }, [items]);

  const handleClick = async (id, sold) => {
    try {
      const res = await axios.patch(`http://localhost:8080/items/${id}`, {
        sold: sold,
      });
      setData(
        data.map((item) => (item.id === id ? { ...item, sold: sold } : item))
      );
    } catch (err) {
      console.error(err);
    }
  };
  const sortedData = [...data].sort((a, b) => b.price - a.price);
  function capitalizeEachWord(str) {
    str = str.trim();
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  console.log(capitalizeEachWord("octane"));
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Color</TableCell>
            {sortedData.length ? (
              <TableCell align="right">Sold</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.length
            ? sortedData.map((item, index) => (
                <TableRow key={index} className={classes.tableRow}>
                  <TableCell component="th" scope="row">
                    {capitalizeEachWord(item.name)}
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    {capitalizeEachWord(item.color)}
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleClick(item.id, !item.sold)}>
                      {item.sold ? "Not Sold" : "Sold"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : hardcodeddata.map((item, index) => (
                <TableRow key={index} className={classes.tableRow}>
                  <TableCell component="th" scope="row">
                    {capitalizeEachWord(item.name)}
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    {capitalizeEachWord(item.color)}
                  </TableCell>
                  l
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

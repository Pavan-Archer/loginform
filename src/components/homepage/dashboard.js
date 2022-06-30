import React from "react";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableRow } from "@mui/material";
import Paper from "@mui/material";
import { Button, Container, Tab } from "@mui/material"
import { Link } from "react-router-dom";

// import { getUsers, deleteUser } from "../service/api";


const StyledTable = styled(Table)`
  width: 80%;
  margin: auto,
`;

const THead = styled(TableRow)`
 background: #21a26fd1;
 & > th {
    color: #fff;
 }
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Dashboard = () => {
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const getAllUsers = async () => {
//     let response = await getUsers();
//     setUsers(response.data);
//   };

//   const deleteUserDetails = async (id) => {
//     await deleteUser(id);
//     getAllUsers();
//   };

    return (
        <Container>
            <TableContainer>
            <StyledTable>
            <TableHead>
            <THead>
            <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </THead>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  {/* <TableCell>{user._id}</TableCell> */}
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                      {/* <Button variant="contained" style= {{ background: "#49b389", marginRight:10 }} component= {Link} to ={`/edit/${user._id}`}>Edit</Button>
                      <Button variant="contained" style= {{ background: "#1daedf", marginRight:10 }} onClick={() => deleteUserDetails(user._id)} >Delete</Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </StyledTable>
            </TableContainer>
        </Container>
    );
};

export default Dashboard;
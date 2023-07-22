/* eslint-disable no-undef */
import { styled } from 'styled-components';
import Form from "./componete/form.js"
import GlobalStyle from './style/global.js';
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Grid from './componete/grid.js';
import {  useEffect, useState } from 'react';
import axios from "axios";

const Container = styled.div`


 width : 100%;
 max-width : 800;
 margin-top : 20px;
 flex-direction :column;
 align-items: center;
 gap: 10px

`
const Title = styled.h2`
    

`;


function App() {
  const [user, setUsers] = useState([]);

  const getUsers = async () => {

    const users = await axios.get("http://localhost:3001").then(res => setUsers(res.data.sort((a ,b) =>(a.user_name > b.nome ? 1 : -1))))


  }

  useEffect(() => {
    getUsers();
  }, [setUsers])


  return (
    <>
      <Container>

        <Title>Users</Title>
        <Form />
        <Grid users={user} />
      </Container>


      <ToastContainer autoClose={3003} position={toast.POSITION.BUTTON_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;

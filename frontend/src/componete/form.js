import React, { useRef } from "react";
import styled from 'styled-components'

const FormContainer = styled.form`

    display: flex;
    align-items : flex-end;
    gap : 10px;
    flex-wrap: wrap;
    background-color: cadetblue;
    padding: 20px;
    block-size: 0px 0px 5px white;
    border-radius: 80px

`;

const InputArea = styled.div`

display: flex;
flex-direction: column;

`;

const InPut = styled.input`

    width : 120px;
    padding: 0 10px;
    border:1px solid #bbb;
    border-radius: 5px;
    height: 30px

`;

const Lable = styled.label``;



const Button = styled.button`

padding: 6px;
cursor: pointer;
border-radius:5px;
border: none;
background-color: #2c73d2;
color: white;
height: 31px;

`;

const Form = () => {

    const ref = useRef()
    console.log(ref)
    return (

        <FormContainer ref = {ref}>
            <InputArea>
                <Lable>Nome</Lable>
                <InPut name="name" />
            </InputArea>
            <InputArea>
                <Lable>Email</Lable>
                <InPut name="email" type="email" />
            </InputArea>
            <InputArea>
                <Lable>Fone</Lable>
                <InPut name="fone" />
            </InputArea>
            <Button type="submit">Confirm</Button>
        </FormContainer>
    );
};


export default Form
import React from "react";
import styled from 'styled-components'


export const Table = styled.table`
    width: 100%;
    background-color:#fff;
    padding: 20px;
    box-shadow: 0px 0px 5px;
    max-width:800px;
    margin:20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`

    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display : none"}
    }
        
    

`;

export const FaEdit = styled.fe

const Td = styled.td`
padding-top: 15px;
text-align  :${(props) => (props.alignCenter ? "center" : "start")};
width:${(props) => props.width ? props.width : "auto"};

@media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display : none"}
    
}

`;

export const Tbody = styled.tbody``


const Grid = ({users}) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users?.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.user_name}</Td>
                        <Td width="30%">{item.mail}</Td>
                        <Td width="30%" onlyWeb>
                            {item.fone}
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid
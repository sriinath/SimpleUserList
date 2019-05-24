import styled from 'styled-components'

const StyledTable = styled.table `
    border: 1px solid #999;
    width: 600px;
    margin: auto;
    text-align: center;
`
const StyledTableHead = styled.thead`
    background-color: #6d7ae0;
    color: #eeeef5;
    text-transform: uppercase
`
const StyledTableBody = styled.tbody`
    background-color: #fff;
    color: #827d7d;
    font-size: 18px;
    font-family: sans-serif;
`
const StyledEl = styled.td`
    padding: 10px;
`
const StyledHeaderEl = styled.th`
padding: 10px;
`
export { StyledTable, StyledTableHead, StyledTableBody, StyledEl, StyledHeaderEl }
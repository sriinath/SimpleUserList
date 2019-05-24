import styled from 'styled-components'

const Input = styled.input`
    display: block;
    margin: auto;
    width: 45%;
    -webkit-appearance: none;
    border: 0px;
    border-bottom: 2px solid #777;
    padding: 15px;
    margin: 10px auto;
    &[type=submit] {
        background-color: #27ae60;
        border-radius: 40px;
        color: #fff;
        cursor: pointer;
        margin-top: 40px;
        &:hover {
            background-color: #fff;
            border: 2px solid #27ae60;
            color: #27ae60;        
        }
    }
`

export { Input }
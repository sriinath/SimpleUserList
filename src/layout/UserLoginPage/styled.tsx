import styled from 'styled-components'

const FormWrapper = styled.div`
    width: 500px;
    height: auto;
    margin: auto;
    background-color: #fff;
    text-align: center;
    &:hover {
        box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
        transition: .6s box-shadow;
    }
`

export { FormWrapper }
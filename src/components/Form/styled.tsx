import styled from 'styled-components'

const StyledForm = styled.form `
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #a1a1a1;
`
const InputWrapper = styled.div`
`
const ErrorEl = styled.div`
    padding: 5px;
    text-transform: capitalize;
    color: #555;
    font-size: 16px;
    font-family: sans-serif;
    color: #e01919;
`

export { StyledForm, InputWrapper, ErrorEl }
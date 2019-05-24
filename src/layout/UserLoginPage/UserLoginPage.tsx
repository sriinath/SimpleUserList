import * as React from 'react'
import { Form } from '../../components'
import { FormWrapper } from './styled'

const FormSubmit = (userName: string, password: string) => {
    if(userName && password) {
        if(userName === 'hruday@gmail.com' && password === 'hruday123') {
            location.href = '/dashboard'
        }
        else {
            return 'UserName / Password is not valid'
        }
    }
}
const UserLoginPage = () => {
    return (<FormWrapper>
        <Form onSubmit={FormSubmit} />
    </FormWrapper>)
}

export { UserLoginPage }
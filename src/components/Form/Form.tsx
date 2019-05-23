import * as React from 'react'
import { StyledForm } from './styled'
import { Input } from '../'
import { FormProps } from '../../types'
import { useState } from 'react'

const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    return e.currentTarget.value
}

const Form = (props: FormProps) => {
    const { onSubmit } = props
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    return <StyledForm onSubmit={onSubmit}>
        <Input
            type='email'
            value={userName}
            placeholder='Enter User Name'
            onInput={(e) => setUserName(onInput(e))}
        />
        <Input
            type='password'
            value={password}
            placeholder='Type in Password'
            onInput={(e) => setPassword(onInput(e))}
        />
        <Input
            type='submit'
            value='Login'
        />
    </StyledForm>
}

export { Form }
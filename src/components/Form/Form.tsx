import * as React from 'react'
import {
    StyledForm,
    InputWrapper,
    ErrorEl
} from './styled'
import { Input } from '../'
import { FormProps } from '../../types'
import { useState } from 'react'

const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    return e.currentTarget.value
}
const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const curEl = e.currentTarget
    const val = curEl.value || ''
    const inputType = curEl.getAttribute('type')
    const pattern = curEl.getAttribute('pattern')
    if(inputType == 'password') {
        let valueLen = val.length
        if(!valueLen) {
            return 'password cannot be empty.'
        }
        else if(valueLen < 8 || valueLen > 15) {
            return 'password must be between 8 and 15 characters'
        }
    }
    else if(pattern) {
        const regex = new RegExp(pattern)
        if(!regex.test(val)) {
            return 'please enter a valid username'
        }
    }
    return ''
}

const Form = (props: FormProps) => {
    const { onSubmit } = props
    const [ userName, setUserName ] = useState({
        name: '',
        error: ''
    })
    const [ password, setPassword ] = useState({
        password: '',
        error: ''
    })
    const [ FormMessage, setFormMessage ] = useState('')
    return (
        <StyledForm
            onSubmit={e => {
                e.preventDefault()
                userName.error === '' && 
                password.error === '' && 
                onSubmit ? setFormMessage(onSubmit(userName.name, password.password)) : null}
            }
        >
            { FormMessage !== '' ? <ErrorEl>{FormMessage}</ErrorEl> : null }
            <InputWrapper>
                <Input
                    type='email'
                    pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
                    value={userName.name}
                    placeholder='Enter User Name'
                    onInput={(e) => setUserName({ 'name': onInput(e), error: userName.error })}
                    onBlur={(e) => setUserName({ 'name': userName.name, error: onBlur(e) })}
                    onFocus={(e) => setUserName({ 'name': userName.name, error: '' })}
                />
                <ErrorEl>{userName.error}</ErrorEl>
            </InputWrapper>
            <InputWrapper>
                <Input
                    type='password'
                    value={password.password}
                    placeholder='Type in Password'
                    onInput={(e) => setPassword({ 'password': onInput(e), error: password.error })}
                    onBlur={(e) => setPassword({ 'password': password.password, error: onBlur(e) })}
                    onFocus={(e) => setPassword({ 'password': password.password, error: '' })}
                />
                <ErrorEl>{password.error}</ErrorEl>
            </InputWrapper>
            <InputWrapper>
                <Input
                    type='submit'
                    value='Login'
                />
            </InputWrapper>
        </StyledForm>
    )
}

export { Form }
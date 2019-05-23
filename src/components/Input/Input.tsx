import * as React from 'react'
import { Input as StyledInput } from './styled'
import {
    InputProps
} from '../../types/Input'

const Input = (props: InputProps) => {
    const {
        value,
        placeholder,
        type,
        pattern,
        onInput,
        onBlur,
        onFocus
    } = props
    return <StyledInput
        value={value}
        placeholder={placeholder || ''}
        type={type || 'text'}
        pattern={pattern || null}
        onChange={onInput || null}
        onFocus={onFocus || null}
        onBlur={onBlur || null}
    />
}

export { Input }
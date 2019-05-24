import * as React from 'react'

interface InputProps extends InputEventProps {
    value: string
    placeholder?: string
    type?: string
    pattern?: string
    ref?: any
}
interface InputEventProps {
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FormEvent<HTMLInputElement>) => void
}

export {
    InputProps,
    InputEventProps
}
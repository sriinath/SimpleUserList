import * as React from 'react'
import { StyledTable } from './styled'
import { UserDataProps } from '../../types'

const Table = (props: { userData: UserDataProps[] }) => {
    const { userData } = props
    const keys = [
        'id',
        'name',
        'age',
        'gender',
        'email',
        'phoneNo'
    ]

    return <StyledTable>
        <thead>
            {keys.map((key: string, index: number) => <th key={index}>{key}</th>)}
        </thead>
        <tbody>
            {
                userData.length ? userData.map((user: any, index: number) => (<tr key={index}>
                        {keys.map((key: string, index: number) => <td key={index}>{user[key] || ''}</td>)}
                    </tr>)
                ) : null
            }
        </tbody>
    </StyledTable>
}

export { Table }
import * as React from 'react'
import { StyledTable, StyledTableHead, StyledTableBody,StyledEl, StyledHeaderEl } from './styled'
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
        <StyledTableHead>
            <tr>
                {keys.map((key: string, index: number) => <StyledHeaderEl key={index}>{key}</StyledHeaderEl>)}
            </tr>
        </StyledTableHead>
        <StyledTableBody>
            {
                userData.length ? userData.map((user: any, index: number) => (<tr key={index}>
                        {keys.map((key: string, index: number) => <StyledEl key={index}>{user[key] || ''}</StyledEl>)}
                    </tr>)
                ) : null
            }
        </StyledTableBody>
    </StyledTable>
}

export { Table }
import React from 'react'

type User = {
    name: string
}
type Props = {
    title: string,
    isActive?: boolean
    // status?: 'loading' | 'loaded',
    // thing?: number,
    // thing2?: string[],
    // thing3?: {},
    // thing4?: {
    //     name: string,
    // },
    // func: () => void,
    // user: User
}
const Header = ({ title, isActive = true }: Props) => {
    return (
        <>
            <div>{title}</div>
            <div>{isActive}</div>
        </>)
}

export default Header
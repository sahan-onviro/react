import React, { useRef, useState } from 'react'

export const Input = () => {
    const [name, setName] = useState('') //implicit 
    // const [name, setName] = useState<string>('')
    // const [name, setName] = useState<string | undefined>('')

    // const inputRef = useRef<HTMLInputElement>(null!)// null! makes readonly
    const inputRef = useRef<HTMLInputElement>(null)
    // if (inputRef && inputRef.current) {
    //     console.log('ref', inputRef.current.value)
    // }
    console.log('ref', inputRef?.current?.value)
    return (
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
    )
}

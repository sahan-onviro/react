import React, { useEffect, useRef, useState } from 'react'

const Password = () => {
    const [password, setPassword] = useState('');
    const [passRange, setPassRange] = useState(8);
    const [checkNumber, setCheckNumber] = useState(false)
    const [checkSymbol, setCheckSymbol] = useState(false)
    const generatePass = (passRange) => {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const numbers = "0123456789"
        const symbols = "!@#$%^&"
        if (checkNumber) {
            chars += numbers
        }
        if (checkSymbol) {
            chars += symbols;
        }
        let result = '';
        for (let i = 0; i < passRange; i++) {
            result += chars.charAt((Math.random() * chars.length));
        }
        setPassword(result);
        return result
    }
    useEffect(() => {
        generatePass(passRange);
    }, [passRange, checkNumber, checkSymbol])
    return (
        <section className='flex justify-center items-center h-[100vh]'>
            <div className="form-box p-5 bg-slate-700 text-white">
                <form action="">
                    <div className="form-group">
                        <input type="text" value={password} className='text-black' />
                        <button type='button' className='bg-slate-400 px-3 py-2 rounded-2xl'>Copy</button>
                    </div>
                    <div className='form-group flex gap-3 my-4'>
                        <div className="form-group">
                            <label htmlFor="" className='form-label'>Password Size</label>
                            <input type="range" id="password_size" name="password_size" min="8" max="20" step={1} defaultValue={8} onChange={(e) => setPassRange(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type='checkbox' onClick={() => setCheckNumber(on => !on)} />
                            <label htmlFor="" className='form-label'>Numbers</label>
                        </div>
                        <div className="form-group">
                            <input type='checkbox' onClick={() => setCheckSymbol(on => !on)} />
                            <label htmlFor="" className='form-label'>Symbols</label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Password
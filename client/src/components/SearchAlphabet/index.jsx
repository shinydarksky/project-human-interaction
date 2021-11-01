import React,{ useState } from 'react'
import './style.scss'
export default function SearchAlphabet({onClickLetter}) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const [letter,setLetter] = useState('')
    return (
        <div className="container main-alpha">
            <div className="title">
                Tìm kiếm bằng chữ cái: {letter && <>
                    <span>"{letter}"</span>
                    <button onClick={()=>{
                        onClickLetter('')
                        setLetter('')
                    }}>xóa</button>
                </>}

            </div>
            <div className="alpha">
                {alphabet.map((item,idx) => {
                    return <div className="alpha-item" key={idx} onClick={()=>{
                        onClickLetter(item)
                        setLetter(item)
                    }}>{item}</div>
                })}
            </div>
        </div>
    )
}

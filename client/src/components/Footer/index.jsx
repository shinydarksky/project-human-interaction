import React, {useEffect, useState} from 'react'
import './style.scss'
export default function Footer() {
    const [showMoveTop,setShowMoveTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    function handleScroll(){
        let scrollTop = window.scrollY
        if(scrollTop> (document.body.scrollHeight/3)){
            setShowMoveTop(true)
        }
        else{
            setShowMoveTop(false)
        }
            
    }

    function handleMoveTop(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="footer">
            Nội dung chân trang ứng dụng
            {showMoveTop &&  <button id="myBtn" title="Go to top" onClick={handleMoveTop}>^</button>}
        </div>
    )
}

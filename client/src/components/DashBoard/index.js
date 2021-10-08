import React from 'react'
import AnimalBoard from './AnimalBoard'
import './style.scss'
export default function DashBoard({boardType}) {
    return (
        <div>
            {boardType == 0 && <AnimalBoard />}
        </div>
    )
}

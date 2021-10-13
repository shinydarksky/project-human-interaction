import React from 'react'
import AnimalBoard from './AnimalBoard'
import AnimalSpecies from './AnimalSpecies'
import Setting from './Setting'
import './style.scss'
export default function DashBoard({boardType}) {
    return (
        <div>
            {boardType === 0 && <AnimalBoard />}
            {boardType === 1 && <AnimalSpecies />}
            {boardType === 2 && <Setting />}
        </div>
    )
}

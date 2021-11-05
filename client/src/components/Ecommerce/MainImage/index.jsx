import React from 'react'

export default function MainImage({ src }) {
    return (
            <img 
                width="100%"
                src={src}
                alt={src}
            />
    )
}

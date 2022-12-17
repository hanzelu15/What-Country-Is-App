import React from 'react'
import { CountryCardComponent } from '../CountryCardComponent'

export const GridComponent = ({ result }) => {
    return (
        <div className='w-full grid-container h-full p-5 '>
            {
                result.map((item, index) => 
                    <CountryCardComponent key={index} item={item}/>
                )
            }
        </div>
    )
}

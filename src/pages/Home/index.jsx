import React from 'react'
import { MenuButtonComponent } from '../../components/MenuButtonComponent'

export const Home = () => {

    return (
        <div className=" w-full h-full py-16 bg-no-repeat bg-top bg-contain">

            <img className='w-[250px] m-auto' src="src/assets/logoImage.svg" alt="logo" />
            <img className='w-[100px] m-auto' src="src/assets/worldImage.svg" alt="logo" />
            <div className='w-4/5 mt-16 flex flex-col justify-between m-auto'>
                <MenuButtonComponent url="/PlayGame" text="Play" />
                <MenuButtonComponent url="/search" text="Learn" />
            </div>

        </div>
    )
}

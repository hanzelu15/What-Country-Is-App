import React from 'react'
import { MenuButtonComponent } from '../../components/MenuButtonComponent'

export const Home = () => {
    return (
        <div className=" bg-white w-full h-full py-16 bg-[url('src/assets/HomeBackground.png')] bg-no-repeat bg-top bg-contain">

            <img className='w-[250px] m-auto' src="src/assets/logoImage.svg" alt="logo" />
            <img className='w-[100px] m-auto' src="src/assets/worldImage.svg" alt="logo" />
            <div className='w-4/5 mt-16 flex flex-col justify-between m-auto items-center'>
                <MenuButtonComponent url="/" text="Play" />
                <MenuButtonComponent url="/" text="Learn" />

            </div>

        </div>
    )
}

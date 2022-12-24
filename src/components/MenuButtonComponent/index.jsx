import React from 'react'
import { Link } from "react-router-dom";

export const MenuButtonComponent = ({ url, text }) => {
    return (
        <Link to={url} className='w-full my-5  py-3 px-5 text-gray-900 text-2xl text-center border border-main-green rounded-3xl duration-300 hover:bg-light-green'>{text}</Link>
    )
}

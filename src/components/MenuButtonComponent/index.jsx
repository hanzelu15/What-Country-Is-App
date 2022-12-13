import React from 'react'
import { Link } from "react-router-dom";

export const MenuButtonComponent = ({ url, text }) => {
    return (
        <Link to={url} className='w-full my-5 bg-emerald-600 py-3 px-5 text-white text-2xl text-center'>{text}</Link>
    )
}

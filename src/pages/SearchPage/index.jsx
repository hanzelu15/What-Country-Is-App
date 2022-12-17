import React, { useState } from 'react'
import { GridComponent } from '../../components/GridComponent';
import { getCountryByName } from '../../services/countryServices';

export const SearchPage = () => {

    const [result, setResult] = useState([]);
    const [loading, setloading] = useState(false)
    const [text, settext] = useState("");

    const handleChange = async (event) => {
        setloading(true);
        settext(event.target.value);
        const searchResult = await getCountryByName(event.target.value);
        setResult(searchResult);
        setloading(false);
    }


    return (
        <div>
            <form className='p-8'>
                <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Name to Seach:
                </label>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-red-500 block w-full p-2.5  ' type="text" value={text} onChange={handleChange} />
            </form>
            {!loading && <GridComponent result={result}></GridComponent>}
        </div>
    )
}

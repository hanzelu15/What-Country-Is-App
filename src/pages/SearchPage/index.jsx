import React, { useEffect, useState } from 'react'
import { GridComponent } from '../../components/GridComponent';
import { getAllCountries, getCountryByName } from '../../services/countryServices';

export const SearchPage = () => {

    const [result, setResult] = useState([]);
    const [loading, setloading] = useState(true)
    const [text, settext] = useState("");

    useEffect(() => {

        initData();


    }, [])

    const initData = async ()=>{
        const data = await getAllCountries();
        await setResult(data)
        setloading(false);
    }
    const handleChange = async (e) => {
        setloading(true);
        const text = e.target.value;
        settext(text);
        const searchResult = (text.length > 0) ? await getCountryByName(text) : await getAllCountries();
        setResult(searchResult);
        setloading(false);
    }


    return (
        <div>
            <form className='p-8'>

                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-red-500 block w-full p-2.5  ' placeholder='Search' type="text" value={text} onChange={handleChange} />
            </form>
            {!loading && <GridComponent result={result}></GridComponent>}
            { !loading && result.length == 0 && <p className='w-full m-auto text-center'> No results found</p>}
        </div>
    )
}

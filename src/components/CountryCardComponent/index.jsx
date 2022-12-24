import React from 'react'

export const CountryCardComponent = ({ item }) => {
  return (
    <div className=' bg-slate-50 min-h-[400px] max-w-sm rounded-md overflow-hidden'>
      <div className={`h-[250px] md:h-[180px] w-full`} >
        <img className='h-full w-full m-auto' src={item.flags.png} alt={item.name.common} />
      </div>
      <div className='h-3/5 p-4 flex flex-col justify-start'>
        <p className='font-bold text-xl mb-5'>{item.name.common}</p>
        <div className='h-20 overflow-y-auto'>
          <p className='font-bold'>Capital:</p>
          <p className='ml-5'>
            {Object.values(item.capital).reverse().map((capital, index) => {
              if (index > 0)
                return <span className='' key={index}>, {capital}</span>
              return <span key={index}> {capital}</span>
            })}
          </p>
        </div>
        <div className='h-20 overflow-y-auto'>
          <p className='font-bold'>Languages:</p>
          <p className='ml-5'>
            {Object.values(item.languages).reverse().map((lang, index) => {
              if (index > 0)
                return <span className='' key={index}>, {lang}</span>
              return <span key={index}> {lang}</span>
            })}
          </p>

        </div>
        <p className='font-bold'>Population: <span className='font-normal'>{item.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span> </p>
      </div>
    </div>
  )
}

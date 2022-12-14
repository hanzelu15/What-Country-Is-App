import React from 'react'

export const ScoreComponent = ({score}) => {

  let colors = ["bg-slate-300", "bg-green-500","bg-red-500"];
  return (
    <div className='w-full flex justify-between gap-x-1 px-3'>
    {
      score.map((item, index) =>
        <div key={index} className={`${colors[item]} grow h-[10px] rounded-md duration-700`}></div>
      )
    }
  </div>
  )
}

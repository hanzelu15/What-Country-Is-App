import React, { useContext, useState } from 'react'

export const QuestionComponent = ({game, setgame, score, setscore}) => {
  const [item, setitem] = useState(game.items[game.turn]);
  const [disableButton, setdisableButton] = useState(false);
  const [printCorrect, setprintCorrect] = useState(false);

  const responseHandler = (e) => {
    setdisableButton(true);
    let newScore= score;
    newScore[game.turn]= (item.name == e)? 1:2;
    if (item.name !== e) setprintCorrect(true);
    setscore(newScore);

    setTimeout(() => {
      setgame({...game, turn: ++game.turn});
      setitem(game.items[game.turn]);
      setdisableButton(false);
      setprintCorrect(false);
    }, 1000);
  }

  return (
    <div className='w-full'>
      <div className='h-52 sm:h-52 md:h-72 mb-3 sm:mb-8 flex'>
        <img src={item.flag} alt="imagen" className='max-h-full border m-auto' />
      </div>
      <div className='flex flex-col items-center'>
        {
          item.options.map((option, index) => {
            let correct = (option == item.name) ? true : false;
            let color = (correct == true) ? "bg-green-500" : "bg-red-500";
            return <button key={index} disabled={disableButton} value={option} className={`${disableButton && printCorrect ? color : disableButton && correct ? "bg-green-500" : "bg-main-grey"} ${disableButton && !correct ? "opacity-50" : ""} w-5/6 py-4 my-2 rounded-full text-ellipsis duration-500`} onClick={e => responseHandler(e.target.value)}> {option} </button>
          }
          )}
      </div>
    </div>
  )
}

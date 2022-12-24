import React from 'react'
import { useLocation } from 'react-router-dom';
import { MenuButtonComponent } from '../../components/MenuButtonComponent';
import { ScoreComponent } from '../../components/ScoreComponent';

export const GameResultPage = () => {

  const { state } = useLocation();
  const corrects = state.score.filter(point => {
    return (point == 1);
  }).length;

  let image = "";
  if (corrects < 6)
    image = "/src/assets/Sad_face_Flatline.svg"
  else if (corrects > 6)
    image = "/src/assets/Happy_face_Flatline.svg"
  else
    image = "/src/assets/Neutral_face_Flatline.svg"
  return (
    <div className='flex flex-col justify-around gap-8 items-center h-full py-4'>
      <ScoreComponent score={state.score} />
      <h4 className='text-white text-center text-4xl'>Result: {corrects}/12</h4>
      <img className='sm-w-full md-w-2/3' src={image} alt="result" />
      <div className='flex flex-col justify-between w-4/6 '>
        <MenuButtonComponent url={'/PlayGame'} text={"Play Again"} />
        <MenuButtonComponent url={'/'} text={"Home"} />
      </div> 

    </div>
  )
}

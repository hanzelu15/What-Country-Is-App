import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useGame } from '../../hooks/GameHook'
import { QuestionComponent } from '../../components/QuestionComponent'
import { ScoreComponent } from '../../components/ScoreComponent';
import { Navigate, useNavigate } from "react-router-dom";

export const PlayPage = () => {

    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const itemsQuantity = 12;
    const [game, setgame] = useState();
    const [score, setscore] = useState(Array(itemsQuantity).fill(0));
    const [loading, setloading] = useState(true);
    useEffect(() => {
        initGame();
    }, [])

    const initGame = async () => {
        setgame(await useGame(itemsQuantity));
        setloading(false);
    }

    const handleExit = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You'll go back to the menu and won't be able to come back!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue game',
            cancelButtonText: 'Yes, back to menu!'
        }).then((result) => {
            if (!result.isConfirmed) 
                navigate("/");
            
        })
    }
    return (
        !loading && (
            <div className='flex flex-col justify-start gap-3 sm:gap-8 h-full items-center py-4'>
                <div className='w-full'>
                    <h4 className='text-main-green text-center text-2xl'>What country is it?</h4>
                    <ScoreComponent score={score} />

                </div>
                {
                    game.turn < itemsQuantity ?
                        <>
                            <QuestionComponent game={game} setgame={setgame} score={score} setscore={setscore} />
                            <div className='w-5/6 flex justify-end'>

                            <button className='bg-red-200 py-1 px-3 w-28 rounded-full self-end mt-2 ' onClick={handleExit}>Exit</button>
                            </div>
                        </>
                        :
                        <Navigate to="/Result" replace={true} state={{score:score}} />
                        // <FinalResultComponent score={score} />
                }
            </div>
        )
    )
}

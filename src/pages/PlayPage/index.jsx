import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useGame } from '../../hooks/GameHook'
import { QuestionComponent } from '../../components/QuestionComponent'
import { ScoreComponent } from '../../components/ScoreComponent';

export const PlayPage = () => {

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
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue',
            cancelButtonText: 'Yes, back to menu!'
        }).then((result) => {
            if (!result.isConfirmed) {
                MySwal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        !loading && (
            <div className='flex flex-col justify-evenly h-full items-center'>
                <h4 className='text-main-green text-center'>Adivina el país de la bandera</h4>
                <ScoreComponent score={score} />
                {
                    game.turn < 12 ? <QuestionComponent game={game} setgame={setgame} score={score} setscore={setscore} />
                    :
                    <p>End</p>
                }
                <div className='w-5/6 flex justify-end'>
                    <button className='bg-red-200 py-2 px-5 rounded-full' onClick={handleExit}>Exit</button>
                </div>
            </div>
        )
    )
}

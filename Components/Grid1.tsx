import { FC, useRef, useState } from "react";

interface Props {
    blueSquaresCount:any
}

const Grid: FC<Props> = ({blueSquaresCount}) => {

    // call back function for event listeners (colors the specific square blue)
    const colorChangeBlue = (event:any) => {
        if (event.path[0].style.backgroundColor != 'blue') {
            blueSquaresCount.current += 1
        }
        event.path[0].style.backgroundColor = 'blue'
        console.log(blueSquaresCount.current)
    }

    //getting all document references and setting event listeners for coloring squares as we pass on them
    if (typeof window !== "undefined") {
        document.querySelector('.bg-gray-300')?.addEventListener('mousedown', (event) => {
            console.log('testouter')
            document.querySelectorAll('.bg-gray-100').forEach((square) => {
                square.addEventListener('mouseover', colorChangeBlue)
            })
            console.log(document.querySelector('.bg-gray-100'))
        })
        document.querySelector('.bg-gray-300')?.addEventListener('mouseup', () => {
            console.log('event listener removed')
            document.querySelectorAll('.bg-gray-100').forEach((square) => {
                square.removeEventListener('mouseover', colorChangeBlue)
            })
        })
        document.querySelectorAll('.bg-gray-100').forEach((square) => {
            square.addEventListener('mousedown', colorChangeBlue)
        })
    }

    //Grid function for rendering the squares
    const renderGrid = (numberOfSquares:number) => {
        let gridSquares:any[] = []
        for (let i = 0; i < numberOfSquares; i++) {
            gridSquares.push(<div className="h-10 w-10 bg-gray-100 rounded hover:scale-125 duration-100 shadow" id={`${i}`} key={i}></div>)
        }
        return (
            <div className="grid rounded bg-gray-300 select-none grid-cols-10 gap-1 p-2">{gridSquares}</div>
        )
    }

    return ( 
            <div className="">
                <div>{blueSquaresCount.current}</div>
                {
                    renderGrid(100)
                }
            </div>
     );
}
 
export default Grid;
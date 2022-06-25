import { FC } from "react";

interface Props {
    
}

const renderGrid = (numberOfSquares:number) => {
    let gridSquares:any[] = []
    for (let i = 0; i < numberOfSquares; i++) {
        gridSquares.push(<div className="h-10 w-10 bg-gray-100 rounded hover:scale-75 duration-100" key={i}></div>)
    }
    return (
        <div className="grid grid-cols-10 gap-2 p-2">{gridSquares}</div>
    )
}
 
const Grid: FC<Props> = () => {
    return ( 
        <div className="bg-gray-500">
                {
                    renderGrid(100)
                }
        </div>
     );
}
 
export default Grid;
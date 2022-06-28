import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import penSvg from '../Assets/Pictures/drive_file_rename_outline_FILL1_wght400_GRAD0_opsz48.svg'
import eraserSvg from '../Assets/Pictures/eraser-svgrepo-com.svg'

interface ToolBarProps {
    redSquaresCount:IRef
    blueSquaresCount:IRef
}

interface IRef {
    current:number
}
 
const ToolBar: FC<ToolBarProps> = ({blueSquaresCount, redSquaresCount}) => {

    console.log(blueSquaresCount)
    const [countGridA, setCountGridA] = useState<number>(0)
    const [countGridB, setCountGridB] = useState<number>(0)

    useEffect(() => {
        // setCountGridA(currCountA => currCountA = blueSquaresCount.current)
        console.log('TESTTESTTESTTESTTEST')
    }, [blueSquaresCount.current, redSquaresCount.current])
    

    return ( 
        <div className="flex gap-3 fixed top-3" onClick={() => setCountGridA(blueSquaresCount.current)}>
            <div className="h-16 rounded-lg flex bg-slate-200 p-[0.30rem]">
                <div className="h-full w-14 flex items-center justify-center rounded-md duration-150 hover:bg-blue-200 hover:cursor-pointer">
                    <div className="h-8 w-8">
                        <Image src={penSvg} width={800} height={800}></Image>
                    </div>
                </div>
                <div className="h-full w-14 flex items-center justify-center rounded-md duration-150 hover:bg-red-200 hover:cursor-pointer">
                    <div className="h-8 w-8">
                        <Image src={eraserSvg} width={800} height={800}></Image>
                    </div>
                </div>
            </div>

            <div className="w-96 h-16 rounded-lg flex bg-slate-200 p-[0.30rem]">
                <div className="w-1/2 flex items-center justify-center">
                    <div>Grid A: {countGridA}</div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <div>Grid B: {countGridB}</div>
                </div>
            </div>
        </div>
     );
}
 
export default ToolBar;
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Grid1 from '../Components/Grid1'
import Grid2 from '../Components/Grid2'
import ToolBar from '../Components/ToolBar'

const Home: NextPage = () => {

  const blueSquaresCount = useRef(0)
  const redSquaresCount = useRef(0)

  return (
    <div className="flex gap-10 min-h-screen items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid1 blueSquaresCount={blueSquaresCount} />
      <Grid2 redSquaresCount={redSquaresCount}/>
      <ToolBar redSquaresCount={redSquaresCount} blueSquaresCount={blueSquaresCount}/>
    </div>
  )
}

export default Home

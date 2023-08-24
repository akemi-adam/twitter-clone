import { FunctionComponent } from 'react'

import LeftBar from './components/LeftBar.tsx'
import MainContent from './components/MainContent.tsx'
import RightBar from './components/RightBar.tsx'

const App: FunctionComponent = () =>
{
  return (
    <>
      <LeftBar/>
      <MainContent/>
      <RightBar/>
    </>
  )
}

export default App

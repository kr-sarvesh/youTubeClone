import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <>
      <div className='flex container mx-auto'>
        <Sidebar />
        <MainContainer />
      </div>
    </>
  )
}

export default Body

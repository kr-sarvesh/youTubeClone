import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <Link to={'/'}>
          <img
            className='h-8 cursor-pointer'
            src={require('../Images/hamburger.png')}
            alt='Hamburger logo'
          />
        </Link>
        <img
          className='h-8 mx-6 cursor-pointer'
          src={require('../Images/youtube.png')}
          alt='Hamburger logo'
        />
      </div>
      <div className='col-span-10'>
        <input
          className='
              border
        border-gray-400
          rounded-l-full
          w-1/2
          py-1
          px-2
          ml-44
       focus:border-blue-500
      '
          placeholder='Search'
          type='text'
        />
        <button
          className='border
         border-gray-400
         py-1
         px-2
          rounded-r-full
         '
        >
          🔍
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          src={require('../Images/user.png')}
          alt='User logo'
        />
      </div>
    </div>
  )
}

export default Header

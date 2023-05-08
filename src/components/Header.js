const Header = () => {
  return (
    <div className='container mx-auto grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          className='h-8'
          src={require('../Images/hamburger.png')}
          alt='Hamburger logo'
        />
        <img
          className='h-8'
          src={require('../Images/youtube.png')}
          alt='Hamburger logo'
        />
      </div>
      <div className='col-span-10'>
        <input type='text' />
        <button>Search</button>
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

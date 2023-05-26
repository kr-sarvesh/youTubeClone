import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useState, useEffect } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  /**
   * searchCache = {
   *  "iphone":["iphone 12","iphone 11","iphone 12 pro max"]
   * }
   * searchQuery = "iphone"
   */

  useEffect(() => {
    console.log(searchQuery)

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchResults()
      }
    }, 200)

    return () => {
      console.log('clear')
      clearTimeout(timer)
    }
  }, [searchQuery])

  // api call
  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const response = await data.json()
    console.log(response)
    setSuggestions(response[1])

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      })
    )
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className=' grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          src={require('../Images/hamburger.png')}
          alt='Hamburger logo'
        />
        <img
          className='h-8 mx-6 cursor-pointer'
          src={require('../Images/youtube.png')}
          alt='Hamburger logo'
        />
      </div>
      <div className='col-span-10'>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className='
              border
        border-gray-400
          rounded-l-full
          w-1/2
          py-1
          px-2
          ml-44
       focus:border-blue-100
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
        <div
          className='fixed ml-[11.3rem] px-2 py-3 rounded-md bg-white w-[35rem] cursor-default
        border border-gray-100
        '
        >
          <ul>
            {showSuggestions &&
              suggestions.map((suggestion) => (
                <li
                  className='hover:bg-gray-100 py-2 px-3 shadow-sm'
                  key={suggestion}
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
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

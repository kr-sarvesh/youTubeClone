import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './utils/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container mx-auto'>
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App

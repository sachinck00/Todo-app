import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
function App() {
  const header = "TODO app";
  return (
    <div className='wrapper'>
     <Navbar header={header} />
     <Body />
    </div>
  )
}

export default App

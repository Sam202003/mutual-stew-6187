import { useSelector } from 'react-redux'
import './App.css'
import MainModal from './Components/MainModal/MainModal'

function App() {
  const { isOpen } = useSelector((store) => store.modal)
  return <div className="App">{isOpen && <MainModal />}</div>
}

export default App

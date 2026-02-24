import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeaderComponent from './components/Contact Us/HeaderComponent'
import FormDetail from './components/Form/FormDetail'

function App() {

  return (
    <div>
      <Navbar />
      <main className='main_container'>
        <HeaderComponent/>
        <FormDetail />
      </main>
    </div>
  )
}

export default App

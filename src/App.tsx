import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/Index'
import { PopupProvider } from './Context/PopupContext'
import { AuthProvider } from './Context/AuthContext'
import CommonPopup from './Components/Common/CommonPopup'
import './Styles/main.scss'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <PopupProvider>
          <AppRouter />
          <CommonPopup />
        </PopupProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

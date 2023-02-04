import './assets/css/themes/themes.css';
import './assets/css/style.css';
import Login from './pages/Login';

export default function App() {
  return (
    <div className='d-flex align-items-center bg-light-green'>
       <main className="container">
      <Login/>
    </main>
    </div>
   
  )
}
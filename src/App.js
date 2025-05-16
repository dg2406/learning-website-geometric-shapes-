import './App.css';
import {Routes,Route} from 'react-router-dom'
import Homepage from './screen/Homepage';
import Quizpage from './screen/Quizpage';
import Register from './screen/register';
import Login from './screen/login';
import AboutPage from './screen/aboutPage';
import CoursePage from './screen/CoursePage';
import ContactPage from './screen/contact';
function App() {
  return (
    <div >
     
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/quiz' element={<Quizpage/>}></Route>
        <Route path='/feedback' element={<AboutPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/coursePage' element={<CoursePage/>}></Route>
        <Route path='/contactPage' element={<ContactPage/>}></Route>

      </Routes>
    </div>
  );
}

export default App;

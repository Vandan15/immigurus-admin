import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import {useState} from 'react';
import PrimaryBtn from './Components/Assets/Buttons/Buttons';
import Login from './Components/Login/Login';
import SideBar from './Components/sidebar/SideBar';
import StudentDashboard from './Components/students/StudentDashboard';
import AddStudent from './Components/students/AddStudent';
import NotFound from './Components/NotFound';
import EditStudent from './Components/students/EditStudent';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
     <Router>
     <div className="App">
     <Routes>
       <Route path="/" element={<Login/>}></Route>
           <Route exact path='/students' element={
             <>
              <div className='component-wrapper'>
                <div className='sidebar-container' style={{width:toggle?'90px':'380px'}}>
                  <SideBar handleToggle={() => setToggle(!toggle)} toggle={toggle}/>
                </div>
                <div className='component-container' style={{width:toggle?'100%':'100%'}}>
                  <StudentDashboard/>
                </div>
              </div>
            </>
           }>
           </Route>
           <Route exact path='/add-student' element={
             <>
              <div className='component-wrapper'>
                <div className='sidebar-container' style={{width:toggle?'5%':'20%'}}>
                  <SideBar handleToggle={() => setToggle(!toggle)} toggle={toggle}/>
                </div>
                <div className='component-container' style={{width:toggle?'100%':'100%'}}>
                  <AddStudent/>
                </div>
              </div>
            </>
           }>
           </Route>
           <Route exact path='/edit-student' element={
             <>
              <div className='component-wrapper'>
                <div className='sidebar-container' style={{width:toggle?'5%':'20%'}}>
                  <SideBar handleToggle={() => setToggle(!toggle)} toggle={toggle}/>
                </div>
                <div className='component-container' style={{width:toggle?'100%':'100%'}}>
                  <EditStudent/>
                </div>
              </div>
            </>
           }>
           </Route>
           <Route path='*' element={<NotFound/>}>
           </Route>
      </Routes>
    </div>
 </Router>
  );
}

export default App;

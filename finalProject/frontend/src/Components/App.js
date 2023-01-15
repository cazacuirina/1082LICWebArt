import {BrowserRouter , Route, Routes} from 'react-router-dom'
//import { useState } from 'react';
// import Signin from './Signin';
// import Signup from './Signup';
import Btn from './Btn';
import Activitati from './Activitati';
import Enroll from './Enroll';
import AddActiv from './AddActiv';
import Activitate from './Activitate';
import SignInUp from './SignInUp'

function App() {

  return (
    <div>    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Btn/>} />
        <Route path="signup" element={<SignInUp />} />
        <Route path="signin" element={<SignInUp />} /> 
        <Route path="activities" element={<Activitati/>} />
        <Route path="activities/enroll" element={<Enroll/>} />
        <Route path="activities/add" element={<AddActiv/>} />
        <Route path="activities/activity" element={<Activitate/>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;

import {BrowserRouter , Route, Routes} from 'react-router-dom'
//import { useState } from 'react';
import Signin from './Signin';
import Btn from './Btn';
import Signup from './Signup';
import Activitati from './Activitati';
import Enroll from './Enroll';
import AddActiv from './AddActiv';
import Activitate from './Activitate';
// import AddFeedback from './AddFeedback';
// import ViewFeedback from './ViewFeedback';

function App() {
  // const [user, updateUser]=useState({})
  // console.log(user)
  //updateUser={updateUser}

  return (
    <div>    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Btn/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} /> 
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

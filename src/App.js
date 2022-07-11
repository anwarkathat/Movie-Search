import './App.css';
import Form from './Components/Form';
import Main from './Components/Main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  

  return (
    <>
  
<BrowserRouter>

<Routes>
  <Route path='/' >
    <Route index element={<Form/>}/>
    <Route path='Main' element={<Main/>}/>
    <Route path='*' element={<div>404 Page Not Found</div>}/>
  </Route>
</Routes>

</BrowserRouter>


</>
  );
}

export default App;
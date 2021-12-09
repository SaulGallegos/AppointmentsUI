import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home';
import Medics from './pages/Medics';
import NewMedic from './pages/NewMedic'
import EditMedic from './pages/EditMedic';
import DetailMedic from './pages/DetailMedic';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>

        <Route path="/medics" element={<Layout/>}>
          <Route index element={<Medics/>}/>
          <Route path="create" element={<NewMedic/>}/>
          <Route path="edit/:id" element={<EditMedic/>}/>
          <Route path=":id" element={<DetailMedic/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

import Form from "./components/Form"
import Header from "./components/Header"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cards from "./components/Cards";
import Landing from "./components/Landing";
import Update from "./components/Update";

function App() {
  return (
    <>
       <BrowserRouter>
       <Header/>
       <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/form" element={<Form/>}/>
        <Route path="/read" element={<Cards/>}/>
        <Route path="/update/:id" element={<Update/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

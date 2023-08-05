
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpStep1 from './components/login-forms-components/SignUpStep1/SignUpStep1';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sad" element={<div></div>}/>
        <Route path="/" element={<SignUpStep1/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

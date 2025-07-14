import logo from './logo.svg';
import './App.css';
import AddQuote from './components/AddQuote';
import SearchQuote from './components/SearchQuote';
import DeleteQuote from './components/DeleteQuote';
import ViewAllQuote from './components/ViewAllQuote';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <AddQuote/> }/>
    <Route path="/search" element={ <SearchQuote/> }/>
    <Route path="/delete" element={ <DeleteQuote/> }/>
    <Route path="/view" element={ <ViewAllQuote/> }/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

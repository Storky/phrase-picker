import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAppBar from 'components/AppBar';
import CommentsPage from 'pages/CommentsPage';


function App() {
  return (
    <React.Fragment>
        <CssBaseline />

        <SearchAppBar/>

        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<CommentsPage />} />
                {/*<Route path={'/:id'} element={<Tour />} />*/}

            </Routes>
        </BrowserRouter>

    </React.Fragment>
  );
}

export default App;

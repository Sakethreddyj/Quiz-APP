import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz';
import './index.css';

import { data as data1 } from './assets/data1';
import { data as data2 } from './assets/data2';
import { data as data3 } from './assets/data3';
import { data as data4 } from './assets/data4';
// Import data3 and data4 similarly

const App = () => {
  const dataSets = [data1, data2,data3,data4]; // Include data3 and data4 here

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {dataSets.map((data, index) => (
          <Route
            key={index}
            path={`/quiz/${index + 1}`}
            element={<Quiz data={data} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

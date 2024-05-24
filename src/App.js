import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ListeningTest from './components/listeningTest';
import SpeakingTest from './components/speakingTest';
import WritingTest from './components/writingTest';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/listening" element={<ListeningTest />} />
          <Route path="/speaking" element={<SpeakingTest />} />
          <Route path="/writing" element={<WritingTest />} />
        </Routes>
    </Router>
  );
}

export default App;

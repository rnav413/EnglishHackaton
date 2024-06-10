import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ListeningTest from './components/applicant/listeningTest';
import SpeakingTest from './components/applicant/speakingTest';
import WritingTest from './components/applicant/writingTest';
import WritingAdmin from './components/admin/writingAdmin';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/listening" element={<ListeningTest />} />
          <Route path="/speaking" element={<SpeakingTest />} />
          <Route path="/writing" element={<WritingTest />} />
          <Route path="/writingAdmin" element={<WritingAdmin />} />
        </Routes>
    </Router>
  );
}

export default App;

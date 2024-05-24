import './App.css';
import TopContainer from './components/TopContainer.tsx';
import TextEditor from './components/TextEditor.tsx';
import BottomContainer from './components/BottomContainer.tsx';
import React from 'react';

function App() {
    return (
        <div className="App">
            <h2>Text Analyzer</h2>
            <TopContainer />
            <TextEditor />
            <BottomContainer />
        </div>
    );
}

export default App;

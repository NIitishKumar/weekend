import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { JOB_LISTING } from './redux/features/actions';
import { useEffect } from 'react';
import JobListing from './jobListing';

function App() {

  return (
    <div className="App" sx={{ paddingX: 2 }}>
      <JobListing />
    </div>
  );
}

export default App;

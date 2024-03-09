import logo from './logo.svg';
import './App.css';

import { db } from './firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

function App() {

  const [test, setTest] = useState();
  // waite for fetch
  async function getTest() {
    const docRef = doc(db, "test_collection", "mThH4vEALTTUo4uHjlxR");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTest(docSnap.data())
    }
  };

  useEffect(() => {
    getTest()
  }, [])

  return (
    <div>
      {test !== undefined &&
        <div>{test.test_name}</div>
      }
    </div>
  );
}

export default App;

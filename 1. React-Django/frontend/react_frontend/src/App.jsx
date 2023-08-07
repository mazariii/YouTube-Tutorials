import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState('')
  const [requestData, setRequestData] = useState(null)

  const fetchData = () => {
    fetch(`http://localhost:8000/my_endpoint/?id=${requestData}`)
      .then(response => response.json())
      .then(data => {
          setResponse(data.message);
      });
  }

  const handleButtonClick = () => {
    fetchData();
  }

  const handleChange = (event) => {
    setRequestData (event?.target.value)
  }


  return (
    <div>
      <h1>React & Django</h1>

      <input onChange={handleChange} type='number' />
      <br/>


      <br/>

      <button onClick={handleButtonClick}>
        Submit
      </button>

      {response &&
        <>
          <h2>Response:</h2>
          {response}
        </>
      }
    </div>
  )
}

export default App

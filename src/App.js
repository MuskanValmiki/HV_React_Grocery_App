import './App.css';

const data =[
  {
    "id": 1,
    "Name": "Kurkura",
    "Location": "Huskur",
    "Timing": "08:00Am-06:00Pm"
  },
  {
      "id": 2,
      "Name": "Namkeen",
      "Location": "Sarjapur",
      "Timing": "09:00AM-08:00Pm"
  },
  {
      "id": 3,
      "Name": "Cake",
      "Location": "Bakery",
      "Timing": "10:00Am-06:00Pm"
  },
  {
      "id": 4,
      "Name": "Toffee",
      "Location": "Shop",
      "Timing": "08:00Am-06:00Pm"
  },
  {
      "id": 5,
      "Name": "Kit-kat choclate",
      "Location": "Kanpur",
      "Timing": "11:00Am-08:00Pm"
  }
]

function App () {
      return(
        <center>
          <>
              <nav className="main-nav">
                  <div className="App-name">
                      <h2> Grocery Market App </h2> 
                  </div>
              </nav>
          <div className='Table'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Timing</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.Name}</td>
                      <td>{val.Location}</td>
                      <td>{val.Timing}</td>
                    </tr>
                  )
                })}
              </thead>
            </table>
          </div>    
          </>
        </center>
      );
  
}


export default App;
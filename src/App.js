import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";




function App() {


  const firstFiveActors = contacts.slice(0, 5)

  const [actors, setContacts] = useState(firstFiveActors)

  const deleteActor = (id) => {
    const copyOfActors = [...actors]
    const filteredActors = copyOfActors.filter(actor => actor.id !== id)
    setContacts(filteredActors)
  }

  const addRandomActor = () => {
    const availableActors = contacts.slice(5, contacts.length)
    const actorLottery = (Math.floor(Math.random() * availableActors.length)) + 1
    const copyOfActors = [...actors]
    const randomActor = availableActors[actorLottery]
    copyOfActors.push(randomActor)
    setContacts(copyOfActors)
  }



  const sortByPopularity = () => {
    const copyOfActors = [...actors]
    const sortedActorsPopularity = copyOfActors.sort((a, b) => (b.popularity - a.popularity))
    setContacts(sortedActorsPopularity)
  }

  const sortByName = () => {
    const copyOfActors = [...actors]
    const sortedActorsName = copyOfActors.sort((a, b) => {
      let fa = a.name,
          fb = b.name;
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
    setContacts(sortedActorsName)
  }



  return <div  className="App">
<h1>IronContacts</h1>

<button onClick={()=> addRandomActor()}>
Add Random Contact
</button>

<button onClick={()=> sortByPopularity()}>Sort by popularity</button>


<button onClick={()=> sortByName()}>Sort by name</button>


<table>
<thead>
<tr>
<th>Picture</th>
<th>Name</th>
<th>Popularity</th>
<th>Won Oscar</th>
<th>Won Emmy</th>
<th>Actions</th>
</tr>
</thead>

{actors.map( actor => {
  return (

<tbody key={actor.id}>

  <tr>
    <td><img className="actor-image" src= {actor.pictureUrl} alt="actor_image" /></td>
    <td>{actor.name}</td>
    <td>{actor.popularity}</td>
    <td>{actor.wonOscar && "🏆"}</td>
    <td>{actor.wonEmmy && "🏆"}</td>
    <td><button onClick={()=> deleteActor(actor.id)}>Delete</button></td>
  </tr>

</tbody>

  )
})}
</table>


  </div>;
}
export default App;
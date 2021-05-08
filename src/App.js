import logo from './logo.svg';
import './App.css';
import Tile from './Tile.js';


function App() {

  let houses=[]
  houses.push({price:27500,area:"Handsworth",type:"Flat",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/108k/107051/78903606/107051_RS0730_IMG_11_0000_max_476x317.jpeg`})
  houses.push({price:1450000,area:"Harbourne",type:"House",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/93k/92029/104484854/92029_581009_IMG_00_0000_max_476x317.jpeg`})
  houses.push({price:165000,area:"Edgbaston",type:"Maisonette",image:`https://media.rightmove.co.uk/dir/crop/10:9-16:9/73k/72455/97846952/72455_107VC_IMG_00_0000_max_476x317.jpg`})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {
      houses.map(
        h => 
          <Tile price={h.price} area={h.area} image={h.image} type={h.type} key={h.id} />
        )
      }

      {/* <Tile area="Digbeth" price='100000' type='House'/>
      <Tile area="Great Barr" price='150000' type='House'/>
      <Tile area="Aston" price='200000' type='House'/> */}
      </header>
    </div>
  );
}

export default App;

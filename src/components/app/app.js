
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
import test from '../../test.js';
import AddItem from '../../routes/additem';
import { useState, useEffect} from 'react';
import EditItem from '../../routes/edititem';

function App() {

  const [data, setData] = useState([]);
  const [typelist, setTypelist] = useState([]); //annetaan lähtökohtaisesti tyhjä taulukko

  useEffect(() => {
    setData(test);
    setTypelist([1, 2, 3, 4, 5, 6, 7, 8, 9])
  }, []);

  const handleItemSubmit = (newitem) => {

    
    let storeddata = data.slice();
    const index = storeddata.findIndex(item => item.id === newitem.id);
    if (index >=  0) {
      storeddata[index] = newitem;
    } else {
      storeddata.push(newitem);
    }
    
    storeddata.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return bDate.getTime() - aDate.getTime();
    });
    setData(storeddata);
    
  }

  const handleItemDelete = (id) => {
    let storeddata = data.slice();
    storeddata = storeddata.filter(item => item.id !==id) //jätetään ne id:t, joita ei poistettu
    setData(storeddata);
    alert("Poista -> " + id)
  }

  const handleTypeSubmit = (newtype) => {
    let storedtypelist = typelist.slice(); //tehdään tyyppilistan kopio
    storedtypelist.push(newtype);//lisätään listaan uusi tyyppi
    storedtypelist.sort();
    setTypelist(storedtypelist);
  }


  return (
    <ButtonAppContainer> {/*lisätään kääre, jonka sisällä plus-merkki pysyy halutulla paikalla */}
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/"> {/*tehdään reititys pääsivulle */}
              <Items data={data} />  {/* tuodaan testidata*/ }
            </Route>
            <Route path="/stats"> {/*tehdään reititys tilastoihin */}
              <Stats />
            </Route>
            
            <Route path="/settings"> {/*tehdään reititys asetuksiin */}
              <Settings types={typelist} onTypeSubmit={handleTypeSubmit} /> {/*viedään tyypit myös settings-sivulle*/ }
            </Route>
            <Route path="/add"> {/*tehdään reititys lisäykselle */}
              <AddItem onItemSubmit={handleItemSubmit} types={typelist} />
            </Route>
            <Route path="/edit/:id"> {/*tehdään reititys muokkaukseen */}
              <EditItem onItemSubmit={handleItemSubmit} data= {data} types={typelist} 
              onItemDelete={handleItemDelete} />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;

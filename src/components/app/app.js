
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
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';

function App() {

  const [data, setData] = useState([]);
  const [typelist, setTypelist] = useState([]); //annetaan lähtökohtaisesti tyhjä taulukko

  const user = useUser();

  const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
 

  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("date").orderBy("time"), {initialData: [], idField: "id"}); //initialdata täytyy käyttää, jos ei käytä suspenseä
   //initialdata täytyy käyttää, jos ei käytä suspenseä
  
  const typeCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('type');
  const { data: typeCollection } = useFirestoreCollectionData(typeCollectionRef.orderBy("type"), {initialData: []});


  useEffect(() => {
    const types = typeCollection.map(obj => obj.type);
    setTypelist(types);
  }, [typeCollection]);
  //useEffect(() => {
  //  setData(test);
  //  setTypelist(["pasta", "riisi"])
  //}, []);

  useEffect(() => {
    setData(itemCollection);
  }, [itemCollection]);

  const handleItemSubmit = (newitem) => {

    
    itemCollectionRef.doc(newitem.id).set(newitem);
    
  }

  const handleItemDelete = (id) => {
    itemCollectionRef.doc(id).delete();
  }

  const handleTypeSubmit = (newtype) => {
    typeCollectionRef.doc().set({type:newtype});
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
              <Stats data={data} />
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

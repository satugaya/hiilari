
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';

function App() {
  return (
    <ButtonAppContainer> {/*lisätään kääre, jonka sisällä plus-merkki pysyy halutulla paikalla */}
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/"> {/*tehdään reititys pääsivulle */}
              <Items />
            </Route>
            <Route path="/stats"> {/*tehdään reititys tilastoihin */}
              <Stats />
            </Route>
            
            <Route path="/settings"> {/*tehdään reititys asetuksiin */}
              <Settings />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;

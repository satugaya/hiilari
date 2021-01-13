
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../items';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';

function App() {
  return (
    <ButtonAppContainer> {/*lisätään kääre, jonka sisällä plus-merkki pysyy halutulla paikalla */}
      <div className={styles.app}>
        <Header />
        <Content>
          <Items />
        </Content>
        <Menu />
      </div>
    </ButtonAppContainer>
  );
}

export default App;

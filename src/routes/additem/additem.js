import ItemForm from '../../components/itemform';
import styles from './additem.module.scss';

function AddItem(props) {
    return (
        <div className={styles.additem}>
            <h2>Uuden merkinnän lisääminen</h2>
            <ItemForm onItemSubmit={props.onItemSubmit} types={props.types} />
        </div>
    );
}

export default AddItem;
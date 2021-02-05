import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'; //tuodaan Next-näppäin 
import {Link} from 'react-router-dom';
import { Highlight } from '@material-ui/icons';


function Item(props) {

    const locale="fi-fi";
    const date = new Date(props.data.date).toLocaleDateString(locale);

   
  //  const erotus = prevState(props.state.bloodsugar) - props.state.bloodsugar
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>{props.data.type} {props.data.extra}</div>  
                <div className={styles.item_date}>{props.data.date} {props.data.time}</div>
                <div className={styles.item_carbs}>{props.data.carbs} g/hh</div>
                <div className={styles.item_time}>{props.data.fiber}g/kuitua</div>
                <div className={styles.item_insuline}>{props.data.insuline} yks.ins.</div>
                {props.data.bloodsugar < 4 ? <div className={styles.item_bloodsugar1}>vs.  {/* jos verensokeri on alle 4 tai yli 10, tulee lukema huomiovärillä*/}
                {props.data.bloodsugar}</div> : props.data.bloodsugar > 10 ? <div className={styles.item_bloodsugar2}>vs. {props.data.bloodsugar}</div> :
                <div className={styles.item_bloodsugar}>vs. {props.data.bloodsugar}</div>}
                <div className={styles.item_time}>{props.sortingTime}</div>
                
                
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/"+props.data.id}><NavigateNextIcon /></Link> {/* lisätään Nappi kunkin rivin perään */}
            </div> 

        </div>
    );
}

export default Item;
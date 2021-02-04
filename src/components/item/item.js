import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'; //tuodaan Next-näppäin 
import {Link} from 'react-router-dom';

//function Color(props) {
  //  const isOk = props.data.insuline;
   // if {isOk > 3.9 && isOk <10} {
     //   return <div className={styles.item_insuline}>{props.data.insuline} yks.</div>
   // }{
   // return <div className={styles.item_insuline2}>{props.data.insuline} yks.</div>   
//}


function Item(props) {

    const locale="fi-fi";
   // const date = new Date(props.data.date).toLocaleDateString(locale);
   
  //  const erotus = prevState(props.state.bloodsugar) - props.state.bloodsugar
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>{props.data.type}</div>  {/* tuodaan tieto itemiin testidatasta*/}
                <div className={styles.item_date}>{props.data.date} {props.data.time}</div>
                <div className={styles.item_carbs}>{props.data.carbs} g/hh</div>
                <div className={styles.item_time}>{props.data.fiber}g/kuitua</div>
                <div className={styles.item_insuline}>{props.data.insuline} yks.ins.</div>
                <div className={styles.item_bloodsugar}>vs. {props.data.bloodsugar}</div>
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/"+props.data.id}><NavigateNextIcon /></Link> {/* lisätään Nappi kunkin rivin perään */}
            </div> 

        </div>
    );
}

export default Item;
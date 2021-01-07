import styles from './item.module.scss';

function Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>Spagetti ja jauhelihakastike</div>
                <div className={styles.item_date}>6,8</div>
                <div className={styles.item_carbs}>45 g</div>
                <div className={styles.item_time}>7.1.2020</div>
                <div className={styles.item_insuline}>4,5</div>
                <div className={styles.item_bloodsugar}>12:00</div>
            </div>
        </div>
    );
}

export default Item;
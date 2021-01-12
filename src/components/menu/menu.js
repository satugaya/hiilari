import ViewListIcon from '@material-ui/icons/ViewList';
import styles from './menu.module.scss';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><ViewListIcon /></div>
            <div><TimelineIcon /></div>
            <div><SettingsIcon /></div>
        </div>
    );
}

export default Menu;
import {Link} from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';
import styles from './menu.module.scss';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><Link to="/"><ViewListIcon /></Link></div>  {/* linkitetään alasivuille */}

            <div><Link to="/stats"><TimelineIcon /></Link></div>
            <div><Link to="/settings"><SettingsIcon /></Link></div>
        </div>
    );
}

export default Menu;
import styles from './settings.module.scss';
import Button from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';


function Settings(props) {

    const user = useUser(); // näyttää käyttäjätiedot
    const auth = useAuth();

    const signOut = async () => {
        await auth.signOut();
    }


    const handleTypeSubmit = (event) => {
        event.preventDefault(); 
        const newtype = event.target.elements.type.value;
        props.onTypeSubmit(newtype);
        event.target.elements.type.value="";//tyhjentää lomakkeen
    }

    return (
        <div className={styles.settings}>
            <h2>Asetukset</h2>

<h3>Profiili</h3>

<div className={styles.settings_profile} >
    <div className={styles.settings_user}>
        <div><img scr={user.data.photoURL} alt="" /></div>
        <div>{user.data.displayName}<br/>{user.data.email}</div>
    </div> {/*tuo kuvana käyttäjän profiilitiedot*/ }
    <div>
        <Button primary onClick={signOut}>Kirjaudu ulos</Button>
    </div>
</div>


            <h3>Ruokatyyppi</h3>
            <div className={styles.settings_types}>
                {props.types.map((type) => <div key={type}>{type}</div>)}
                <form onSubmit={handleTypeSubmit}>
                    <div className={styles.typeform}>
                        <input type="text" name="type" />
                        <Button type="submit" primary>Lisää</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Settings;
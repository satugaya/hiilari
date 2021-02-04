
import Item from '../../components/item';
import {Link} from 'react-router-dom';
import { Button, FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items(props) {

    const items = props.data.map((item) => <Item data={item} />); {/*tuo itemiin datan */} 
    return (
        <ButtonContainer> 
            <div>
                {items}
                <Link to="/add">
                <FloatingButton secondary>+</FloatingButton>
                </Link>
            </div>
        </ButtonContainer>
    );
}

export default Items;
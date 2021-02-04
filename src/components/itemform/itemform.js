import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import {useHistory} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';


function ItemForm(props) {

    const history = useHistory();
    //luodaan hälytys, jonka käyttäjä saa klikatessaan submit-nappulaa
    const submit = ()=> {
        let storedvalues = Object.assign({}, values); //tekee kopion oliosta
        storedvalues.bloodsugar = parseFloat(storedvalues.bloodsugar);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onItemSubmit(storedvalues)
        ;
        history.push("/");
    }
    //jos on dataa, käytetään sitä, muuten alkuarvot
    let today = new Date();
    let currentTime = today.getHours() + ':' + today.getMinutes();
    const initialState = props.data ? props.data : {
        type: "",
        date: new Date().toISOString().substring(0,10),
        carbs: 50,
        time: currentTime,
        insuline: 5,
        bloodsugar: ""

        
    };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleDelete = (event) => {
        event.preventDefault(); //ei tehdä oletusta, jos sellainen on
        props.onItemDelete(values.id);
        history.push("/");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.form}>
                  <div className={styles.form_row}>
                      <div>
                          <label htmlFor="type">Ruoka</label>
                          <input type="text" name="type" onChange={handleChange} value={values.type} />
                          {/**{ props.types.map((type) => <option key={type} value={type}>{type}</option> )}  */}   
                      </div>
                  </div>
                  <div className={styles.form_row}>
                          <div>
                              <label htmlFor="date">Pvm</label>
                              <input type="date" name="date" stop="0.01" onChange={handleChange} value={values.date}/>
                          </div>

                  
                          <div>
                              <label htmlFor="carbs">Hiilarit/g</label>
                              <input type="number" name="carbs" onChange={handleChange} value={values.carbs} />
                          </div>

                  </div>
                  <div className={styles.form_row}>
                          <div>
                              <label htmlFor="time">Kellonaika</label>
                              <input type="text" name="time" onChange={handleChange} value={values.time}/>
                          </div>

                          <div>
                              <label htmlFor="insuline">Insuliini</label>
                              <input type="number" name="insuline" onChange={handleChange} value={values.insuline} />
                          </div>

                  </div>
                  <div className={styles.form_row}>
                          <div>
                              <label htmlFor="bloodsugar">Verensokeri</label>
                              <input type="text" name="bloodsugar" onChange={handleChange} value={values.bloodsugar}/>
                          </div>
                          <div>
                              <label htmlFor="fiber">Kuitua</label>
                              <input type="number" name="fiber" onChange={handleChange} value={values.fiber} g />
                          </div>

                  </div>
                  <div className={styles.form_row}>
                          <div>
                            <Button onClick={handleCancel}>PERUUTA</Button>
                          </div>
                          <div>
                              <Button primary type="submit">LISÄÄ</Button>
                          </div>
                    </div>
                    {props.onItemDelete ?
                    <div className={styles.form_row}>
                    <div>
                              <Button onClick={handleDelete}>POISTA</Button>
                            </div>
                            <div> {/**jakaa alueen puoliksi */}
                            </div>
                    </div> : ""
                    }
                  
                          

                  
                  

              </div>
          </form>

        </div>
    );
}

export default ItemForm;
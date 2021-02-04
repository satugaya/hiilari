import { useState } from 'react';

const useForm = (callback, initialState={}, resetOnSubmit=true)=> {
    //esitellään useState-Hook, johon käyttäjän lomakkeelle syöttämä tieto tallennetaan

    const [values, setValues] = useState(initialState);

    //Submit-käsittelijä, joka estää oletustoiminnon ja
    //kutsuu määriteltyä callback-funktiota

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
        if (resetOnSubmit) resetValues();
    }
    //syötekäsittelijä, joka tallentaa kentän tiedot
    //sen nimellä state-muuttujaan
    const handleChange = (event)=> {
        event.persist();
        //tallennetaan kenttään syötetty arvo välimuuttujaan
        let value = event.target.value;
        //tallennetaan uusi arvo state-muuttujaan
        setValues(values=>({...values, [event.target.name]: value}));
    }
    //funktio, joka palauttaa lomakkeen tiedot alkutilanteeseen
    const resetValues = () => {
        setValues(initialState)
    }
    //Palauta luonnin yhteydessä sekä käsittelijät että 
    //state-muuttuja
    return {
        handleSubmit,
        handleChange,
        resetValues,
        setValues,
        values
    };
}

export default useForm;
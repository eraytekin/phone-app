import { useState, useEffect } from "react";

import "../styles/contacts.css";
import Form from "./Form";
import List from "./List";

function Contacts(){
    const [addContact,setAddContact] = useState([
        {fullname:"eray",phonenumber:5457831434},
        {fullname:"burak",phonenumber:5457831535},
        {fullname:"samet",phonenumber:5457831636},
    ]);

    useEffect(() => {
        console.log(addContact);
    }, [addContact]);

    return(
        <div className="contacts-container">
            <Form addContact={setAddContact} contact={addContact}/>
            <List contacts={addContact}/>
        </div>
    );
}

export default Contacts;
import { useState, useEffect } from "react";
import "../styles/list.css";
function List({ contacts }){
    const [filterText,setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
        // object keys filteredtext ve phonenumber alır.
        // some ise fullname veya phonenumber içerisinde  filterText ifadesi geçiyorsa onu döndür anlamına gelir.
        // tostring tolowercase ise yazıyı istenilen tek formatta filtelenecek hale getirir.
    });

    console.log(filtered);
    return(
        <>
            <input
             type="text"
             placeholder="Filtered"
             value={filterText}
             name="filteredItem"
             onChange={(e) => setFilterText(e.target.value)} 
             />
            <ul>
                {
                    filtered.map((contact, key) => <li key={key}>{contact.fullname} - {contact.phonenumber}</li>)
                }
            </ul>
        </>
    );
}

export default List;
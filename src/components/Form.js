import { useState, useEffect } from "react";


function Form({ addContact, contact }){
    const [form,setForm] = useState({fullname:"",phonenumber:""})

    const onChanceInput = (e)=>{
        setForm({...form, [e.target.name] : e.target.value});
    }
    //1.yönt : kayıt eklenirse içeriği sıfırla
    useEffect(() => {
        setForm({fullname: '', phonenumber: ''});
    }, [contact]);

    const onSubmit = (e) => {
        e.preventDefault();
        if(form.fullname === "" || form.phonenumber === ""){
            return false; // yukarıdakilerden biri boşsa false geri döndür.
        }
        
        addContact([...contact,form]);
        console.log(form);
        
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="fullname" name="fullname" value={form.fullname} onChange={onChanceInput}/>
                </div>
                <div>
                    <input type="text" placeholder="phonenumber" name="phonenumber" value={form.phonenumber} onChange={onChanceInput}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>


        </>
    );
}
export default Form;
let users = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) :[];

let saverecord = () =>{
    let name = document.getElementById("name").value
    let amount = document.getElementById("amount").value
    let editid=document.getElementById("editid").value

    let obj ={
        id:Math.floor(Math.random()*10000),
        name,
        amount,
        type: document.getElementById("type").value
    }

    if(editid){
        let users = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) :[];
       let up = users.map((val)=>{
            if(val.id == editid){
                val.name=name
                val.amount=amount
            }
            return val;
       }) 
       localStorage.setItem("expense",JSON.stringify(up))
       alert("update record")
       getexpes();
       document.getElementById("editid").value="";

    }else{
        users.push(obj);
        localStorage.setItem("expense",JSON.stringify(users));
        alert("add record")
        getexpes();
    }

}

    document.getElementById("name").value="";
    document.getElementById("amount").value="";


let getexpes = () =>{
    let allusers = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) :[]


    let tbl="";
    
    allusers.map((val) => {
    
        tbl+=`
                <tr>
                    <td>${val.id}</td>
                     <td>${val.name}</td>
                     <td>${val.amount}</td>
                     <td>
                        <button  class="btndelete" onclick=deleteexpense(${val.id}) >delete</button>
                        <button  class="btnedit"onclick=editexpense(${val.id})>Edit</button>
                        
                        </td>
                </tr>
            `
    })
    document.getElementById("record").innerHTML=tbl;


}
getexpes();


let deleteexpense = (id) =>{

    let allusers = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) :[]


    let deleteRecord = allusers.filter((val)=>{
        return val.id != id;
    })

    localStorage.setItem("expense",JSON.stringify(deleteRecord))
    alert("delete record")
    getexpes();

}


let editexpense = (id) =>{

    let allusers = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) :[]

    let single = allusers.find((val) =>{
        return val.id == id;
    })

    document.getElementById("name").value=single.name
    document.getElementById("amount").value=single.amount
    document.getElementById("editid").value=id

}




let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
//let allusers;

let saveRecord = ()=>{
    let name=document.getElementById("name").value
    let course=document.getElementById("course").value
     let editid = document.getElementById('editid').value

    let obj ={
        id:Math.floor(Math.random()*10000),
        name,
        course
    }

    if(editid){
        allusers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

        let up = allusers.map((val)=>{
            if(val.id == editid){
                val.name = name
                val.course = course
            }
            return val;
        })

        localStorage.setItem('users',JSON.stringify(up))
        alert("record update")
        getUsers();
        document.getElementById('editid').value = "";
        

    }else{
        allusers.push(obj)
        localStorage.setItem('users',JSON.stringify(allusers))
        alert("User Add")
        getUsers();
}

 document.getElementById('name').value = "";
    document.getElementById('course').value = "";
}



const getUsers = () =>{
    allusers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

    let tbl = " ";
    allusers.map((val) => {
         
        tbl+=`
                 <tr>
                        <td>${val.id}</td>
                        <td>${val.name}</td>
                        <td>${val.course}</td>
                        <td>
                            <button onclick="deleteUser(${val.id})">Delete</button>

                            <button onclick="editUser(${val.id})">Edit</button>
                        </td>
                </tr>
        `
    })
    document.getElementById("usersrecord").innerHTML=tbl;

}
getUsers();



const  deleteUser = (id) => {
     allusers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

     let deleteRecord = allusers.filter((v)=>{
        return v.id != id 
     })

    localStorage.setItem('users',JSON.stringify(deleteRecord));
    alert("User delete")
    getUsers();
    
}


const editUser = (id) => {
    
    allusers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

    let single = allusers.find((val)=>{
        return val.id == id
    })

   document.getElementById('name').value = single.name
    document.getElementById('course').value = single.course
    document.getElementById('editid').value = id
    

    
}


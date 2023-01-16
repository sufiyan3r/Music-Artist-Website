window.onload = () =>{
    document.getElementById('submitBtn').addEventListener('click', (e)=> {
     e.preventDefault()  
    
    const name_2 =document.getElementById('name').value;
    const email=document.getElementById('email').value;
    re_name=/^[a-zA-Z_\s\-\.]{6,32}$/
    re_email=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z_0-9\.\-]+\.[a-zA-Z]{2,5}$/
    
    if (!re_name.test(name_2) || !re_email.test(email)) {
        alert('ERROR! Bad data was sent to the server. Try Again!')
        location.reload()
    }
    else alert('SUCCESS!');
    const data={
        "name": name_2,
        "email": email
    };
    fetch("https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res=> {
        if(res.status===200) return res.json()
        else if(res.status===400) throw "error";
        else throw res.statusText;
    })
    .then(obj=> {
        document.getElementById("signup").innerHTML = obj.data.name+' has been signed up successfully!'
        document.getElementById("signup").classList = "success";
    })

    .catch(error=> {
        document.getElementById("signup").classList = "error";
    })
    // console.log(data)
    })
    
    }
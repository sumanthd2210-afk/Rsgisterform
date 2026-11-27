const form=document.getElementById("resgistation")
const message=document.getElementById("message")


form.addEventListener("submit",async function(e){
    e.preventDefault()
    const name=document.getElementById("name").value;
    const password=document.getElementById("password").value;
    const response=await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:new URLSearchParams({
            name:name,
            password:password
        })
    }) 
    const result=await response.text()
    message.innerText=result
    if(response.ok){
        form.reset();
    }
})
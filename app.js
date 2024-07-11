let array=[]
function register(){
    let name=document.getElementById("name").value 
    let mail=document.getElementById("mail").value
    let count=array.filter((x)=>{
        return x.personmail==mail

    })
    if(count.length==0){
    let object={personname:name,personmail:mail}
    array.push(object)
    }
    else{
        let error=document.getElementById("error")
        error.innerHTML="Gmail already exist"
    }
    let usercontainer=document.getElementById("usercontainer")
    usercontainer.innerHTML=''
    array.map((x)=>{
        let div=document.createElement('div')
        let headingtwo=document.createElement('h2')
        let headingfour=document.createElement('h4')
        div.classList.add('userdiv')
        headingtwo.innerHTML=x.personname
        headingfour.innerHTML=x.personmail
        usercontainer.appendChild(div)
        div.appendChild(headingtwo)
        div.appendChild(headingfour)

    })
    document.getElementById("name").value=''
    document.getElementById("mail").value=''

}
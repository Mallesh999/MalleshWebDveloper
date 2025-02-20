import { useState } from "react"

export default function FormValidation(){

    const[User,setUser]=useState([
        {userId :"malli"},
        {userId :"malli143"},
        {userId :"jaya"},
        {userId :"phani"}
    ])
    const[userMsg,setuserMsg]=useState("");
    const[userMsgColor,setUserMsgColor]=useState(false);
    const[userPassword,setUserPassword]=useState("");
    const[userPasswordColor,setUserPasswordColor]=useState(false)
    const[userCity,setUserCity]=useState("")
    
    const[userDetails,setUserDetails]=useState({
        userId:"",
        userPassword:"",
        userCity:""    
    })
    const[newuserDetails,setnewUserDetails]=useState({
        userId:"",
        userPassword:"",
        userCity:""    
    })
    

    function verifyuserId(e){
        for(var Person of User){
            if(Person.userId==e.target.value){
                setuserMsg("User id Taken - Plz try Another Name");
                setUserMsgColor(false)
                break;
            }else{
                setuserMsg("User Id is Available")
                setUserMsgColor(true)
            }
        }
    }

    function HideuserId(e){
        if(e.target.value==""){
            setuserMsg("This Field is Requaired")
        }else{
            setuserMsg("")
        }
    }
    function verifyuserPassword(e){
        if(e.target.value.match(/(?=.*[A-Z]\w{4,10})/)){
            setUserPassword("Strong Password")
            setUserPasswordColor()
        }else{
            if(e.target.value.length<=4){
                setUserPassword("Poor Password")
            }else{
                setUserPassword("Weak Password")
            }
        }
    }
    function HideuserPassword(e){
        if(e.target.value==""){
            setUserPassword("This Field is Requaired")
            setUserPasswordColor(false)
            
        }else{
            setUserPassword("")
            setUserPasswordColor(true)
        }
    }
    function verifyCity(e){
        if(e.target.value=="noCity"){
            setUserCity("Plz Select a City")
        }else{
            setUserCity("")
        }
    }
    function HandleUserId(e){
        setUserDetails({
            userId:e.target.value,
            userPassword:userDetails.userPassword,
            userCity:userDetails.userCity
        }
        )
    }
    function HandleUserPassword(e){
        setUserDetails({
            userId:userDetails.userId,
            userPassword:e.target.value,
            userCity:userDetails.userCity
        }
        )
    }
    function verifyCity(e){
        setUserDetails({
            userId:userDetails.userId,
            userPassword:userDetails.userPassword,
            userCity:e.target.value
        }
        )
    }
    function registerClick(){
        setnewUserDetails(userDetails)
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 border border-4 p-4 border-danger bg-warning rounded rounded-4">
                    <h1 className="text-danger fst-italic" style={{fontFamily:"initial"}}>Registration Form</h1>
                    <dl>
                        <dt>User Id</dt>
                        <dd>
                            <input type="text" className="form-control" onKeyUp={verifyuserId} onBlur={HideuserId} onChange={HandleUserId}/>
                        </dd>
                        <dd className={(userMsgColor==true)?"text-success":"text-danger"}>{userMsg}</dd>
                        <dt>User Password</dt>
                        <dd>
                            <input type="text" className="form-control" onKeyUp={verifyuserPassword} onBlur={HideuserPassword} onChange={HandleUserPassword}/>
                        </dd>
                        <dd className={(userPasswordColor==true)?"text-success":"text-danger"}>{userPassword}</dd>
                        <dt>Select a City</dt>
                        <dd>
                        <select className="form-select" onChange={verifyCity}>
                            <option value="noCity">Choose a City</option>
                            <option value="vizag">Vizag</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                        </dd>
                        <dd className="text-danger">{userCity}</dd>
                    </dl>
                    <button className="btn btn-primary w-100" onClick={registerClick}>Register</button>
                </div>

                <div className="col-5" style={{marginLeft:"100px"}}>
                    <h1 className="text-decoration-underline fst-italic text-primary">User Details</h1>
                    <dl>
                        <dt>User Id</dt>
                        <dd>{newuserDetails.userId}</dd>
                        <dt>User Password</dt>
                        <dd>{newuserDetails.userPassword}</dd>
                        <dt>User City</dt>
                        <dd>{newuserDetails.userCity}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
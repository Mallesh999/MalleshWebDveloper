import {useFormik} from "formik";
export default function FormikValidation(){
    function verifyDetails(userDetails){
        const errors = {};
        if(userDetails.userName==""){
            errors.userName="Name is Required"
        }else if(userDetails.userName.length<4){
            errors.userName="Name is Too Short"
        }
        else if(userDetails.userName.length>10){
            errors.userName="Name is Too Big"
        }
        if(userDetails.Password==""){
            errors.Password="Password is Required"
        }else if(userDetails.Password.length<8){
            errors.Password=`Password must be 8 characters but you Entered ${userDetails.Password.length} Characters`
        }
        if(userDetails.Email==""){
            errors.Email="Email is Required"
        }else if(userDetails.Email.indexOf("@")<=2){
            errors.Email="Invalid Email"
        }
        if(userDetails.Age==""){
            errors.Age="Age is Required"
        }else if(isNaN(userDetails.Age)){
            errors.Age="Age Must be a Number..."
        }
        if(userDetails.Gender==""){
            errors.Gender="Gender is required"
        }else if(userDetails.Gender=="Chooser Your Gender"){
            errors.Gender="Select a Correct Gender"
        }if(userDetails.MobileNo==""){
            errors.MobileNo="MobileNo is Required"
        }else if(userDetails.MobileNo.match(/\+91\d{10}/)){
            errors.MobileNo="";
        }else{
            errors.MobileNo="Invalid MobileNo"
        }
        return errors;
    }
    const formik = useFormik({
        initialValues:{
            userName :"",
            Password :"",
            Email    :"",
            Age      :"",
            Gender   :"",
            MobileNo :"",
        },
            validate : verifyDetails,
            onSubmit : value =>{
                alert(JSON.stringify(value))
            }
    })
    return(
        <div className="container mt-5">
             <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-4 border border-3 p-4 rounded rounded-4 border-info">
                        <h1 className="text-danger">Registration Form</h1>
                        <dl>
                            <dt>User Name</dt>
                            <dd> 
                                <input type="text" name="userName" className="form-control" onChange={formik.handleChange}/>
                            </dd>
                            <dd className="text-danger">{formik.errors.userName}</dd>
                            <dt>Password</dt>
                            <dd> 
                                <input type="text" name="Password" className="form-control" onChange={formik.handleChange}/>
                            </dd>
                            <dd className="text-danger">{formik.errors.Password}</dd>
                            <dt>Email</dt>
                            <dd> 
                                <input type="text" name="Email" className="form-control" onChange={formik.handleChange}/>
                            </dd>
                            <dd className="text-danger">{formik.errors.Email}</dd>
                            <dt>Age</dt>
                            <dd> 
                                <input type="text" name="Age" className="form-control" onChange={formik.handleChange}/>
                            </dd>
                            <dd className="text-danger">{formik.errors.Age}</dd>
                            <dt>Select Your Gender</dt>
                            <dd>
                                <select className="form-select" name="Gender" onChange={formik.handleChange}>
                                    <option>Chooser Your Gender</option>
                                    <option>Male</option>
                                    <option>Fe-Male</option>
                                    <option>Others</option>
                                </select>
                            </dd>
                            <dd className="text-danger">{formik.errors.Gender}</dd>
                            <dt>Mobile No</dt>
                            <dd> 
                                <input type="text" name="MobileNo" className="form-control" onChange={formik.handleChange}/>
                            </dd>
                            <dd className="text-danger">{formik.errors.MobileNo}</dd>
                        </dl>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </div>
                    <div className="col-5 ms-5">
                        <h1 className="text-decoration-underline fst-italic text-success">User Details</h1>
                        <dl>
                            <dt>User Name</dt>
                            <dd>{formik.values.userName}</dd>
                            <dt>Password</dt>
                            <dd>{formik.values.Password}</dd>
                            <dt>Emai Id</dt>
                            <dd>{formik.values.Email}</dd>
                            <dt>Age</dt>
                            <dd>{formik.values.Age}</dd>
                            <dt>Mobile No</dt>
                            <dd>{formik.values.MobileNo}</dd>
                            <dt>Gender</dt>
                            <dd>{formik.values.Gender}</dd>
                        </dl>
                    </div>
                </div>
            </form>
        </div>
    )
}
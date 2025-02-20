import { useFormik } from "formik";
import * as yup from "yup";
export default function FormWithYup(){

    const formik = useFormik({
        initialValues:{
            UserName :"",
            Password :""
        },
        validationSchema :yup.object({
            UserName : yup.string()
                          .required()
                          .min(4),
            Password : yup.number()
                          .required()
                          .min(8)
        }),
        onSubmit : values=>{
            alert(JSON.stringify(values))
        }
    })

    return(
        <div className="container mt-5">
           <form onSubmit={formik.handleSubmit}>
           <div className="row">
                <div className="col-4">
                    <dl>
                    <dt>userName</dt>
                    <dd>
                        <input type="text" className="form-control" {...formik.getFieldProps("UserName")}/>
                    </dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="text" className="form-control" {...formik.getFieldProps("Password")}/>
                    </dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    </dl>
                    <button className="btn btn-primary w-100">Login</button>
                </div>
           </div>
           </form>
        </div>
    )
}
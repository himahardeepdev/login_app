import React from 'react'
import '../style/username.css';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik'
import { passwordverify } from '../helper/validate';
import { Link } from 'react-router-dom';

function Avatar() {
  return (
      <img src='data:image/jpeg;base64,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' className='circular-image' alt='error'/>
  );
}




const Password = () => {
 
  const formik = useFormik({
    initialValues : {
      password : ''
    },
    validate :passwordverify ,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values=>{
      console.log(values);
    }
  })

  return (
   <div className='container'>
    <Toaster position='top-center' reverseOrder={false} ></Toaster>
    <div className='login-form'>
        <div>
          <h1 className='title'>Hello Again</h1>
          <h1 className='desc'>Explore more by connecting with us </h1>
        </div>
       <div className='img'>
       <Avatar className="profile_img"/>
       </div>
       <form onSubmit={formik.handleSubmit} >
          <div className='justify-content-center align-items-center'>
            <input  {...formik.getFieldProps('password')} type='text'  className='inp' />
          </div>
          <div>
          <button className='btn'type='submit' >let's go</button>
          </div>
       </form>
       <div>
        <h4>Recover password : <Link to="/reset"> Forgot password </Link></h4>
       </div>
    </div>
    
   </div>
      
    
  )
}

export default Password;




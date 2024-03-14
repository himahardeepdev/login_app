import toast from "react-hot-toast";

/** validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify(values,{});
    return errors;
}

/** validate password  */
export async function  passwordverify(values){
    const error = passwordVaidate(values,{});
    return error;
}


/** validate the password */
function passwordVaidate(values,error= {}){
    
    if(!values.password){
        error.password = toast.error("Enter the password");
    }else if(values.password.includes(' ')){
        error.password = toast.error("Enter the valid password");
    }else if(values.password.length < 4){
        error.password = toast.error("password must be more  than 4 letters");
    }
    return error;
}

/** validate username */
function usernameVerify(values,error = {} ){
    if(!values.username){
        error.username =  toast.error("user name is required");
    }else if(values.username.includes(" ")){
        error.username = toast.error('Inavild username ...!');
    }
    return error;
}
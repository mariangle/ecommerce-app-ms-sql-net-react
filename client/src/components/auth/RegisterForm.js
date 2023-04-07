import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [termsAccepted, setTermsAccepted] = useState(false);


  const onSubmit = async (registerData) => {
    console.log(registerData)
  };
  
  return (
    <div className='register'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label'>
          First Name <span>*</span>
          <div className='input-wrapper'>
            <input type="text" {...register("firstName", { required: true })} />
          </div>
        </label>
        {errors.firstName && <span>This field is required</span>}
        <label className='input-label'>
          Last Name <span>*</span>
          <div className='input-wrapper'>
            <input type="text" {...register("lastName", { required: true })} />
          </div>
        </label>
        {errors.lastName && <span>This field is required</span>}
        <label className='input-label'>
          Email <span>*</span>
          <div className='input-wrapper'>
            <input type="email" {...register("email", { required: true })} />
          </div>
        </label>
        {errors.email && <span>This field is required</span>}
        <label className='input-label'>
          Password <span>*</span>
          <div className='input-wrapper'>
            <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
          </div>
        </label>
        {errors.password?.type === 'required' && <span>This field is required</span>}
        {errors.password?.type === 'minLength' && <span>Password must be at least 8 characters long</span>}
        {errors.password?.type === 'maxLength' && <span>Password must be at most 20 characters long</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;

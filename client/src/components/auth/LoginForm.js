import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login, getUserById, setUser } from '../../store/reducers/userSlice'; // actions
import { useNavigate } from 'react-router-dom';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (loginData) => {
    const { payload: userId } = await dispatch(login(loginData));
    const { payload: user } = await dispatch(getUserById(userId));
    dispatch(setUser(user));
    navigate('/');
  };
  
  return (
    <div className='login'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label'>
          Email
          <div className='input-wrapper'>
            <FontAwesomeIcon icon={icons.email}></FontAwesomeIcon>
            <input type="text" {...register("email", { required: true })} />
          </div>
        </label>
        {errors.email && <span>This field is required</span>}
        <label className='input-label'>
          Password
          <div className='input-wrapper'>
            <FontAwesomeIcon icon={icons.lock}></FontAwesomeIcon>
            <input type="password" {...register("password", { required: true })} />
          </div>
        </label>
        {errors.password && <span>This field is required</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;

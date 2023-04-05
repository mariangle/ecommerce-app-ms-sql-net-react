import React, {useState} from 'react';
import styled from 'styled-components';
import { About } from '../styles/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login, getUserById } from '../store/reducers/userSlice';
import jwtDecode from 'jwt-decode';
import userApi from '../utils/api/userApi';


function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (loginData) => {
    const result = await dispatch(login(loginData));
    const userId = result.payload;
    const user = await dispatch(getUserById(userId));
    const userObject = user.payload;
    console.log(userObject.firstName)
  };
  

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        {error && <span>{error}</span>}
        <button type="submit">Login</button>
      </form>
    </StyledLogin>
  )
}
const StyledLogin = styled(About)``;

export default Login;

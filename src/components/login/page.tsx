"use client"; // Adicione esta linha no início do arquivo
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import https from 'https';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import api from '../../../api/api';


// Componente para o formulário de cadastro
const SignUpForm = ({ onSignUpSuccess, toggleForm }: { onSignUpSuccess: () => void; toggleForm: () => void }) => {

  const formik = useFormik({
    initialValues: {
      cpf: '',
      email: '',
      name: '',
      password: '',
      profile_id: 2,
    },

    onSubmit: async (values) => {
      const data = {
        cpf: values.cpf,
        email: values.email,
        name: values.name,
        password: values.password,
        profile_id: 2,
      };

      try {
        await api.post('/user', data);
        window.alert('Usuário cadastrado com sucesso');
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-wrap">
      <h2 className="text-2xl font-bold mb-6 text-center w-full">Sign Up</h2>
      <div className="mb-4 w-1/2 pr-2">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="Nome">Nome</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Nome"
        />
      </div>
      <div className="mb-4 w-1/2 pl-2">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="lastname">Cpf</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="cpf"
          type="text"
          name="cpf"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          placeholder="Cpf"
        />
      </div>
      <div className="mb-4 w-full relative">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
        <div className="flex items-center border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
          <input
            className="appearance-none bg-transparent border-none w-full text-black leading-tight focus:outline-none"
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
        </div>
      </div>

      <div className="mb-6 w-full relative">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Senha</label>
        <div className="flex items-center border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white">
          <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
          <input
            className="appearance-none bg-transparent border-none w-full text-black leading-tight focus:outline-none"
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="********"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 w-full">
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div className="text-center my-4 w-full">
        <span className="text-white-500">or</span>
      </div>
      <div className="flex items-center justify-between mb-4 w-full">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={toggleForm}
        >
          Back to Login
        </button>
      </div>
    </form>
  );
};

// Componente para o formulário de redefinição de senha
const ForgotPasswordForm = ({ toggleForm }: { toggleForm: () => void }) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      new_password: ''
    },

    onSubmit: async (values) => {
      const data = {
        email: values.email,
        new_password: values.new_password
      };

      try {
        await api.put('/reset', data);
        window.alert('Senha alterada com sucesso');
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Alterar senha</h2>

      <div className="mb-4 relative">
        <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <div className="flex items-center border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
          <input
            className="appearance-none bg-transparent border-none w-full text-black leading-tight focus:outline-none"
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
        </div>

        <div className="flex items-center border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white mt-[20px]">
          <input
            className="appearance-none bg-transparent border-none w-full text-black leading-tight focus:outline-none"
            id="new_password"
            type="password"
            name="new_password"
            value={formik.values.new_password}
            onChange={formik.handleChange}
            placeholder="*****"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >Alterar senha</button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={toggleForm}
        >Voltar ao Login</button>
      </div>
    </form>
  );
};

// Componente para o formulário de login
const LoginForm = ({ toggleForm, onForgotPassword }: { toggleForm: () => void; onForgotPassword: () => void }) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
        username: '',
      };

      try {

        const auth = await api.post('/auth', data);

        const token = auth.data.token;

        localStorage.setItem('facitAccessToken', token);
        
        window.location.href = '/landing';

      } catch (error) {
        window.alert('Usuário ou senha inválidos');
        console.log(error);
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <div className="mb-4 relative">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
        <div className="flex items-center border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
          <input
            className="appearance-none bg-transparent border-none w-full text-black leading-tight focus:outline-none"
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
        </div>
      </div>

      <div className="mb-4 relative">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Senha</label>
        <div className="flex items-center border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white">
          <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
          <input
            className="appearance-none bg-transparent border-none w-full text-black leading-tight focus:outline-none"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="********"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        {/* <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <span className="ml-2 text-white-700 text-sm">Remember me</span>
        </label> */}
        <button
          className="inline-block align-baseline font-bold text-sm text-white hover:text-white hover:underline"
          type="button"
          onClick={onForgotPassword}
        >Esqueceu a senha?</button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >Entrar</button>
      </div>
      <div className="text-center my-4">
        <span className="text-white-500">or</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={toggleForm}
        >Cadastrar-se</button>
      </div>
      {/* <div className="flex items-center justify-between mb-4">
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
        >Continue with Google</button>
      </div> */}
    </form>
  );
};

// Função de componente padrão que representa a página inicial
export default function Home() {
  const [isSignUp, setIsSignUp] = useState(false); // Estado para alternar entre a tela de login e cadastro
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Estado para alternar entre a tela de login e redefinição de senha

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-90">
      <div className="w-96 bg-black bg-opacity-50 p-8 rounded-lg shadow-md text-white">
        {isForgotPassword ? (
          <ForgotPasswordForm toggleForm={() => setIsForgotPassword(false)} />
        ) : isSignUp ? (
          <SignUpForm onSignUpSuccess={() => setIsSignUp(false)} toggleForm={() => setIsSignUp(false)} />
        ) : (
          <LoginForm toggleForm={() => setIsSignUp(true)} onForgotPassword={() => setIsForgotPassword(true)} />
        )}
      </div>
    </main>
  );
}



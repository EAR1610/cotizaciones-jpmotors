import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo  from '../assets/Imagen_Principal.png'
import useAuth from '../hook/useAuth';
import clienteAxios from '../config/clienteAxios';
import Alerta from '../components/Alerta';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();    
    if( [username, password].includes('') ) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return;
    } 

    try {
      const { data } = await clienteAxios.post('/auth/signin', { 'Usuario': username, 'ContrasenaHash':password });
      setAlerta({});
      localStorage.setItem('token', data.token);      
      setAuth(data.user);
      localStorage.setItem('auth', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (error) {
      setAlerta({
        msg: 'Hubo un error al iniciar sesión',
        error: true
      })
    }
      
  };

  const { msg } = alerta;

  return (
    <>        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            { msg && <Alerta alerta = { alerta }/> }
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                  Usuario
                </label>
                <div className="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="text"
                    required
                    className="block uppercase p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>                
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Iniciar sesión
                </button>
                <Link
                  className='flex mt-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  to='/register'
                >
                  Crear cuenta
                </Link>
              </div>
            </form>          
          </div>
        </div>
    </>    
  )
}

export default LoginPage
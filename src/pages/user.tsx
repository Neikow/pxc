import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { Navigation } from '../components/navigation';
import { Dashboard } from '../components/dashboard';
import { Button } from '../components/components';

const UserPage: React.FC<PageProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const [username, setUsername] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    const inputUsername = document.getElementById(
      'login-form-user'
    ) as HTMLInputElement;
    const inputPassword = document.getElementById(
      'login-form-pswd'
    ) as HTMLInputElement;

    setUsername(inputUsername.value);

    if (inputPassword.value === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
    } else if (inputPassword.value === 'user') {
      setIsLoggedIn(true);
      setIsAdmin(false);
    }
  };

  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className='flex  h-screen w-full items-center justify-center bg-slate-50'>
        {isLoggedIn ? (
          <Dashboard
            isUserAdmin={isAdmin}
            username={username}
          />
        ) : (
          <div
            id='login-form-container'
            className='flex w-5/6 rounded-xl bg-white shadow-xl md:w-4/6 lg:w-3/6 xl:w-2/6 2xl:w-1/6'
          >
            <form
              id='login-form'
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(e);
              }}
              action=''
              className='flex w-full flex-col p-4'
            >
              <h2 className='flex pb-4 text-2xl'>Connection MyCentraleAssos</h2>
              <p className='pb-4 text-xs'>
                Tu n'as pas de compte My ? Contacte le{' '}
                <a className='text-green-700'>@ginfo</a> !
              </p>
              <div className='flex flex-col py-2'>
                <span className='pb-1'>Nom d'utilisateur</span>
                <input
                  form='login-form'
                  id='login-form-user'
                  type='text'
                  aria-autocomplete='list'
                  autoComplete='username'
                  className='border-b text-lg transition-colors hover:border-blue-700'
                />
              </div>
              <div className='flex flex-col py-2'>
                <span className='pb-1'>Mot de passe</span>
                <input
                  form='login-form'
                  id='login-form-pswd'
                  type='password'
                  aria-autocomplete='list'
                  autoComplete='password'
                  className='border-b text-lg transition-colors hover:border-blue-700'
                />
              </div>
              <Button
                form='login-form'
                type='submit'
                className='mt-8'
              >
                Se connecter
              </Button>

              <Link
                id='forgot-cred'
                to='/user/recovery'
                className='pt-4 text-center text-xs opacity-90 transition-colors hover:text-blue-700'
              >
                Mot de passe oublié ?
              </Link>
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default UserPage;

export const Head: HeadFC = () => <title>PxC Marseille - Mes photos</title>;

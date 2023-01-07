import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from '../components/navigation';
import { Dashboard } from '../components/dashboard';
import { Button } from '../components/components';

const UserPage: React.FC<PageProps> = () => {
  const [ isLoggedIn, setIsLoggedIn ] = React.useState( false );
  const [ isAdmin, setIsAdmin ] = React.useState( false );

  const [ username, setUsername ] = React.useState( '' );

  const handleLogin = ( e: React.FormEvent ) => {
    const inputUsername = document.getElementById( 'login-form-user' ) as HTMLInputElement;
    const inputPassword = document.getElementById( 'login-form-pswd' ) as HTMLInputElement;

    setUsername( inputUsername.value );

    if ( inputPassword.value === 'admin' ) {
      setIsLoggedIn( true );
      setIsAdmin( true );
    } else if ( inputPassword.value === 'user' ) {
      setIsLoggedIn( true );
      setIsAdmin( false );
    }
  };

  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className='h-screen  w-full flex justify-center bg-slate-50 items-center'>

        {isLoggedIn ?
          <Dashboard isUserAdmin={isAdmin} username={username} /> :
          <div id='login-form-container' className='bg-white flex rounded-xl shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 2xl:w-1/6'>
            <form id='login-form' onSubmit={( e ) => { e.preventDefault(); handleLogin( e ); }} action='' className='flex flex-col w-full p-4'>
              <h2 className='flex text-2xl pb-4'>Connection MyCentraleAssos</h2>
              <p className='pb-4 text-xs'>Tu n'as pas de compte My ? Contacte le <a className='text-green-700'>@ginfo</a> !</p>
              <div className='flex flex-col py-2'>
                <span className='pb-1'>Nom d'utilisateur</span>
                <input form='login-form' id='login-form-user' type='text' aria-autocomplete='list' autoComplete='username' className='border-b hover:border-blue-700 text-lg transition-colors' />
              </div>
              <div className='flex flex-col py-2'>
                <span className='pb-1'>Mot de passe</span>
                <input form='login-form' id='login-form-pswd' type='password' aria-autocomplete='list' autoComplete='password' className='border-b hover:border-blue-700 text-lg transition-colors' />
              </div>
              <Button form='login-form' type='submit' className='mt-8'>
                Se connecter
              </Button>

              <a id='forgot-cred' href='/user/recovery' className='text-center pt-4 text-xs opacity-90 hover:text-blue-700 transition-colors'>Mot de passe oublié ?</a>

            </form>
          </div>}
      </main >
    </>
  );
};

export default UserPage;

export const Head: HeadFC = () => <title>PxC Marseille - Mes photos</title>;

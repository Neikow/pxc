import * as React from 'react';
import { HeadFC, Link, PageProps, navigate } from 'gatsby';
import { Navigation } from '../components/navigation';
import { Dashboard } from '../components/dashboard';
import { Button } from '../components/components';

const UserPage: React.FC<PageProps> = () => {
  const [isVisitor, setIsVisitor] = React.useState(false);
  const [isAuthed, setIsAuthed] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [visitorCode, setVisitorCode] = React.useState('');
  const [redirectTo, setRedirectTo] = React.useState('');

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const invite = urlParams.get('invite');
    const redirect = urlParams.get('redirect');

    if (invite) {
      setIsVisitor(true);
      const inviteCode = invite;
      setVisitorCode(inviteCode);
      navigate('/albums');
    }

    if (redirect) {
      navigate(redirect);
    }
  }, []);

  const handleVisitor = (e: React.FormEvent) => {
    e.preventDefault();
    const inputCode = document.getElementById(
      'login-form-code'
    ) as HTMLInputElement;

    const code = inputCode.value;

    if (code === 'pxcCentrale2023') {
      setIsVisitor(true);
      setVisitorCode(code);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    const inputUsername = document.getElementById(
      'login-form-user'
    ) as HTMLInputElement;
    const inputPassword = document.getElementById(
      'login-form-pswd'
    ) as HTMLInputElement;

    setUsername(inputUsername.value);

    if (inputPassword.value === 'admin') {
      setIsAuthed(true);
      setIsAdmin(true);
    } else if (inputPassword.value === 'user') {
      setIsAuthed(true);
      setIsAdmin(false);
    }
  };

  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className='flex h-screen w-full items-center justify-center bg-slate-50 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full'>
        {isVisitor ? (
          <div className='p-8'>
            <h2 className='mb-2 text-xl'>Bienvenue sur le site du PxC</h2>
            <p className='text-md'>Vous avez utilisé le code : {visitorCode}</p>
            <p className='text-md mb-4'>
              Cette page est malheureusement réservée aux élèves de l'école.
            </p>
            <div className='flex flex-col space-y-2'>
              <Button onClick={() => navigate('/albums')}>
                Voir les albums
              </Button>
              <Button onClick={() => setIsVisitor(false)}>
                Quitter le mode visiteur
              </Button>
            </div>
          </div>
        ) : isAuthed ? (
          <Dashboard
            isUserAdmin={isAdmin}
            username={username}
          />
        ) : (
          <div
            id='login-form-container'
            className='flex w-5/6 rounded-xl bg-white shadow-xl md:w-4/6 lg:w-3/6 xl:w-2/6 2xl:w-1/5'
          >
            <div className='flex w-full flex-col p-8'>
              <form
                id='visitor-form'
                action=''
                onSubmit={handleVisitor}
              >
                <h2 className='flex pb-2 text-2xl'>Code Invité</h2>
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='login-form-code'
                    className='pb-1'
                  >
                    Code d'invitation [pxcCentrale2023]
                  </label>
                  <input
                    placeholder='Code'
                    form='login-form'
                    id='login-form-code'
                    type='text'
                    aria-autocomplete='list'
                    autoComplete='code'
                    className='rounded-md border-b p-2 text-lg transition-colors hover:border-blue-700'
                  />
                </div>

                <Button
                  form='visitor-form'
                  type='submit'
                  className='mt-4 w-full'
                >
                  Visiter
                </Button>
              </form>

              <div className='relative mx-4 my-6 h-0.5 bg-gray-600'>
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-2 text-lg'>
                  ou
                </div>
              </div>
              <form
                id='login-form'
                action=''
                onSubmit={handleLogin}
              >
                <h2 className='flex pb-2 text-2xl'>Connexion</h2>
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='login-form-user'
                    className='pb-1'
                  >
                    Nom d'utilisateur [Peu importe]
                  </label>
                  <input
                    placeholder={"Nom d'utilisateur"}
                    form='login-form'
                    id='login-form-user'
                    type='text'
                    aria-autocomplete='list'
                    autoComplete='username'
                    className='rounded-md border-b p-2 text-lg transition-colors hover:border-blue-700'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='login-form-pswd'
                    className='pb-1'
                  >
                    Mot de passe [admin ou user]
                  </label>
                  <input
                    placeholder='Mot de passe'
                    form='login-form'
                    id='login-form-pswd'
                    type='password'
                    aria-autocomplete='list'
                    autoComplete='password'
                    className='rounded-md border-b p-2 text-lg transition-colors hover:border-blue-700'
                  />
                </div>

                <Button
                  form='login-form'
                  type='submit'
                  className='mt-4 w-full'
                >
                  Se connecter
                </Button>
              </form>

              <Link
                id='forgot-cred'
                to='/user/recovery'
                className='pt-4 text-center text-xs opacity-90 transition-colors hover:text-blue-700'
              >
                Mot de passe oublié ?
              </Link>

              <p className='pt-2 text-center text-xs'>
                Tu n'as pas de compte My ? Contacte le&nbsp;
                <a className='text-green-700'>@ginfo</a> !
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default UserPage;

export const Head: HeadFC = () => <title>PxC Marseille - Mes photos</title>;

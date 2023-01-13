import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Navigation } from '../components/navigation';
import { Button } from '../components/components';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={false} />
      <main className='flex h-screen w-full flex-col items-center bg-slate-50 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full'>
        <div className='flex w-full flex-col-reverse md:h-full md:flex-row'>
          <div className='box-border flex w-full flex-col justify-center px-4 pb-20 pt-8 md:w-3/5 md:px-8 md:py-20 lg:px-12'>
            <h2 className='text-2xl'>Nous contacter</h2>
            <p className='pt-2'>
              Vous pouvez utiliser le formulaire ci-dessous ou directement
              contacter un membre pour toute préstation photographique.
            </p>

            <form className='flex w-full flex-col space-y-4'>
              <div className='flex flex-col space-y-4 pt-8 md:flex-row md:space-y-0 md:space-x-8'>
                <div className='flex w-full flex-col'>
                  <label
                    className='pb-1 text-lg'
                    htmlFor='name'
                  >
                    Nom
                  </label>
                  <input
                    placeholder='Nom'
                    form='login-form'
                    type='text'
                    name='name'
                    autoComplete='name'
                    className='rounded-md border-b p-2 text-lg outline-1 outline-blue-700 transition-colors hover:border-blue-700'
                  />
                </div>
                <div className='flex w-full flex-col'>
                  <label
                    className='pb-1 text-lg'
                    htmlFor='email'
                  >
                    Mél
                  </label>
                  <input
                    placeholder='admin@pxc.fr'
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='email'
                    className='rounded-md border-b p-2 text-lg outline-1 outline-blue-700 transition-colors hover:border-blue-700'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label
                  className='pb-1 text-lg'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  placeholder='Votre demande'
                  id='message'
                  name='message'
                  className='min-h-[8rem] rounded-md border-b p-2 outline-1 outline-blue-700 transition-colors hover:border-blue-700'
                />
              </div>

              <Button
                form='visitor-form'
                type='submit'
                className='self-end px-24'
              >
                Envoyer
              </Button>
            </form>
          </div>
          <div className='relative flex bg-gray-400 max-md:min-h-[70vh] md:w-2/5'>
            <img
              src='https://pxc.asso.centrale-marseille.fr/wp-content/uploads/2019/05/Pom-pom-Calendrier-Séance-2_-120-1-e1558203466471.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 fill-white md:hidden'>
              <svg
                width='48'
                height='48'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z' />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>PxC Marseille - Contact</title>;

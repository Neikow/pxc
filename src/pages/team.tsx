import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from '../components/navigation';

type Team = {
  name: string, role: string; imgPath: string; socials?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}[];
type Teams = { [ year: string ]: { word: string, composition: Team; }; };

const Teams: Teams = {
  '2023-2024': {
    word: 'Une équipe de photographes passionnés', composition: [
      {
        name: 'A',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x300',
        socials: {
          instagram: 'https://www.instagram.com/pxc.marseille/',
          facebook: 'https://www.facebook.com/pxcmarseille',
          linkedin: 'https://twitter.com/pxcmarseille'
        }
      },
      {
        name: 'B',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x301',
      },
      {
        name: 'C',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x302',
      },
      {
        name: 'D',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x303',
      },
    ]
  },
  '2022-2023': {
    word: 'Nous sommes une équipe motivée d\u2019étudiants de l\u2019École Centrale de Marseille, passionnés par la photographie.', composition: [
      {
        name: 'E',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x304',
      },
      {
        name: 'F',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x305',
      },
      {
        name: 'G',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x306',
      },
      {
        name: 'H',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x307',
      },
      {
        name: 'I',
        role: 'Président',
        imgPath: 'https://source.unsplash.com/featured/400x308',
      }
    ]
  }
};

const TeamPage: React.FC<PageProps> = () => {
  const [ year, setYear ] = React.useState( '2023-2024' );
  const years = Object.keys( Teams );

  const handleYearChange = ( direction: 'next' | 'previous' ) => {
    const index = years.indexOf( year );

    console.log( index );

    if ( direction === 'next' ) {
      setYear( years[ index - 1 ] );
    } else {
      setYear( years[ index + 1 ] );
    }
  };

  console.log( year );

  return (
    <>
      <Navigation showDownloadButton={false} />
      <main className='h-screen w-full flex flex-col bg-slate-50 items-center pt-20 overflow-y-scroll'>
        <h2 className='text-3xl pb-2'>Notre équipe</h2>
        <div className='flex align-middle pb-8'>
          <button disabled={years.indexOf( year ) === years.length - 1} className='text-2xl  disabled:opacity-30' onClick={() => handleYearChange( 'previous' )}> {'<'} </button>
          <p className='text-center w-52 text-2xl'>{year}</p>
          <button disabled={years.indexOf( year ) === 0} onClick={() => handleYearChange( 'next' )} className='text-2xl disabled:opacity-30'> {'>'} </button>
        </div>
        <p className='pb-8'>{Teams[ year ].word}</p>
        <div className='w-full px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20'>
          {Teams[ year ].composition.map( ( e ) => (
            <div key={e.name} className='flex flex-col align-middle w-full justify-center'>
              <div className='bg-white w-full rounded-xl shadow-lg'>
                <div className='flex flex-col items-center w-full'>
                  <img src={e.imgPath} className='aspect-square w-full h-auto rounded-t-xl object-cover' />
                </div>

                <div className='flex flex-col p-4 items-center w-full'>
                  <p className='text-xl'>{e.name}</p>
                  <p className='text-md'>{e.role}</p>
                  {e.socials &&
                    <div className='flex pt-2'>
                      {e.socials?.instagram && <a href
                        ={e.socials.instagram} target='_blank' rel='noreferrer' className='flex justify-center items-center w-1/3 mx-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                      </a>}
                      {e.socials?.facebook && <a href
                        ={e.socials.facebook} target='_blank' rel='noreferrer' className='flex justify-center items-center w-1/3 mx-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                      </a>}
                      {e.socials?.linkedin && <a href
                        ={e.socials.linkedin} target='_blank' rel='noreferrer' className='flex justify-center items-center w-1/3 mx-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                      </a>}
                    </div>}
                </div>
              </div>
            </div>
          ) )}
        </div>
      </main >
    </>

  );
};

export default TeamPage;

export const Head: HeadFC = () => <title>PxC Marseille - La team</title>;

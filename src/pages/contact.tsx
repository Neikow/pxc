import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Navigation } from '../components/navigation';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className='flex h-screen w-full items-center justify-center overflow-y-scroll bg-slate-50'>
        <h2>Par année</h2>
        <h2>Par événement</h2>
      </main>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>PxC Marseille - Contact</title>;

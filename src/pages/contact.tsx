import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from '../components/navigation';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className=' h-screen w-full flex justify-center bg-slate-50 items-center overflow-y-scroll'>
        <h2>Par année</h2>
        <h2>Par événement</h2>
      </main >
    </>

  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>PxC Marseille - Contact</title>;

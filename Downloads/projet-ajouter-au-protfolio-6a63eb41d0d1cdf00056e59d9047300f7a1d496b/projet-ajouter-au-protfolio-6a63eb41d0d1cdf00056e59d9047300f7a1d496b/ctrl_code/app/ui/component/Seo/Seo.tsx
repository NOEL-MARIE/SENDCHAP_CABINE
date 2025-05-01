import Head from "next/head";
import { title } from "process";

interface Props {
  title: string;
  description: string;
}

export default function Seo({}: Props) {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta />
          <meta />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
      </div>
      
    </>
  );
}

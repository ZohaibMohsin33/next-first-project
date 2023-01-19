import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "./Components/layout";
 
 export default function firstPost() {
  const YourComponent = () => (
    <Image
      src="/Images/profile.jpeg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={150} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
   return (
     <Layout>
     <Head>
      <title>first-post</title>
     </Head>
     <Script
     src="https://connect.facebook.net/en_US/sdk.js"
     strategy="lazyOnload"
     onLoad={() =>
       console.log(`script loaded correctly, window.FB has been populated`)}
     />

     
     <h1>First Post</h1>
     <h3><Link href="/">Go back</Link></h3>
     <YourComponent />
     </Layout>
   )
 }
 
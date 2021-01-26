// export default function FirstPost() {
//   return <h1>First Post</h1>;
// }

import Link from "next/link";
import Head from "next/head";
// export default function FirstPost() {
//   return (
//     <>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </>
//   );
// }

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

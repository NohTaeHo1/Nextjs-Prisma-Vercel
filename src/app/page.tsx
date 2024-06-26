'use client';
import { Link } from 'nextjs13-progress';
import { useApp } from '@/contexts/AppContext';

export default function Home() {
	const { userData } = useApp();
	return (
		<div className="m-auto flex flex-col gap-6 text-center items-center">
			{userData ? (
				<>
					<h1 className="text-2xl">Welcome Back!</h1>
					<p className="text-xl">Your name is: {userData.firstName}</p>
					<Link
						className="btn btn-primary"
						href="/dashboard"
					>
						Go to dashboard
					</Link>
				</>
			) : (
				<>
					<h1 className="text-2xl">Welcome!</h1>
					<Link
						className="btn btn-primary"
						href="/login"
					>
						Login
					</Link>
				</>
			)}
		</div>
	);
}


// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           넥스트 & 프리즈마 샘플 &nbsp;
//         </p>
//         <Homepage />
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>
   
//     </main>
//   );
// }
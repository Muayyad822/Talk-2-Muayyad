import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex-1 flex items-center justify-center p-4'>
			<div className='w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg'>
				<h1 className='text-2xl md:text-3xl font-semibold text-center text-white mb-6'>
					Login to
					<span className='text-blue-500'> Talk-2-Muayyad</span>
				</h1>

				<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
					<div>
						<label className='block text-sm md:text-base text-gray-200 mb-2'>
							Username
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm md:text-base text-gray-200 mb-2'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link 
						to='/signup' 
						className='text-sm text-blue-400 hover:text-blue-500 transition-colors mt-2'
					>
						{"Don't"} have an account? Sign Up
					</Link>

					<button 
						className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed' 
						disabled={loading}
					>
						{loading ? <span className='loading loading-spinner'></span> : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;

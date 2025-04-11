import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
			<div className='flex w-full h-[95vh] max-w-7xl mx-4 overflow-hidden bg-gray-900 rounded-lg shadow-lg'>
				<Routes>
					<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
					<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
					<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				</Routes>
				<Toaster position="top-center" reverseOrder={false} />
			</div>
		</div>
	);
}

export default App;

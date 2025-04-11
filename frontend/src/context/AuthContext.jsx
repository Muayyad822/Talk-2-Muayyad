import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// Add this export for the custom hook
export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthContextProvider");
	}
	return context;
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("chat-user");
		if (user) {
			setAuthUser(JSON.parse(user));
		}
	}, []);

	const handleAuthError = () => {
		localStorage.removeItem("chat-user");
		setAuthUser(null);
		navigate("/login");
	};

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser, handleAuthError }}>
			{children}
		</AuthContext.Provider>
	);
};

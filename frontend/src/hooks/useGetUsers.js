import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useGetUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const { handleAuthError } = useAuthContext();

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                const data = await res.json();

                if (res.status === 401) {
                    handleAuthError();
                    return;
                }

                if (!res.ok) {
                    throw new Error(data.error || "Error fetching users");
                }

                setUsers(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, [handleAuthError]);

    return { loading, users };
};

export default useGetUsers;
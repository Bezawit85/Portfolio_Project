import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const adminUser = await axios.get("http://localhost:8000/auth/verify", {
          withCredentials: true,
        });
        setUser(adminUser.data);
      } catch (e) {
        setUser(null);
      }
    })();
  }, []);

  const login = async (user) => {
    axios({
      method: "post",
      url: "http://localhost:8000/auth/login",
      data: {
        userName: user.userName,
        password: user.password,
      },
      withCredentials: true,
    })
      .then((res) => {
        setUser({ name: res.data.name, userName: res.data.userName });
        navigate("/admin");
        console.log(res.data);
      })
      .catch((err) => {});
  };

  const logout = async () => {
    axios
      .get("http://localhost:8000/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(null);
        navigate("/login");
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

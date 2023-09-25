import { createContext, useContext, useState } from "react";

interface LoginContextType {
  isLoggedIn: boolean;
  setLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export function useLogin() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

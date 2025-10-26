import { useState } from "react";
import { LoginScreen } from "./login-screen";
import { RegisterScreen } from "./register-screen";
import { WelcomeScreen } from "./welcome-screen";
import App from "../App";

type AuthState = "login" | "register" | "welcome" | "authenticated";

export function AuthWrapper() {
  const [authState, setAuthState] = useState<AuthState>("login");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = () => {
    // In a real app, you'd get user data from the login response
    setUser({ name: "User", email: "user@example.com" });
    setAuthState("authenticated");
  };

  const handleRegister = () => {
    // In a real app, you'd get user data from the registration response
    setUser({ name: "New User", email: "newuser@example.com" });
    setAuthState("welcome");
  };

  const handleWelcomeContinue = () => {
    setAuthState("authenticated");
  };

  const handleLogout = () => {
    setUser(null);
    setAuthState("login");
  };

  if (authState === "authenticated") {
    return <App user={user} onLogout={handleLogout} />;
  }

  if (authState === "welcome") {
    return (
      <WelcomeScreen
        userName={user?.name || "User"}
        onContinue={handleWelcomeContinue}
      />
    );
  }

  if (authState === "register") {
    return (
      <RegisterScreen
        onRegister={handleRegister}
        onSwitchToLogin={() => setAuthState("login")}
      />
    );
  }

  return (
    <LoginScreen
      onLogin={handleLogin}
      onSwitchToRegister={() => setAuthState("register")}
    />
  );
}
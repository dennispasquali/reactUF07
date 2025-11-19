import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// Tipizzazione dello state da passare a Dashboard
export interface ILogNavigateState {
  userName: string;
  email: string;
}

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>(""); // opzionale se vuoi inserire email
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const stateToSend: ILogNavigateState = {
      userName,
      email
    };

    navigate("/dashboard", { state: stateToSend });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>

      <input
        type="text"
        placeholder="Inserisci username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Inserisci email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <p>Username: {userName}</p>
      <p>Email: {email}</p>

      <button type="submit">Login</button>
    </form>
  );
}

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import AuthForm from "../AuthForm";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async(e, email, password) => {
    e.preventDefault();
    setError('');

    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push('/');
    }

  };
  [];
  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  );
}
// 'use client';

// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
//   const supabase = createClientComponentClient();

//   const handleSignUp = async () => {
//     await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         emailRedirectTo: `${location.origin}/auth/callback`,
//       },
//     });
//     router.refresh();
//   };

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     router.refresh();
//   };

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     router.refresh();
//   };

//   return (
//     <>
//       <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
//       <input
//         type="password"
//         name="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <button onClick={handleSignUp}>Sign up</button>
//       <button onClick={handleSignIn}>Sign in</button>
//       <button onClick={handleSignOut}>Sign out</button>
//     </>
//   );
// }
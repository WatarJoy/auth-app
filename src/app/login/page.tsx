'use client';
import LoginForm from '../../components/LoginForm';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface UserData {
  username: string;
  name: string;
  password: string;
  accessToken: string;
}

interface RootState {
  auth: {
    user: UserData | null;
  };
}

export default function LoginPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <LoginForm />
        <p className="mt-4 text-center">
          Don&apos;t have an account?{' '}
          <button
            className="text-blue-500"
            onClick={() => router.push('/register')}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

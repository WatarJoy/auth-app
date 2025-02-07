// app/Home.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton";

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

export default function Home() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/v1/auth/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [user, router]);

  if (!user) return <div>Loading...</div>;
  console.log(data);

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {data && (
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {data.username}
        </h1>
      )}
      <LogoutButton />
    </div>
  );
}

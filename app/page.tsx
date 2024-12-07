"use client"
import { useAuthStore } from "./zustand/providers/auth";

export default function Home() {
  const isLogin = useAuthStore((state) => state.login);

  if(isLogin === undefined) {
    return <div>Loading</div>
  }

  if(isLogin === true) {
    return (<div>HomePage</div>);
  } 

  return (
    <div>
      LoginPage
    </div>
  );
}

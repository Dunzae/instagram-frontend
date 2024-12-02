
export default function Home() {
  const isLogin = false;

  if(isLogin) {
    return (<div>HomePage</div>);
  } 

  return (
    <div>
      LoginPage
    </div>
  );
}

import Home from '../components/Home';

export default function Page() {
  const serverTime = new Date().toLocaleString();

  return (
    <div>
      <p className="text-center text-sm text-gray-500">
        Server Time: {serverTime}
      </p>
      <Home />
    </div>
  );
}

import { useAuth } from "../context/authContext";
const Home = () => {
  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <h1>loading</h1>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl  mb-4">
          welcome {user.displayName || user.email}
        </h1>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;

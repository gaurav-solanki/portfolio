import { Link, Outlet,useLocation  } from "react-router-dom";
import ThemeSwitchButton from "../components/ThemeSwitchButton";

const Layout = () => {

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <div className="flex items-center justify-center min-h-[100dvh] bg-white dark:bg-gray-800  overflow-hidden relative">
        <div className="h-[100dvh] overflow-auto w-full relative">
          <div className="sticky z-20 top-0 left-0 right-0 flex justify-between p-4 bg-white dark:bg-gray-800 border-b border-black/[0.1] dark:border-white/[0.1]">
            {location.pathname != "/" ?<Link to="/" className="btn-primary">Back</Link>:<div></div>}
            <ThemeSwitchButton />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
};

export default Layout;
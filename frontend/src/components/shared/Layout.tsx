import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="min-h-screen flex flex-col justify-between relative w-full font-Inter">
			<Navbar className={`absolute top-2 left-6 right-6 flex-1 z-[999999]`} />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

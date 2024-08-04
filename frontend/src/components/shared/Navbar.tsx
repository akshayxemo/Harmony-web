import logo from "@/assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { navigationMenus } from "@/constants/nav";
import { useEffect, useState } from "react";
const Navbar = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const [activeNav, setActiveNav] = useState("nav_/");

	useEffect(() => {
		if (pathname) setActiveNav(`nav_${pathname}`);
	}, [pathname, activeNav]);

	return (
		<nav className="flex flex-row justify-between items-center py-2 px-6">
			<img src={logo} className="h-14 gap-6" />
			{/* <p>
				{pathname} {activeNav}
			</p> */}
			<ul className="flex gap-1">
				{navigationMenus.map((navItem, idx) => {
					return (
						<Link
							to={navItem.route}
							key={`nav_${idx + 1}`}
							className={`hover:bg-orange-100 ${
								activeNav === `nav_${navItem.route}` ? "bg-orange-100" : ""
							} py-2 px-4 rounded-md cursor-pointer`}
							onClick={() => {
								setActiveNav(`nav_${navItem.route}`);
							}}
						>
							<li className="font-Inter font-medium">{navItem.name}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

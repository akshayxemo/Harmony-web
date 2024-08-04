import HomePage from "@/pages/Home";
export const navigationMenus = [
	{
		name: "Home",
		route: "/",
		element: <HomePage />,
		index: true,
	},
	{
		name: "Services",
		route: "/services",
		element: <HomePage />,
		index: false,
	},
	{
		name: "Community",
		route: "/community",
		element: <HomePage />,
		index: false,
	},
	{
		name: "Contacts",
		route: "/contact",
		element: <HomePage />,
		index: false,
	},
];

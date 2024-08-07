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
	},
	{
		name: "Community",
		route: "/community",
		element: <HomePage />,
	},
	{
		name: "Contacts",
		route: "/contact",
		element: <HomePage />,
	},
];

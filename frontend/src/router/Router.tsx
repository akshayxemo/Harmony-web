import Layout from "@/components/shared/Layout";
import { navigationMenus } from "@/constants/nav";
import HomePage from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/services" element={<HomePage />} />
					{navigationMenus.map((navigation, idx) => {
						if (navigation.index)
							return <Route index element={navigation.element} key={idx} />;
						return (
							<Route
								path={navigation.route}
								element={navigation.element}
								key={idx}
							/>
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

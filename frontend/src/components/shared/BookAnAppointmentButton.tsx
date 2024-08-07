import { Button } from "../ui/button";
import { BookCheck } from "lucide-react";

const BookAnAppointmentButton = () => {
	return (
		<Button className="py-10 px-6">
			<div className="flex gap-3">
				<BookCheck />
				<div className="text-left">
					<span className="uppercase tracking-widest text-sm">Book An</span>
					<p className="text-xl">Appointment</p>
				</div>
			</div>
		</Button>
	);
};

export default BookAnAppointmentButton;

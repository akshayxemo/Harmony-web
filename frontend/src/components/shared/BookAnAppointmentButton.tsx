import { Button } from "../ui/button";
import { BookCheck } from "lucide-react";

const BookAnAppointmentButton = () => {
  return (
    <Button className="py-8 px-5">
      <div className="flex gap-3 items-center">
        <BookCheck />
        <div className="text-left">
          <span className="uppercase tracking-widest text-xs 3xl:text-sm">
            Book An
          </span>
          <p className="text-base 3xl:text-lg">Appointment</p>
        </div>
      </div>
    </Button>
  );
};

export default BookAnAppointmentButton;

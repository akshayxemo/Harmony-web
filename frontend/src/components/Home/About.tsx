import AboutImg from "@/assets/images/About.png";
import { Button } from "../ui/button";

const About = () => {
	return (
		<section>
			<div className="container flex justify-center gap-6">
				<div className="md:w-[40%]">
					<p className="mini-heading">Who we are</p>
					<h2 className="text-4xl font-ZillaSlab font-extrabold">
						Mental health is a human right, not a privilege.
					</h2>
					<p className="mt-4">
						At Harmony, we believe that mental health is a human right, not a
						privilege. We are dedicated to providing accessible, compassionate
						care through a variety of therapeutic options and a supportive
						community where individuals can share their experiences, find
						support, and uplift others. Our mission is to make mental health
						care accessible to everyone, ensuring that every individual has the
						opportunity to heal and thrive.
					</p>
					<Button className="btn">See more</Button>
				</div>
				<div className="object-cover rounded-2xl overflow-hidden">
					<img src={AboutImg} alt="about-img" className="w-full h-full" />
				</div>
			</div>
		</section>
	);
};

export default About;

import LandingImgHome from "@/assets/images/home_bg1.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="w-full h-[800px] overflow-y-hidden object-cover relative">
			<img
				src={LandingImgHome}
				alt="hero image"
				className="-bottom-20 left-0 absolute -z-10"
			/>
			<div className="container py-32 flex flex-col justify-center h-full">
				<div className="text-center flex flex-col justify-center items-center">
					<span className="mini-heading">WELCOME TO HARMONY</span>
					<h1 className="font-ZillaSlab font-extrabold md:text-7xl text-5xl">
						Healing minds, transforming lives.
					</h1>
					<p className="mt-4 max-w-[85%]">
						At Harmony, we offer a comprehensive mental health care solution
						with a variety of therapies tailored to your needs. Our supportive
						community is here to help you share your thoughts, receive support,
						and give support to others on their journey to mental well-being.
					</p>
					<Button className="btn-orange">Get started</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;

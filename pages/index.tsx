import Image from "next/image";
import profilePic from "../public/my_photo.png";

export default function Home() {
	return (
		<section
			id="home"
			className="py-5"
		>
			<div className="container d-flex flex-column justify-content-center align-items-center text-center">
				<Image
					src={profilePic}
					className="img-fluid rounded-circle mb-3"
					alt="Profile Picture"
					width="150"
					height={150}
					style={{ border: " 2px solid black" }}
				/>
				<h2>Hi, I&apos;m Fiza</h2>
				<p>Welcome to my portfolio website. Where I have showcased my education and personal projects.</p>
				<div
					className="row align-items-center mt-5"
					style={{ color: "white" }}
				>
					<div className="col-4 bg-dark">
						<h4 className="mt-3">My Career</h4>
						<p>
							I am a final year student of BSE at FAST NUCES, Karachi and an SQA automation intern at Techlogix. I have
							good command over JAVA and testing frameworks like Selenium, Cucumber, and TestNG.
						</p>
					</div>
					<div className="col-1"></div>
					<div className="col-3 bg-dark">
						<h4 className="mt-3">My Hobbies</h4>
						<p>
							I love to read poetry books, watch funny movies, and play badminton. I also enjoy learning new
							technologies and tools to enhance my skills.
						</p>
					</div>
					<div className="col-1"></div>
					<div className="col-3 bg-dark">
						<h4 className="mt-3">FreeLancing Career</h4>
						<p>
							I have worked as a freelancer on Upwork and Fiverr. I have completed multiple projects on these platforms
							and have received positive feedback from clients.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

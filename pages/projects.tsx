import { useEffect, useState } from "react";

interface Project {
	title: string;
	technology: string;
	description: string;
}

export default function Projects() {
	const [search, setSearch] = useState("");
	const [filteredProjects, setFilteredProjects] = useState([] as Project[]);

	useEffect(() => {
		let projects = [
			{
				title: "RegiGrid",
				technology: "Angular js",
				description: "LMS to improve the daily operations of our University as our FYP",
			},
			{
				title: "Dairy Farm Management System",
				technology: "Java",
				description:
					"To manage the daily operations of a dairy farm including an E-Commerce store to seel the dairy products",
			},
			{
				title: "Hospital Management System",
				technology: "PHP",
				description: "To manage the appointments and medical prescriptions of a hospital",
			},
			{
				title: "SauceDemo Automation",
				technology: "Selenium",
				description: "Automated UI testing of Sauce Demo website",
			},
			{
				title: "Utility Bill Management System",
				technology: "C++",
				description: "Manage the utility bills of gas, electricity, and water",
			},
			{
				title: "YourHelper",
				technology: "React js",
				description:
					"A platform where the students of FAST NUCES can find all the relevant study meterial related to their courses",
			},
		];

		function filterProjects() {
			if (search === "") return projects;
			return projects.filter(
				(project) =>
					project.technology.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
					project.title.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
					project.description.toLowerCase().trim().includes(search.toLowerCase().trim())
			);
		}

		setFilteredProjects(filterProjects());
	}, [search]);

	return (
		<section id="projects">
			<div className="container">
				<h2 className="text-center mb-4 mt-3">Projects</h2>
				{/* <!-- Search Bar --> */}
				<input
					type="text"
					id="searchInput"
					className="form-control mb-4"
					placeholder="Search by technology..."
					onChange={(e) => setSearch(e.target.value)}
				/>
				{/* <!-- Project Cards --> */}
				<div
					className="row"
					id="project-cards"
				>
					{/* <!-- Example Project Card --> */}
					{filteredProjects.map((project, index) => (
						<div
							className="col-md-4 mb-4"
							key={index}
						>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">{project.title}</h5>
									<p className="card-text">Technology: {project.technology}</p>
									<p className="card-text">Description: {project.description}</p>
								</div>
							</div>
						</div>
					))}
					{/* <!-- Add more project cards here --> */}
				</div>
			</div>
		</section>
	);
}

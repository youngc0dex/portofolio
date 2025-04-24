import React, { useState, useEffect } from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const [visibleProjects, setVisibleProjects] = useState([]);

	useEffect(() => {
		// Show projects one by one
		const showProjects = () => {
			INFO.projects.forEach((_, index) => {
				setTimeout(() => {
					setVisibleProjects(prev => [...prev, index]);
				}, index * 300); // 300ms delay between each project
			});
		};

		showProjects();
	}, []);

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div 
					className={`all-projects-project ${visibleProjects.includes(project.id) ? 'fade-in' : 'hidden'}`} 
					key={project.id}
				>
					<Project
						id={project.id}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={`/project/${project.id}`}
						type={project.type}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

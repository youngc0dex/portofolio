import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { getImagePath } from "../../utils/imgPath";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, type, id } = props;

	// Process logo path to ensure it works with GitHub Pages
	const processedLogo = logo?.startsWith('http') ? logo : (logo ? getImagePath(logo) : null);

	if (id === null) {
		return (
			<div className="project in-progress-project">
				<Link to={link}>
					<div className="project-container in-progress-container">
						<div className="project-warning-icon">
							<FontAwesomeIcon icon={faExclamationTriangle} color="black" />
						</div>
						<div className="project-description in-progress-description">
							{description?.length > 150 
								? description.substring(0, 150) + "..." 
								: description}
						</div>
					</div>
				</Link>
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={processedLogo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">
							{description.length > 150 
								? description.substring(0, 150) + "..." 
								: description}
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;

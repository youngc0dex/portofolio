import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { useParams } from "react-router-dom";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import "./styles/projectDetails.css";
import Badge from "../components/common/badge";
const ProjectDetail = () => {
    const { id } = useParams();
    const [visibleElements, setVisibleElements] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projectDetail");

    const currentData = INFO.projects.find((item) => String(item.id) === id);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
                    <div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
                    <div className="projects-container">
						<div style={{display: "flex", gap: "10px"}}>
							<div className={`title projects-title fade-element `}>
								{currentData.title} 
							</div>

							<div style={{position: "relative"}}><img style={{position: "absolute", top: "0", left: "90px"}} src={`/${currentData.logo}`} alt="project-logo" className="project-detail-logo" /></div>
						</div>
						

						<div className={`subtitle projects-subtitle fade-element`}>
							{currentData.description}
						</div>

						<div className={`projects-stack-container fade-element`} style={{marginBottom: "20px"}}>
							{currentData.stack.map((item, index) => (
								<Badge 
									key={index} 
									text={item.title} 
									bgColor={item.bgColor} 
									textColor={item.textColor} 
									className={`animate-badge animate-delay-${index}`} 
								/>
							))}
						</div>

						<div className={`subHeader projects-subHeader fade-element `} style={{marginTop: "20px"}}>
							Thing's I did:
						</div>
						<Badge 
							text={currentData.role} 
							bgColor={"#FFCC99"} 
							textColor={"black"} 
							className={`animate-badge animate-delay-0`} 
							style={{width: "fit-content", margin:'10px 0'}}
					     />


						<div className={`subtitle projects-subtitle fade-element `} style={{marginTop: "0", paddingTop: "0"}}>
							{currentData.summary}
						</div>

						<div className={`subHeader projects-subHeader fade-element `} style={{marginTop: "20px"}}>
							Challenges:
						</div>

						<div className={`subtitle projects-subtitle fade-element `} style={{marginTop: "10px", paddingTop: "0"}}>
							{currentData.exciting_part}
						</div>
						
						
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectDetail;

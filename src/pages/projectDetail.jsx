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
import Carousel from "react-multi-carousel";
import Badge from "../components/common/badge";
import { getImagePath } from "../utils/imgPath";

const ProjectDetail = () => {
	const responsive = {
		superLargeDesktop: {
		  breakpoint: { max: 4000, min: 3000 },
		  items: 2
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 2
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1
		}
	  };

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

							<div className="project-detail-logo-container" style={{position: "relative"}}><img style={{position: "absolute", top: "0", left: "90px"}} src={`/${currentData.logo}`} alt="project-logo" className="project-detail-logo" /></div>
						</div>

						<div className={`subtitle projects-subtitle fade-element`}>
							{currentData.description}
						</div>

						{currentData?.images && currentData.images.length > 0 && (
								<div style={{ padding: "1em 0", height: "300px" , width: "100%"}}>
									<Carousel 
										responsive={responsive} 
										showDots={true}
										keyBoardControl={true}
										customTransition="all 1"
										transitionDuration={500}
										containerClass="carousel-container"
										removeArrowOnDeviceType={["tablet", "mobile"]}
									>
										{currentData.images.map((image, index) => (
											<div key={index} style={{paddingRight:'100px'}}>
												<img
													style={{height: "300px", width: "450px", objectFit: "contain"}}
													src={getImagePath(image)}
													alt={`Project image ${index + 1}`}
												/>
											</div>
										))}
									</Carousel>
								</div>
							)}

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

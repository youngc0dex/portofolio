import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import { getImagePath } from "../../utils/imgPath";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={getImagePath("biofarma.jpg")}
								alt="biofarma"
								className="work-image"
							/>
							<div className="work-title">PT. Biofarma (Persero)</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src={getImagePath("manucentric-logo.png")}
								alt="manucentric"
								className="work-image"
							/>
							<div className="work-title">Manucentric Inc</div>
							<div className="work-subtitle">
								Frontend Web Developer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>

						<div className="work">
							<img
								src={getImagePath("btpn.png")}
								alt="btpn"
								className="work-image"
							/>
							<div className="work-title">PT BTPN tbk.</div>
							<div className="work-subtitle">
								Internship Software Engineer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

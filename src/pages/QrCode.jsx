import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/QrCode.css";

const QrCode = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`QrCode | Circolo`}</title>
				<meta name="description" content="Terima Kasih Banyak Sudah Memesan di Circolo" />
				<meta
					name="keywords"
				/>
			</Helmet>

			<div className="page-content qrcode-page">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="qrcode-content">
						<div className="qrcode-title">
							Terima Kasih Telah Bercengkrama
						</div>

                        <div className="qrcode-image-container">
                            <img 
                                src={`/rio.png`} 
                                alt="QrCode" 
                                className="qrcode-image"
                            />
						</div>

						<div className="qrcode-subtitle">
							Setiap perpisahan adalah awal dari pertemuan baru. Terima kasih telah menjadi bagian dari perjalanan hidup saya. Kenangan indah yang kita ciptakan bersama akan selalu tersimpan dalam hati. Semoga pertemuan kita membawa kebahagiaan dan inspirasi untuk langkah selanjutnya dalam hidup kalian.
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

export default QrCode;

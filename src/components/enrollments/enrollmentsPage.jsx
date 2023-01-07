import Cards from "../enrollmentCards/enrollmentCards";
import Navbar from "../Navbar/Navbar";
import PathDisplay from "../PathDisplay/PathDisplay";
import ReferralCode from "../ReferralCode/ReferralCode"
import Wallet from "../wallet/wallet";
import "./enrollmentsPage.css";
import { Link } from "react-router-dom";

const Enrollments = () => {
    return (
        <>
            <Navbar />
            <PathDisplay path=" > Refer and Earn > Friends Enrolled " />
            <section className="main-container-enroll">
                <section className="goback-btn">
                    <Link to="/" id="back-btn-link"><h1 id="back-btn-text">{` < Go Back`}</h1></Link>
                </section>
            </section>
            <section className="main-container-enroll">
                <section id="code-wallet-section">
                    <ReferralCode enroll="true" />
                    <Wallet />
                </section>
            </section>
            <section className="main-container-enroll">
                <Cards />
            </section>
            <section className="main-container-enroll">
                <section className="terms">
                    <a style={{ textDecoration: "none" }} href="/" className="terms-text">Terms and Conditions</a>
                </section>
            </section>
        </>
    )
}

export default Enrollments;
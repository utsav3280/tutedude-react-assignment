import Navbar from "../Navbar/Navbar";
import PathDisplay from "../PathDisplay/PathDisplay";
import ReferralBox from "../Referral/Referral";
import ReferralCode from "../ReferralCode/ReferralCode";
import "../Dashboard/Dashboard.css";
import ReferralWorking from "../ReferralWorking/ReferralWorking";
import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <PathDisplay path=" > Refer and Earn" />
            <section id="dashboard-main-section">
                <section id="dashboard-card-section">
                    <article id="ref-box-dash">
                        <ReferralBox />
                    </article>
                    <ReferralCode />
                </section>
                <ReferralWorking />
                <Link to="/enrollments" className="navigate-btns"><button id="refer-btn">Friends who enrolled</button></Link>
                <Link className="navigate-btns"><button id="terms-btn">Terms & Conditions</button></Link>
            </section>
        </>
    )
}

export default Dashboard;
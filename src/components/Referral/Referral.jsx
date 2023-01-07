import "./Referral.css"

const ReferralBox = (props) => {
    return (
        <section id="referral-box">
            <article id="price-section">
                <section className="box">
                    <h5 className="referral-text">Referral Earning</h5>
                    <h2 className="referral-amount">2500</h2>
                </section>
                <section className="box">
                    <h5 className="referral-text">Total Referrals</h5>
                    <h2 className="referral-amount">7</h2>
                </section>
                <section className="box">
                    <h5 className="referral-text">Wallet Balance</h5>
                    <h2 className="referral-amount">500</h2>
                </section>
                <button id="widthdraw-btn">
                    Widthdraw Balance
                </button>
            </article>
        </section>
    )
}

export default ReferralBox;
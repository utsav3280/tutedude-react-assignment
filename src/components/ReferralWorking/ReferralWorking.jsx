import referralGuide from "../../data/referralGuide";
import "./ReferralWorking.css"

const ReferralWorking = () => {

    return (
        <div className="steps-card">
            <h1 id="steps-box-title">How does it work?</h1>
            <section className="steps">
                {
                    referralGuide.map((ele) => {
                        return (
                            <section className="referral-steps">
                                <article className="icon-box">
                                    <article className="icons">
                                        <img className="img-size" src={ele.iconAddress} alt="guide-icons" />
                                    </article>
                                </article>
                                <article>
                                    <h1 className="step-title">{ele.cardTitle}</h1>
                                    <p className="step-description">{ele.cardDescription}</p>
                                </article>
                            </section>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default ReferralWorking;
import "./ReferralCode.css"

const ReferralCode = (props) => {
    return (
        <section id={props.enroll === "true" ? "referral-code-box-enrollment" : "referral-code-box"}>
            <h1 id={props.enroll === "true" ? "code-title-enrollment" : "code-title"}>Your Referral Code</h1>
            <section id={props.enroll === "true" ? "code-section-enrollment" : "code-section"}>
                <p id="code">EDCH54</p>
            </section>
        </section>
    )
}

export default ReferralCode;
import studentInfo from "../../data/studentInfo"
import "./enrollmentCards.css"

const Cards = () => {
    return (
        <section className="enroll-section">
            <span id="enrollment-number-text">Friends who enrolled</span><span id="enrollment-number">{` (${studentInfo.length})`}</span>
            <section className="cards-list">
                {
                    studentInfo.map((ele, idx) => {
                        return (
                            <div key={idx} className="card">
                                <section className="header">
                                    <p className="name-card">{ele.name}</p>
                                    <p>{ele.date}</p>
                                </section>
                                <section className="courses">
                                    <span>Courses enrolled</span><span>{` (${ele.enrollments.length})`}</span>
                                    <article className="enrolled-courses">
                                        {
                                            ele.enrollments.map((enrolls, idx) => {
                                                return (
                                                    <button className="courses-btns">{enrolls}</button>
                                                )
                                            })
                                        }
                                    </article>
                                </section>
                                <section className="referral-amount-cards">
                                    <span>Referral Amount</span><span className="amount-referral-card">{`  ${ele.referralAmount}`}</span>
                                </section>
                            </div>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Cards;
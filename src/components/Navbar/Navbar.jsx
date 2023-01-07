import "./Navbar.css";
const logoIcon = require("../../icons-logo/tutedude-logo.png");
const ProfileIcon = require("../../icons-logo/profile-btn-icon.png");
const ProfileArrow = require('../../icons-logo/profile-icon-dropdown.png')
const Navbar = () => {
    return (
        <nav id="navbar-container">
            <img src={logoIcon} id="brand-logo" alt="tutedude-logo" />
            <article id="navbar-btn-container">
                <button className="navbar-btns">My Assignment</button>
                <button className="navbar-btns">Chat with Mentor</button>
                <button className="navbar-btns" id="profile-btn">
                    <img id="profile-icon" src={ProfileIcon} alt="Profile-Icon" />
                    <span id="profile-btn-text">Profile Name</span>
                    <img id="profile-arrow" src={ProfileArrow} alt="profile-icon-dropdown-arrow" />
                </button>
            </article>
        </nav>
    )
}


export default Navbar;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Assets/contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-head">
                <h1>Contact Me !!!</h1>
                <div className="contact-links">
                    <div className="links">
                        <a href="https://www.linkedin.com/in/aravind-venkatachalam-712048246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <div className="l-icons">
                                <FontAwesomeIcon icon={faLinkedin} />
                                <h4>Linkedin !!!</h4>
                            </div>
                        </a>
                    </div>
                    <div className="links">
                        <a href="https://github.com/Aravind8281" target="_blank" rel="noopener noreferrer">
                            <div className="l-icons">
                                <FontAwesomeIcon  icon={faGithub}/>
                                <h4>Github !!!</h4>
                            </div>
                        </a>
                    </div>
                    <div className="links">
                        <a href="mailto:v.t.aravindan72@gmail.com">
                            <div className="l-icons">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <h4>Gmail !!!</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

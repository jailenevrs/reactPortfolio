import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/footer.css";


function Footer (){
    return (
 <div className = "footer"> 
    <a href= "https://github.com/jailenevrs">
        <GitHubIcon />
        </a>
        <a href = "https://www.linkedin.com/in/jailene-veras-36a498174/">
        <LinkedInIcon /> 
        </a>

    </div>)
}


export default Footer;
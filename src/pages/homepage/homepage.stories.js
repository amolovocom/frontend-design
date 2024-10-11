import "./homepage.css";
import header from "../../components/header/header.html"
import homebgVuew from "../../components/home-background/home-background.html"
import howworks from "../../components/how-works-section/how-works-section.html"
import leadcompany from "../../components/leading-companies/leading-companies.html"
import browsjobs from "../../components/brows-job-category/brows-job-category.html"
import morejobs from "../../components/more-jobs/more-jobs.html"
import footerimg from "../../components/footer-img/footer-img.html"
import footer from "../../components/footer/footer.html"
export default { title: "Pages/homepage" };

export const candidateDetail = () => `

${header}
${homebgVuew}
${howworks}
${leadcompany}
${browsjobs}
${morejobs}
${footerimg}
${footer}

`
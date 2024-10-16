import "./candidate-filter-page.css";
import welcome from "./candidate-filter-page.html";
import header from "../../components/header/header.html"
import bgVuew from "../../components/background/background.html"
import candidatefilter from "../../components/candidate-filter/candidate-filter.html"
import jobinfoheader from "../../components/job-info-header/job-info-header.html"
import jobgrid from "../../components/job/job.html"
import joblist from "../../components/job/job-list.html"
import pagination from "../../components/pagination/pagination.html"
import loginmodal from "../../components/login/login.html"
import signupmodal from "../../components/signup/signup.html"
import forgotmodal from "../../components/forgotpassword/forgotpassword.html"
import sidebar from "../../components/sidebar/sidebar.html"
import footerimg from "../../components/footer-img/footer-img.html"
import footer from "../../components/footer/footer.html"
export default { title: "Pages/candidate-filter-page" };

export const basic = () => ` 


${header}
 ${bgVuew}
<div class="rts__section section__padding">
    <div class="container">
        <div class="row g-30">
            ${candidatefilter}
            <div class="col-lg-7 col-xl-8">
                ${jobinfoheader}
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane grid__style fade active show" role="tabpanel" id="grid">
                        ${jobgrid}
                    </div>
                    <div class="tab-pane fade list__style" role="tabpanel" id="list">
                        ${joblist}
                    </div>
                    ${pagination}
                </div>
            </div>
        </div>
    </div>
</div>
${footerimg}
${footer}
${loginmodal}
${signupmodal}
${forgotmodal}
${sidebar}

`;

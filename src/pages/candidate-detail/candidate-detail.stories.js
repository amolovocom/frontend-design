import "./candidate-detail.css";
import welcome from "./candidate-detail.html";
import header from "../../components/header/header.html"
import candidatebgVuew from "../../components/candidate-background/candidate-background.html"
import candidateinfo from "../../components/candidate-info/candidate-info.html"
import candidateoverview from "../../components/candidate-overview/candidate-overview.html"
import relatedcandidate from "../../components/related-candidate/related-candidate.html"

export default { title: "Pages/candidate-detail" };

export const candidateDetail = () => `
${header}
${candidatebgVuew}
<div class="rts__section section__padding">
    <div class="container">
        <div class="row g-30">
            ${candidateinfo}
            ${candidateoverview}
        </div>
    </div>
</div>
${relatedcandidate}
`
import CertificationCard from "./CertificationCard";

import postmanAPIFundamentals from "../assets/postman_api_fundamentals.png";
import postmanAPIFundamentalsEngrave from "../assets/postman_api_fundamentals_badge.png";
import hackerRankEngrave from "../assets/hackerrank_engrave.svg";
import pythonBasicHackerRank from "../assets/python_basic_hackerrank.png";
import sqlIntermediateHackerRank from "../assets/sql_intermediate_hackerrank.png";

export default function Certifications() {
    return (
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 mt-6 p-2 text-center text-[#5e5e63]">
          Certifications
        </h2>

        <div className="flex flex-col justify-center items-center gap-25 mb-25 antialiased load">
          <CertificationCard
            icon="https://voyager.postman.com/logo/postman-logo-icon-orange.svg"
            title="Postman API Fundamentals"
            subtitle="Postman"
            year="Sep 2025"
            description="Mastered API development and testing using Postman. Created comprehensive API documentation and automated test suites for various endpoints"
            url="https://github.com/harshkyadav5/tabs"
            image={postmanAPIFundamentals}
            engrave={postmanAPIFundamentalsEngrave}
          />
          <CertificationCard
            icon="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
            title="SQL (Intermediate)"
            subtitle="HackerRank"
            year="Mar 2025"
            description="Mastered API development and testing using Postman. Created comprehensive API documentation and automated test suites for various endpoints"
            url="https://github.com/harshkyadav5/tabs"
            image={sqlIntermediateHackerRank}
            engrave={hackerRankEngrave}
          />
          <CertificationCard
            icon="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
            title="Python (Basic)"
            subtitle="HackerRank"
            year="Mar 2025"
            description="Mastered API development and testing using Postman. Created comprehensive API documentation and automated test suites for various endpoints"
            url="https://github.com/harshkyadav5/tabs"
            image={pythonBasicHackerRank}
            engrave={hackerRankEngrave}
          />
        </div>
      </div>
    );
}
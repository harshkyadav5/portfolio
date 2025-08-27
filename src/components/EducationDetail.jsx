import GraduationHat from "../assets/graduation_hat.svg";

export default function EducationDetail() {
  const education = [
    {
      level: "Graduation",
      institution: "VIT Bhopal University",
      year: "2023 - 2027",
      score: "CGPA : 8.96 / 10",
      engraveType: "svg",
      engrave: GraduationHat,
    },
    {
      level: "Intermediate",
      institution: "Yaduvanshi Shiksha Niketan",
      year: "2022",
      score: "Percentage : 83.4",
      engraveType: "text",
      engrave: "12",
    },
    {
      level: "Matriculation",
      institution: "Shiksha Bharati Global School",
      year: "2020",
      score: "Percentage : 89.2",
      engraveType: "text",
      engrave: "10",
    },
  ];

  return (
    <section className="w-full max-w-[700px] mx-auto py-14 antialiased load">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#5e5e63]">
        Education
      </h2>

      <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0 pointer-events-none rotate-[-2deg]" />
          
          <div className="relative bg-[#eceff1] rounded-3xl p-7 overflow-hidden group transition-all duration-300 hover:bg-[#f6f6f6] hover:rotate-[-2deg] h-full">
            {education[0].engraveType === "svg" ? (
              <img
                src={education[0].engrave}
                alt=""
                className="absolute -right-2 -bottom-15 w-[240px] h-[240px] rotate-[-10deg] opacity-4 select-none pointer-events-none transform transition-all duration-500 ease-out group-hover:scale-110"
              />
            ) : (
              <span className="absolute -right-6 -bottom-4 text-[140px] font-extrabold text-[#bdbdc5] opacity-15 leading-none select-none pointer-events-none transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-25">
                {education[0].engrave}
              </span>
            )}

            <h3 className="text-xl font-semibold text-[#323235] mb-2">
              {education[0].level}
            </h3>
            <p className="text-gray-700 text-base mb-1 tracking-wider">{education[0].institution}</p>
            <p className="text-[#5e5e63] text-sm mb-1 tracking-wider">Year: {education[0].year}</p>
            <p className="text-[#5e5e63] text-sm tracking-wider">{education[0].score}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {education.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#eceff1] rounded-3xl p-7 overflow-hidden group transition-all duration-300 hover:bg-[#f6f6f6] hover:shadow-[0_4px_24px_0_#00000014] hover:rotate-[-2deg]"
            >
              {item.engraveType === "svg" ? (
                <img
                  src={item.engrave}
                  alt=""
                  className="absolute -right-6 -bottom-4 w-[140px] h-[140px] opacity-15 select-none pointer-events-none transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-25"
                />
              ) : (
                <span className="absolute -right-4 -bottom-6 text-[140px] font-extrabold text-[#bdbdc5] opacity-15 leading-none select-none pointer-events-none transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-25 group-hover:rotate-[-2deg]">
                  {item.engrave}
                </span>
              )}

              <h3 className="text-xl font-semibold text-[#323235] mb-2">
                {item.level}
              </h3>
              <p className="text-gray-700 text-base mb-1 tracking-wider">{item.institution}</p>
              <p className="text-[#5e5e63] text-sm mb-1 tracking-wider">Year: {item.year}</p>
              <p className="text-[#5e5e63] text-sm tracking-wider">{item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutIntro() {
  return (
    <div className="flex flex-col items-start w-full max-w-[600px] mx-auto px-4 md:px-0 py-8 antialiased text-justify transition-all duration-300 load">
      <h1 className="text-left text-[36px] font-bold leading-[140%] inline-block mt-8 mb-10 bg-[linear-gradient(141deg,#adf1e0,#8075ff_28%,#ff7171_98%)] bg-clip-text text-transparent transition-all duration-300">
        Hi again, I'm Harsh.
      </h1>

      <p className="text-black mb-6 text-lg leading-[170%]">
        I'm a third-year Computer Science undergraduate at VIT Bhopal University with hunger to learn technologies and make an{" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">impact</span>{" "} 
				to create a better tomorrow.
      </p>

      <p className="text-[#323235] mb-6 text-lg leading-[170%]">
        Experienced{" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">problem solver</span>{" "} 
				with a strong analytical background and expertise in{" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">frontend</span>{" "} && {" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">backend</span>{" "} 
				development using a variety of technologies.
      </p>

      <p className="text-[#323235] mb-6 text-lg leading-[170%]">
        Solved{" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">650+</span>{" "} 
				problems on{" "}
				<a href="https://leetcode.com/u/harshkyadav5/" target="_blank" className="text-[#323235] px-0.5 rounded-none [box-shadow:0_2px_0_0_#bdbdc5,inset_0_-1px_0_0_#bdbdc5] transition-[border-radius,box-shadow,color] duration-150 [ease-[cubic-bezier(.215,.61,.355,1)]] hover:text-[#0e0e0f] hover:rounded-[4px] hover:[box-shadow:0_0_0_2px_#bdbdc54d,inset_0_-40px_#bdbdc54d]">
        	LeetCode
  			</a>
				{" "}with a contest max rating of{" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">1724</span>
				, and{" "} 
				<span className="text-black drop-shadow-md font-semibold mb-6 text-lg leading-[170%]">322+</span>{" "} 
				active-days.
      </p>

      <p className="text-[#323235] mb-6 text-lg leading-[170%]">
        If you want to chat, feel free to{" "}
        <a href="#contact" className="text-[#323235] px-0.5 rounded-none [box-shadow:0_2px_0_0_#bdbdc5,inset_0_-1px_0_0_#bdbdc5] transition-[border-radius,box-shadow,color] duration-150 [ease-[cubic-bezier(.215,.61,.355,1)]] hover:text-[#0e0e0f] hover:rounded-[4px] hover:[box-shadow:0_0_0_2px_#bdbdc54d,inset_0_-40px_#bdbdc54d]">
        	reach out.
  			</a>
      </p>
    </div>
  );
}

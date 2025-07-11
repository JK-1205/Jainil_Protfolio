import { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    totalContributions: 0,
    currentYearContributions: 0,
  });

  const username = "JK-1205";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        const repos = res.data.public_repos;

        const contribRes = await axios.get(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const totalContributions = contribRes.data.total;
        const currentYear = new Date().getFullYear();
        const currentYearContributions =
          contribRes.data.years.find((y) => y.year === currentYear)?.total ?? 0;

        setStats({
          repos,
          totalContributions,
          currentYearContributions,
        });
      } catch (err) {
        console.error("Error fetching GitHub data", err);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="mt-14 flex flex-wrap justify-center gap-10 text-center text-white">
      {[
        { label1: "TOTAL", label2: "REPOSITORY", value: stats.repos },
        {
          label1: "TOTAL-",
          label2: "CONTRIBUTIONS",
          value: stats.totalContributions,
        },
        {
          label1: "CURRENT–YEAR–",
          label2: "CONTRIBUTIONS",
          value: stats.currentYearContributions,
        },
      ].map((item, index) => (
        <div key={index} className="w-52">
          <div className="text-sm text-neutral-400 tracking-wide uppercase">
            {item.label1}
            <br />
            {item.label2}
          </div>
          <div className="mt-3 text-4xl font-bold">
            <CountUp end={item.value} duration={2} prefix="+" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubStats;

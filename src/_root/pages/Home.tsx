// import FeatureVideo from "@/components/shared/FeatureVideo";
import ArticleList from "@/components/shared/ArticleList";
import EmailBox from "@/components/shared/EmailBox";
import { jobInfo, socialLinks } from "@/constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="common-container">
      <div>
        <img
          src="/assets/images/home.jpg"
          alt="home-images"
          className="rounded-full"
          width={70}
          height={72}
        />
      </div>
      <div className="lg:w-8/12 md:w-full sm:w-full">
        <h1 className="lg:h1-semibold md:h1-bold h2-semibold mt-5">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="base-regular text-zinc-400 pt-4 lg:w-9/12 md:w-full ">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
      </div>
      <ul className="flex gap-8 mt-4">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>
              <img
                src={link.icon}
                alt={link.title}
                className="invert-white opacity-60 hover:opacity-100"
                width={20}
                height={20}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div>{/* <FeatureVideo /> */}</div>

      <div className="lg:flex items-center md:gap-40 gap-20 justify-between mt-16">
        <div className=" basis-2/4">
          <ArticleList />
        </div>
        <div className="basis-2/4">
          <div>
            <EmailBox />
          </div>
          <div className="p-8  mt-8 border border-zinc-800 rounded-3xl">
            <p className="flex gap-2">
              <img
                src="/assets/icons/bag.svg"
                alt=""
                className="invert-white opacity-60 block"
              />
              Work
            </p>
            <>
              {jobInfo.map((job, index) => (
                <div key={index} className="flex flex-col gap-4 mt-6">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.imageSrc}
                        alt={job.altText}
                        width={job.imageWidth}
                        className=" bg-zinc-600 p-1 rounded-full border border-dark-3"
                      />
                      <div>
                        <h3 className="body-medium">{job.companyName}</h3>
                        <p className="small-light text-zinc-500 pt-1">
                          {job.jobTitle}
                        </p>
                      </div>
                    </div>
                    <div className=" text-zinc-500 text-sm">
                      <span>{job.dateRange}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                to={"/"}
                className="w-full flex justify-center items-center gap-2 mt-8 h-10 py-5 rounded-lg bg-zinc-800 text-[15px] opacity-80"
              >
                Download CV{" "}
                <img
                  src="/assets/icons/download.svg"
                  alt=""
                  width={18}
                  className="invert-white opacity-60"
                />
              </Link>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

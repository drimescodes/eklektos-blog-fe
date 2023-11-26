import { Footer, Navbar } from "../components";
import eklektos from "../assets/eklektos.png";

const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-4">
        <p className="text-3xl sm:text-4xl font-bold text-center  py-6 sm:py-0 sm:pt-12">
          EKLEKTOS
          <img src={eklektos} alt="" className="mx-auto py-9 w-[50%] h-auto" />
        </p>

        <div className="text-[1.2rem]">
          <p className="font-bold pb-4">About Me</p>
          <p>
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </p>
        </div>
        <div className="pt-8 text-[1.2rem]">
          <p className="font-bold pb-4">Skills:</p>
          <ul className="list-disc list-inside">
            <li>
              {" "}
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </li>
            <li>
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </li>
            <li>
              Excellent visual design skills, with a strong understanding of
              layout, color theory, and typography
            </li>
            <li>
              Ability to create wireframes and prototypes to communicate design
              concepts
            </li>
            <li>
              Strong communication and collaboration skills, with the ability to
              work effectively with cross-functional teams
            </li>
          </ul>
        </div>
        <div className="pt-8 text-[1.2rem]">
          <p className="font-bold pb-4">Experience:</p>
          <ul className="list-disc list-inside">
            <li>
            5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries
            </li>
            <li>
            Led the design of a successful e-commerce website, resulting in a 25% increase in online sales
            </li>
            <li>
            Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage
            </li>
            <li>
            Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic
            </li>
            
          </ul>
        </div>

        <div className="py-8 text-[1.2rem]">
          <p className="font-bold pb-4">Education:</p>
          <ul className="list-disc list-inside">
            <li>
            Bachelor's degree in Graphic Design            </li>
            <li>
            Certified User Experience Designer (CUED)            </li>
            
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

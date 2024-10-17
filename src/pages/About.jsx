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
            This was supposed to be a project for a client hosted on a real domain, but some things happened, so I decided to keep it cause it was fun building as at the time.
            This Project Uses Bare React and Vite, then Strapi for the backend, cloudinary for the images.
          </p>
        </div>
       
        
      </div>
      <Footer />
    </div>
  );
};

export default About;

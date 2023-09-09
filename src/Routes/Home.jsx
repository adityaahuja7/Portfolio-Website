import { motion } from "framer-motion";
import "../Styles/Navbar.css";
import HomeImg from "../Images/thumbs.png";


function Home() {
  let variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variant}
      transition={{ type: "easeIn", duration: 0.4 }}
      className="home-container fixed flex flex-col items-center justify-around"
    >
      <section id="about" className = "w-full flex justify-center">
        <div className="container flex flex-col md:flex-row content-center items-center justify-between w-11/12 md:w-3/5">
          <div className="flex flex-col content-center space-y-3">
            <h1 className=" text-3xl">
            HELLO, I'M <span>ADITYA AHUJA.</span>{" "}
            </h1>
            <br />
            <p>
              I am currently a{" "}
              <span className="text-red-500 dark:text-orange-500">
                Computer Science & Applied Mathematics Major
              </span>{" "}<br/>
              at{" "}
              <a className=" text-cyan-500" href="https://iiitd.ac.in">
                Indraprastha Institute of Information Technology, Delhi
              </a>
              .<br />
            </p>
            <p>
              I enjoy learning about new technologies and am always <br />{" "}
              looking to expand my skill set to deliver efficienct products.
            </p>
          </div>
          <img className ="rounded-full h-64 w-64 object-cover md:h-72 md:w-72"src = {HomeImg}/>
        </div>
      </section>


    </motion.div>
  );
}

export default Home;

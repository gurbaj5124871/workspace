import React, { Component } from "react";
import ReactGA from "react-ga4";

export class AboutGurbaj extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({
      hitType: screen,
      pageview: `/${screen}`,
      title: screen,
    });

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="About Gurbaj"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Gurabaj's skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Gurbaj's projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Gurbaj's education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Gurbaj's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutGurbaj;

export const displayAboutGurbaj = () => {
  return <AboutGurbaj />;
};

function About() {
  const experienceYear = new Date().getFullYear() - 2017;

  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/Gurbaj.png"
          alt="Gurbaj Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">Gurbaj Singh,</span>
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">
            Senior Software Engineer!
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" mt-3 list-star">
          I have over {experienceYear}+ years of experience working in various
          product based startups in the space of live streaming, productivity,
          social.{" "}
        </li>
        <li className=" mt-3 list-star">
          Presently i am working at Waitroom. I joined them as a founding senior
          backend engineer and built the distributed microservice architecture
          of the system from scratch. I am really proud of what we built as it
          helped the company raise over 6 million usd. My biggest achievements
          would be that we hosted huge sessions hosted by Jimmy Wales (Founder
          of wikipedia), Tan France and many more which had around more than 50K
          users per session.{" "}
        </li>
        <li className=" mt-3 list-star">
          My expertise extends to leading and establishing efficient work
          processes within a team, mentoring junior engineers and actively
          participating in the hiring process{" "}
        </li>
        <li className=" mt-3 list-star">
          My present interests: Applying AI/Reinforcement Learning in Large
          Language Models{" "}
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc1">
          <div>
            1. Bachelor of Engineering (Electronics and Communication), Chitkara
            University
          </div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Professional Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            <strong className="text-ubt-gedit-orange">
              Leadership and Empowered Accountability :
            </strong>{" "}
            Exhibiting innate qualities of a leader, adept at taking proactive
            measures to address challenges and establishing structure amidst
            chaos, while deriving immense gratification from inspiring and
            guiding others to reach their fullest potential. Unafraid of
            venturing into uncharted territories, embracing accountability for
            any setbacks, and judiciously communicating insights that underlie
            consequential decisions.
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            <strong className="text-ubt-gedit-orange">
              Work Processes and Collaboration :
            </strong>{" "}
            Proficient in devising and implementing solutions to optimise
            workflow efficiencies and expedite project timelines within the
            teams, whilst fostering a culture of collaboration anchored on lucid
            and unambiguous communication.
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            <strong className="text-ubt-gedit-orange">Hiring :</strong>{" "}
            Proactively engaging in the intricate hiring process, which
            encompasses meticulous evaluations of both technical proficiency and
            behavioral patterns, alongside the vital consideration of cultural
            fit, and afterwards, facilitating a supportive and encouraging
            transition for the newly acquired personnel to instantly assimilate
            into the work environment.
          </div>
        </li>
      </ul>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages, Platforms & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="typescript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
              alt="go"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="javascript"
            />
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="nodejs"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
              alt="git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white"
              alt="rust"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              alt="c"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="c++"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white"
              alt="lua"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/shell_script-%23000000.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
              alt="shellscript"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white"
              alt="jupiter"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
              alt="nestjs"
            />
            <img
              src="https://img.shields.io/badge/expressjs-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
              alt="expressjs"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql"
              alt="apollo-graphql"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Gin-white?style=for-the-badge&logoColor=violet&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvxSURBVHgBxVkLcFTlFf7uY3dv9pHdbDabJyQhgSQgEEUt4ItHK1oFxNa2YlGsnXbwMWWmU3BqmWKnHWvFzqjUwU6h6tiiterAYCdiGzAg4f1OSAKBzYu8drPv53313EUCEbK7EUdOstl773/u/3//+b//nPOfANdRdrx78w3NdVM6Dr0787VX1z6Snel7LK6j2J3SorLywHhnWc7Td8y95X873nmwJJP3rhvohQsXOpzW8DLt2mLuRlbgg5uzeddLmbx7XUA/9NBDWWueDk82Zk+sVlQ9WOu90AtemAzSj3ZsuvWxdO9fF9DZ2dnOQnvX8yrrBMMo4MLvwV6sB8OrsBrjq859tNKW6v1vHPTSpUtz5t9yZpE9Oz6HFxvAQIKStRisYTxM2QkYDerkLt/u5an6+MZBMwxTMqPGs5SBSnccEtwsMEoHFEWGwSImdSxZ8vdT9cFjDEJc1Dc3N9uDwWDl0NAQL9GzXKuVmTZtmtnr9eYODg7C5/MlPw6Ho5j0eKfTmR8IBLKi0egn999//7abppFBs8F7/MY6kbsh4DTt/QEUC1TdPTCajsHNAILA3/bEQ7PsG99vHLoaDi4d0NraWlt1dbWkqupbnZ3dj3s87hoCYWVZ1u50OBI6na69p6fndF5enpdA6goKCk6aTIKjt7cvJkmST5blMM/zHXa7fe/i263sA9/pfplj43aOSZw1Gfpng7Xb2Lz1MJhuQDx4hD4hqJKC0nG2vW9vOddyNUzMaGArKytLaMBnPR7PJLLar6dOrezfsmV7F76i0GqY6v+hvKEq8cWCqcwsSSpY1QOoAei4BCThh1DDH8HdKUCMchiM2Nbc8UjD76/W16j0CIfDPxcEwTdu3LgHm5qaQmfPnsVXldWrV1ur8g4WByLufoejJktWWPBqE3kLJySlECLLQk2049CxCP69zYf9h6Po9TDW0fobFbQoivsURXkxFArNKCws7CE60LKb6DbkJssLer2eaWlp6aWlR0lJCahN6urqihCvFWoD0UbrA0QLXdBdf1du1eCSvQeU/aXFQ5zCT6U1vgnewcPoOd+Kdlq//UejMOgZVBYYUZSnh2uAc5DpxgY6Pz9/JwH4O33WXXy2du1aYefOnYLRaBQikYhA4DVgVppIjsvl4mOxWDZxWsjJySk4ffo0zGZz2cRy5RExerqyoZGBPYed7fMzKHQeRZ6dQfUEBjOnCzBlsVCYYqjCbRho3oWt9X7saQp3Y6yW1igxadIk38DAAC4DHaOv2Jd1ly9frgWDmM9WJrRNnD+zeHxxSbnewC8KvBRaXFVXYjKw5I3Hg9VoQNuI0VWAidVDNS0BE/kPVCaL+B1BLBaAGGfBkSO2WCw9tJ/GBloTcmtVU6ZMMRO/zSEIi00VNXNUe3G1ZC+28dkOmyXPaZMsTuzRGwCzPel5NXFFVPzC0YglFXHoDEsJyBEw+nLiXDMYrggqa4Zo+iXdt4FhbwBLfhpsKULdh2hKOs2XaxM8iLFaWhPiaQ5twAO5S54ssM77sY0zWWlAFoYv2hNXecdBvHyxeh9qDVugwAxZNYDTTwET30XgzkKV28mqtFjcZMAwAwpLuQdZWgwcQcRPoZym7g0bpPHji06OtvlTgq6pqdkdCEXmGxeusKksP2zJ0SSfZvNCxXuYynwARc4jd+aBKnYCxpnglAsAGAIsMzng5GYgQh/YoahZGDpPtFHVL0BFD9HeiY02TkrQxOcWsqzLXfdOGcvpoJs8E/rCMuj5kTFJz6hYUMjhp85XUSLIUJUa4qUFshIHxxXCYLsPkrgfsm4qXL7TtOEW0YTciMd7cdqnwNvnh0RcDhL4kGJE3d5/eVPhSgm6uLj4jD+aYNpvXJK8ZxUFymCIgoG2WYh9bhekM0dw9yQ7CnJVvN72LUR1E8jHd5JHsIHlC4kOQxCRhUj0SQyKdshykCYVJm7X0Cq0JcGq0kUjkKVPHYAUNYZS4UoZxtva2iL5Drs9VHXXAslgol1+IYAqtIySokIUrBg/sRR8XgJtQR794jh4Qm0Iigl4okEMRgF3+Dy8URnhxCCBVQkWTxzmIUtByLEETeoShB7RgYQnikrV20guc+touNJmebNnz27IzrYevVobTzbMlc9CjFF6KZGvFf3EZR1UVdtOAgESCaiRDBilb4Z0fFDifsRCIcjh8DBghfRdYj66FYqQfBba29u7U2FKC3rTpk0HvTFp79XaRHJPQdlIy8xBivGQIiFaWgZimKYTliCFvRAjEfqOIBHRUZsOclymVFQa7kNSWZyTCtGv2JP3XX39oEDViWsBrYne3dE+WlurWIpOKS9prUtC18l7JvmjWf7KzEyFR7bgaKISbuWyNCPsR3l5eQQpJKN8Wnj/t1PiK96Exusvi0JwemUHBpUc2JkgbGwARiZOHcuXgNKFTBZN0NOIKsCvmBBQTRDVK4dnu5pAOUwfrhW07Bvwqb1tQNmNo+pIKocB1YYBxZYMEByd/S76XQ20QqDlDBZWufFelES7QMnYqDoZ0WPBggUdQtdJZCpafqFNQkxuVT5pUTnDkx3Xsgt0CupIpZNRT42Njd3R9mO4VuGkBIVwOaWOwd+HuXPnpgy+mXFaEE7a/Z2S+yr6GhV0TTtQqvio6GJGU5C8Ss2dUHTCpUHaGjFHPINa2m98lhmfexnszrkZau6VBSU14o/V1dX5cK2gi4qKXIWq0rfb010iXzaQxtmfFYbx+MxZmD59OgwGg5bS4idrXsShWU9CoY3LnTuM5yeKWP3MH5OpqSZ0uMCv/rAOr8RsUATzyMHikditt94qbt++fVQ8GdFDS144jj/ANO0c8dx6og7PzR4HSvqTgDWhVBbb3ngZWds3JO9LW+owocCBNWvWgA66FwYl8GtXroDtyJaRAxEp+FjQR4DDqfBkXPfYt29fg3pqz4hn080iHn10mZYN4uOPPx5+TidzzCnOSl5PclqxatUqbNiwAZs3bx7WoSQfU7NHUpeP+Si6RvvSQMm87mG1Wk+WWFicFmPDfG3tHUJ5PEHAH0VZWdkI/ajBkvw+cLYX982dm7xetmzZcDuVJHDKK44cxHNe++tGGsnY0nT02llVkAOVnP9FGZy+CLPnfhsbN25M0uKinDhxAnuYIrCuY/DNeQJCUTnWr18/3E4nIfxm3Wtw1y4aMYYa9IAOxf3psDAYgzz88MOfbfOb7gze/czwM76nBQuD+/HwvG8labH1v5/hTZeEcP0/keg9C5Y2GnvLdzHhplkoHWpFIuhFf04F2irvhmLKGdE/f2ALdB++8ApVo1amwjGmslgikdh1Iy/f2XDZM6m4Gh+hGttOUDyQvVANs7Fc9zqK76+kjTcBVrMBvC6OF2IK2masSNm/GnBrG9pPoFPqjakASfWNvbVlBeCGeq5oE3NLIToraGQZjgIn3P4w+nxRuH0ROqGIsLn2pe1f9Q/SiTx2Lp3emEBTPtDCcRzy97w1qo5kK8Kf9A8gKFSgfMa9eOzZ9Xi7txDtd61MPwCBLi0tTes9xgS6tbW1u6GhoW/w0A6w4RTHOKsT02tvQmdnJ6iwA8vt30sGmrRgyCBUzTqTTi9t1fRyoRKu9NRTT92RLeiq26lICHJ9LLku9bKQrYnKcqg/1opjjhn4yyf70GWkKGowpu3f0nXU11q/dXU6vTFtRE2OHz9eT3558ZFjMlwJCXzncXBkRa3AovA6snI+ZHMupNp7LrxQWJVx36KsZJRKjhk0ZXz1ixYvwvxxefhboABiXim+FhHjyHIdliIZqI753xcVFRUtFM4kx+ApMDTQ1yN0aPj0r1B8/d2ZaI+J05rQoVMxmy3TGnd8OjlszkM899otzXU3Q/lwHbKz9M9RtGxLq4+vIFTaPXL+/Hl7/NCnE9SuZj3n64eRlakQI+HCEVZNZnIMFXS0W1aloxeVExjKWxiqhzChIbD9VNM71QDh880xZsuf91aML/5dR0fHe5mMP6Yw/mWpqqqyuN3u+VSrrp43b16Vs6CgonfAPS4Ql/O7e/uofsvRLw9nbg7ERKwv157ja2864ert7nRxDNNBhfcW+p/OQUp9M6LFRfk/Wt40OERl/tcAAAAASUVORK5CYII="
              alt="go-gin"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white"
              alt="fastapi"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
              alt="flask"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
              alt="prisma.io"
              className="m-1"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Databases, Caching Stores, Search Engines and Big Data
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Artificial Intelligence / Machine Learning
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="postgres"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="mongodb"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="mysql"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white"
              alt="cassandra"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white"
              alt="dynamodb"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
              alt="redis"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/aerospike-%23DD0031.svg?style=for-the-badge&logo=aerospike&logoColor=white"
              alt="aerospike"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Apache Ignite-black.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT1SURBVHgB1VlRUttIEO0ZiX8TnPyAU6Jib+3fwgnWnCDsCbBPAJwA+wSwJzA5AeEE9g2S/dsqvIVrMbVVWRz7H2l6u8eWMhJCljQitXlVVIEsZt70vHndPRbwnTD3fvbA94+UEN7W3U0XLODCC2LueTWl3I5Q8F75fpufScfZBUu8CGkmC757rAI4AYQahh8Icbk5+XMClqiUdIwsQA0w/jmCuoYKUBnp+U6zrQIxIGpekmwIx9n4DBVAQAUgwmcKoLfuva3puJL5JFgiL2H9LjtIBbAi/dBodfISZqhH/xAqQCHSZqT4d9rrMygAIeA9VIBcpPmQzRqtgfksCII2IB26AqDz2X5ovLOOdiZpJvt1pzkkCQxpyoXpsQLVHpSAQDGw1XYqafbbeaN5zmQ5OvxMIVTisYQa+v6V9vSSeEJ67rX2VLDxiUiemM+FwNgkiLK051IgeI5zKIkY6fnbn45UgMM0rdK2xuTgbDx+JJdfQFkgdkh6pSIekdaElbrkWiH1TSGOzD83J5MFke6DBSjih+i7w6Ia16R1CmbCmTOgN9tuxiSz9ff4AlF8AAsspRIUIi50+UgazmtfAYr9N/c3MT0/bLcuSfNHYIcFraC/dT++WPeiDIKNwyJ+60i4Skalfn/TQcDfwQ41ktv5jFxrnc6lQDyGIqAF8nZ+2W7FDmZ9+tcJie0UbEGuxTufJRfWdPEkQcQdgcM0jUvX3aVDOwEbcGB8/5aLsbSPBW3H/FnHyAMBF9Lx+9pNDMze0oJQHBdN9UlQVHub03HMpUgeYFeYr7aTKz7zsY664xygsHMXriKTERf/kt1JXVtUAOoBiWg/2QeyPqnA6tH5Ke8wCKehs+hO4mujeYUIldS6Gi9DfiFdf5dlqJOLcPwusa+kf9OgFM0HictZ0wV4EfW7mw4f1hKyqSnf1Qc/6tnYGzFwB5VGPERG5GlxV5DTwYjs6NV0fPCk0SSN92TBjiQveFL66ZMbjMzn2mkUrK/6yErpdmr3SWn6ejru8fZRa/QRKgbX5lyjJ2VT1N+/VXlG6uRtfHU3/o0m4K0YQdVYaj5mkzwnW2QWcUT8I0YaAveM7c98iaKuNcTkbf02BTVykYHpwd+IP1OnC6F3X2uaV8wD8Cql87ifzG4hIssC+NU208VgeDAjVeMrPUekSWO3EQlN3DlYd1HIC5Xkt2EPaYnIg8MHyfKCNR9yktwAxKK2Klb0YUnIxQT57SVLJ/JcuyIp8mCDRyTHQIiuGURJRb2XOgwfluVJz1xAmDB464h8tzT5RDsXNs5M+A0FKPYqdR0d6joG+QaGBRVYI7rNv3YcZ/SchPhCRlKFV1Q65gUlj0Gt3OJ1wtM1jWW75d6WKU859VN0P0u+d3aCUfIAsxs5lKjyks97q7o8iHkz0vrBeBc+JHdBuxNn2WzHWRDpTcg3T6GBcyNcQN3QY1aJQLtxXZ+Oc9U9UXLhwVdFexds26UliTZ7Px/kMPNxiRC4Yj91/FXiyINnNfSFrscchTQxJxLwsEwvGSdFQXk8Zd3r6o6aYzM3hInDinQa/qHJXN/39D+SVZLr0GKwJkH8AnyxKMDLPNBG4loS9z/pb79od+sJW6uMdB6EC5MS9niXEOgO0DwnRqkw23l3wd8p6euH/xs4qqxrvuue7TSRfnr8nC3R5sr3u0EvgCL8Q5CtEv8Bgqyv/OpCG2kAAAAASUVORK5CYII="
              alt="ignite"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch"
              alt="elasticsearch"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Apache Redshift-white?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7ZldSFRBFIDPmXtTSXpIdjcw20V3i7QE3Q2SqN6ChAyEKFMDMbDU7LEfKFJB0ccI+wUf+pHIVNoSpLeoh/7IMESSNgspRImgdPNn957ONXfd0rB7da+J94NlZ+acufPN7p15mEGYJ67CK+4AKWdWWZNyUZL/micEQrLd1gooTrcdy+iFeYCgE2f+RU8QxQkA2q/WWRr+QfrXoAhNKKi+pczTBTrQLG0vaEyTaLROQczmzmFLLdIRgzdRrKhqK9H2ywstyYl7q/MEjHUTYk6ksF4IIB/GlLe555/v1tJPkzTSRBxEARKSRUu+Jun/hRl/sbOwwWVfvyHHYrH1cPh1c/mmATCY5IPX1hAGs1ZbrS6XK6m1uWJrX2Q8vBBTCi6kB0k+ziu72OFMoQSrVZoKveKsJ4jU2fPi6bofE6J6toH0LMQQ/m8jp3p73nxRSGTwONv4Zc9U2xOsFsXhdPIuSdcDADXecs87tT08CsGKJu6weaoajHimm4NuIgSb3QUffe9hoRkaHKhTn4/q0qQZYUEKFslEWVxOnWyYjlFUFtlCwTtW2HVJLkRT2ihMaaMwpY3ClDYKU9ooTGmjMKWNwpQ2ClPaKExpozCljcKUNoolLo3gh8UCSZk7ib6HStPnYwi7OHCZj1GHp/NgnCdzj48GK/lccF9f17MjEAUSkxzlfBGTzWNV8Qwecnk0Iuzneq0s4vaEGsKnpr4bpYP8VerMa6yVY2J2Boh8GB/f7T28MTzDtTlni6LxPsmx8vCHm0c7uNgxOYmSypWS3+ahYDB5XBq531624+tv+X8+wHe7uN8HcAsWkc9XK9VX9XE/fzpniS+D3QPlIYgCfJg+piVfk/Qn77l2EkoaF+/AvCG+kcAHIEvpbRVbmrX01H1j68i7lIkSnuTBD6h1jTe2dwME9d4K90vQgW7pEI5DDamoiDqW3j6HNKbYrY94+6xp0Skb4ich4Mhir+lg6AAAAABJRU5ErkJggg=="
              alt="redshift"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white"
              alt="neo4j"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/AWS S3-%23FF9900.svg?style=for-the-badge&logo=amazons3&logoColor=white"
              alt="s3"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/pinecone-black.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASPSURBVHgB7VhZKK1fFF9cd+jermSe8mCeyjxmKuSN8IAUwiNRJCmKlEyPIkrJlEwh8mIsHgwZSlKGDGVOpszWf69V52T637qfc07dOr/ane/b+/vO/q211/qtdY4GACD8Y9CEfxBq0qqCmrSqoCatKqhJqwpKJf3z508oKiqCtLQ0UDRQ0ePr168YFxeHm5ubSLi7u+N7Be6hWMKamprY1taG9/f3eHJywqSfn5/x/Pwc3d3dFbKHhoy5VJiZmcG3b9/g+/fvHA6np6cQHBwMzs7OMDc3Bx0dHVBdXQ2pqam85unpCcIA+CwkW2xgYIAHBwd4c3ODDw8P+PT0hM3NzfL1vLw8nnNxccHo6GjMyspCDQ2NT3taCz4BJycnMDIy4uvBwUHo6uqC7e1t+frl5SWMjo7C1tYWLC8vw69fv0CEDgjDeP729hakQrLFOTk5nGTr6+t4fX2NYWFhf3w+ICAAd3d3OcaFcVhSUoI/fvyQsrd00i0tLbizs4OOjo64sbGBi4uLKOJbnpDW1tbvSGlra+PQ0BDKkJiYqFrSxcXFWFdXx9dE3N7enq8tLCywvb0dHx8fWUm0tLR43s/PD+fn55msCA3+9PDwUA1p8mJmZiaGh4e/micvFxYW4sXFhdyTlKD5+fm8HhgYyCdD79bU1HAC6+joKJ80ea2qqoo3HB4efrUmkhL39vZwcnISe3p6OHYXFhZYQWJiYlg59PX1+bO3txdXVlbwy5cvyiX9+/dvbGhoYDJESldX990zQofZsNbWVhS6jFZWViiUAysqKviEZCcVFBTEhkg56b8iHRERwV4j0vv7+zgxMYHl5eXvnqMyLiSNPU735ubmcsKy4evri7W1tShkUPmeXltb49CgDUdGRjjhPnrWxMQE7ezs/ve7UlJSON5zc3OVS5oGNT6kCqTRdP9RhSNZc3V1ZY+/XbOxscHIyEh0c3PDpaUl1muqrEolTcc8NjbG46PCEBoaynpNYZSdnf1uPSMjg1WFDKemiiDaV+WSpmFsbMzefDknGifs7OxkMjLQ9dtkoxDz8fFhjacqSsaVlpYqn3R8fDzLFSkD3ZNskWpQrNfX1+P4+DiXa6qSh4eHvPbyfVtbW5yammJPk5ffJqlSSFP3dnx8jJaWlkySdJvmSSUojqn57+/vRy8vLzw7O8PY2NhX71NMHx0dYUJCghTC0ro86pupY6NOzdDQEBobG0EkJIjCAqLCgQgBWF1dhdnZWe63hUqASEwQsc73gjA4ODhwfy0Vf20pyR2B4pG8/rKqkedIIcjrsjlSnKurKwwJCeGemso89dhS9gap4ZGUlMTNPxUZqnoDAwMfyptsUOmmkCGNn5mZYamTWFSkk6ZBcufv74+VlZXyXyt6enrY1NSE3d3dTJTmRBhgVFQUlpWVsZGEj6qoSki/HLICk56eLpc76uRorqCgQE5W9iPX29v7c/vJmCsCoqcGoRoguEFycjJMT09zwpqamoJorjhpRTMFfX19IMiDVCiUNEGEBQj9BZFsoCwonLQqoP4vT1VQk1YV1KRVBTVpVeE/lQmK1UHk0moAAAAASUVORK5CYII="
              alt="pinecone"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Milvus-white.svg?style=for-the-badge&logo=data:image/png;base64,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"
              alt="milvus"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/OpenAI-%23E0234E.svg?style=for-the-badge&logo=openai&logoColor=white"
              alt="openai"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"
              alt="tensorflow"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
              alt="pytorch"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
              alt="pandas"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white"
              alt="pandas"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/LLaMA-blue.svg?style=for-the-badge"
              alt="llama"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Alpaca-white.svg?style=for-the-badge&logo=data:image/png;base64,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"
              alt="alpaca"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/langchain-black.svg?style=for-the-badge&logo=data:image/png;base64,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"
              alt="langchain"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/huggingface-white.svg?style=for-the-badge&logo=data:image/png;base64,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"
              alt="huggingface"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Message Brokers and Network Protocols/Technologies
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Cloud, Containerisation, Orchestration and CI/CD
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka"
              alt="kafka"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"
              alt="rabbitmq"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/AWS SQS-yellow?style=for-the-badge&logo=amazonsqs&logoColor=white"
              alt="sqs"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Websocket-white?style=for-the-badge&logo=data:image/png;base64,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"
              alt="websocket"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/MQTT-purple?style=for-the-badge&logo=mqtt&logoColor=white"
              alt="mqtt"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/ZeroMQ-red?style=for-the-badge&logo=zeromq&logoColor=white"
              alt="zeromq"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/gRPC-5ac5c5?style=for-the-badge&logo=trpc&logoColor=white"
              alt="grpc"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
              alt="graphql"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-RTMP-white?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVpSURBVHgB7VlJaJRJFP7q785ijIm4RI1iAk5EcQbGg2IGEVxmcD1pEBXxoHiIC4mIJ0G9TIJeDF5MBEVBwVEvrpgYHXLx5MEZ1EwMkRBUyL5o7Cxdb96rste/27SMPdMN80Hxb/XX/9VXr9579Zfy+XyEaHz4AKexEc6TJ1CvXgFdXcCnTwC5q34zKAXk5ADTp4MWLIBevx567VogN9ddV0gHysjAAI3W1ZGeM4c0U/yvi7+wkEZraw2vcJ5B0iO9vTRWXk5aqZQgHCzMZ+zoUfL19UWRHhykcX6QUmSjyjgLKjyDpGUIUk7hGIqPnj//mXRPT8rY8ISFefq6u8lxGhqA9++RFmCezqNHcNSDB0gnqMePmXRbG9IJDscNR3V3I63AfB0T6dIJzNdJamhOBpivgzREWpL2uu7k5dkSgN8PDA4CHz/aa87CMGlS/BbfvQNmz2Y5HPuelHBkZQEzZ9rzgQFgaMjdptb2PmebMc3XX1QUGXU4pNPQUKh0dRHV15Net460x0N0507k86iic3KIbtyw51evks7IiGx/+XKi9nai/n7SZWXmHj18GNkOR2lqbCS9davrfeHrVjo7G5g8GXT4MFR7O2jqVKjjx6GuXwetXAk6fRqqrs4qWVEBlJaCysrA2TCMJj6fbYPzYLV5M6ioGGh9HWp/40Zg/nyrpvfz50VlGVFpr6cHlDsFqKyAungRtGUL0NQ0gdKXLxNpTbqkJHRv924SyDF4z8sK3LplFY3KEcxodHYSvX1Luro69Cwzk6ijg+jlS6LhYdI7dtj6TU1mRHVBQeSIyDdralxKx5+IAVsSNVassEq8eYOEwfZKN29C7dxp7ViwbZuZL3T7th2puOBxW7jQnvb1uZ56Y7+jjDlgbAyYNs0MJ1VVAU+fImEIqd+4jf37gV27gEuXoPicOOHBazYXjyeyPndGcR2MjgJT2DyWLeN6LYCYYnTTMT8oKvP6ELxOBNs0XrwATpywaieKjAzgjz+BZ8+g9u0Dli615do1KCEsa8JwiECial8/iDtFlZWg0p+sN4qCN943qbbWKtLRAXX2LLBnj1ErYYjSigNuTY2ZUKrqV+v+7t4F9u51k+bwTEeOAJ2dEzc9YQ1WhlpbgVOngHnz8NW4d88kOfj5F9C5c8DICP4p3KTlA83NoWAi6hw7BiXXMpGCIKtKS4u7VRnS5r+sOQ0Pg86cAZ4/NwKYNyVoyDd6e0P1ZVQT7JASFyL+OAiZ6WKPQjI8Gsn/ByERnhVKXfEugQ4GkJkJFBezJB7bObFh8cVCNvBcikw6KeLXRZwEcnsqKoph09LbWD0OfDCRuuxxVAN7CS+TLSy0nRdh5CghW0iK+xQvwcHE2Hd+PkgmqlxPAC+SAflTJNG0ugpKbFqinEy+JUuAH5nYD98DPEFFbZWXD5R8B2za5HaDcZDcLC/cQ4jvF+K/syu9fx9YtcooTwP9wPh47N9fcZD81FTr0NwoKbHmVN8AtWGDcYvGh2/fjq9BcsxDkJ1lggWVl0NxdFNz51qSkhLIhGNbV7Nmga5cMRNaHTqUcNNu7/EtwJNKMRmSo1yz5yD2EoqjK7EpKPEYbPecNEEFvBHnzyR5iuTRX4B4j+SQTiKE9P9rxH8LjitxSXXwZHa+uEhNRTBfBzNmIK3AaYCjFy9GOkHzJpKj16xBOoEkkvp4FexPk50Af2AnQNJDffIkUt6LMD+/rJ4ksQrubh04kNIqm2258N0tU3ifTh6k4j7i+MGDNOLaRwwU7onZseWd0lQgbHZsL1wIKhwoKubeOK/5ZEPGw8m6amuzi13OyJL6A15+OfAyjAoKQIsWgXhfXK9eHXNx8DekdRuOWOOFkgAAAABJRU5ErkJggg=="
              alt="graphql"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
              alt="aws"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/GCP-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
              alt="gcp"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white"
              alt="gcp"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="docker"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
              alt="kubernetes"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"
              alt="github-actions"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white"
              alt="circleci"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-10/12 flex flex-wrap justify-center mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Automated Testing
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
              alt="jest"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"
              alt="cypress"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white"
              alt="mocha"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "Workflow Schedular Runtime",
      date: "Feb 2023",
      link: "https://github.com/gurbaj5124871/workflow-schedular-runtime",
      description: [
        "Service to schedule tasks/jobs and process them in background at scale",
      ],
      domains: ["Temporal", "NodeJS", "NestJS", "Typescript", "PostgreSQL"],
    },
    {
      name: "URL Shortener",
      date: "Dec 2022",
      link: "https://github.com/gurbaj5124871/url-shortener",
      description: [
        "URL Shortener - gRPC based microservice implemented using GO and Apache Ignite",
      ],
      domains: ["Go", "gRPC", "Apache Ignite", "tinyurl"],
    },
    {
      name: "Sitemaps Automation",
      date: "Aug 2022",
      link: "https://github.com/gurbaj5124871/sitemap-service",
      description: [
        "Automated sitemaps pipeline microservice implemented using nodeJS, nestJS, postgreSQL, apache kafka and aws s3",
      ],
      domains: [
        "NodeJS",
        "Typescript",
        "Kafka",
        "PostgreSQL",
        "Prisma.io",
        "AWS S3",
      ],
    },
    {
      name: "IoT Chat",
      date: "May 2019",
      link: "https://github.com/gurbaj5124871/chat-microservice-mqtt-broker",
      description: [
        "MQTT broker pub/sub based chat service which can deliver super light packets over internet",
      ],
      domains: ["MQTT", "NodeJS", "Javascript", "Cassandra"],
    },
  ];

  const tag_colors = {
    Javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Open Source Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => {
        const projectNameFromLink = project.link.split("/");
        const projectName = projectNameFromLink[projectNameFromLink.length - 1];
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base md:text-lg mr-2">
                    {project.name.toLowerCase()}
                  </div>
                  <iframe
                    src={`https://ghbtns.com/github-btn.html?user=bhaskatripathi&repo=${projectName}&type=star&count=true`}
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title={project.name.toLowerCase() + "-star"}
                  ></iframe>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      const borderColorClass = `border-${tag_colors[domain]}`;
                      const textColorClass = `text-${tag_colors[domain]}`;

                      return (
                        <span
                          key={index}
                          className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/CV.pdf"
      title="Gurbaj resume"
      frameBorder="0"
    ></iframe>
  );
}

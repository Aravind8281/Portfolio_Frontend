import React, { useState } from "react";
import "./Assets/home.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const handleSkillIconClick = (category) => {
    setSelectedCategory(category);
  };

  const skillsData = {
    frontend: {
      title: "Frontend",
      skills: {
        "Html": 80,
        "Css": 80,
        "Bootstrap": 80,
        "React JS": 60,
      },
    },
    backend: {
      title: "Backend",
      skills: {
        "Node.js": 60,
        "MongoDB": 60,
        "MySQL": 60,
        "JQuery": 60,
      },
    },
    uiux: {
      title: "UI/UX",
      skills: {
        "CANVA": 90,
        "FIGMA": 70,
        "Illustrator": 70,
        "Prototyping": 65,
      },
    },
    cloud: {
      title: "Cloud",
      skills: {
        AWS: 80,
      },
    },
    ml: {
      title: "Machine Learning",
      skills: {
        Pandas: 70,
        Numpy: 70,
        Scikit: 70,
        Tensorflow: 60,
        MatPlotLib: 60,
      },
    },
    bigdata: {
      title: "Big Data",
      skills: {
        "Hadoop": 60,
        "Spark": 50,
        "Flume" : 60,
        "Kafka": 40,
        "PowerBI": 60,
      },
    },
    tools: {
      title: "Tools",
      skills: {
        "Blender": 40,
        "Premiere_Pro": 70,
        "UNITY": 50,
        "Wordpress": 70,
        "Git": 70,
        "GitHub : ": 90,
        "Firebase": 60,
      },
    },
  };

  const renderSkillsInfo = () => {
    const categoryData = skillsData[selectedCategory];

    if (!categoryData) {
      return null;
    }

    return (
      <div className={`${selectedCategory} skills-info-container`}>
        <h5>{categoryData.title}</h5>
        {Object.entries(categoryData.skills).map(([skill, progress]) => (
          <div key={skill} className="progress-container">
            <p>{skill}</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="head-containers">
      <div className="overall">
        <div className="head-container">
          <div className="logo-container">
            <div className="a">Aravind</div>
            <div className="v">Venkatachalam</div>
          </div>
          <div className="img-container"></div>
        </div>
        <div className="body-container">
          <div className="skills">
            <div className="skills-img-container">
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("frontend")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/brand-logo-front-end-web-development-front-and-back-ends-png-favpng-7fy8uWmM5KjVzFrDvgkrhU21c-removebg-preview.png?alt=media&token=c1b32893-292f-4a14-a095-8c3c5cad3b48"
                  alt="frontend"
                />
              </div>
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("backend")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/backend-database-user-monochrome-black-symbol-removebg-preview.png?alt=media&token=120efc1d-0ab2-42dc-a25e-6336130b65ee"
                  alt="frontend"
                />
              </div>
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("uiux")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/image_processing20210619-28144-1w9xqdt.png?alt=media&token=600eb2ee-215b-4eaa-94e0-3218ad2e8a95"
                  alt="frontend"
                />
              </div>
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("cloud")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/cloud.png?alt=media&token=705b7982-5363-41fd-9a75-c835c2312a9a"
                  alt="frontend"
                />
              </div>
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("ml")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/3882459-removebg-preview.png?alt=media&token=dd6ee9f6-215b-4dfa-8922-44d03fb48aa5"
                  alt="frontend"
                />
              </div>
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("bigdata")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/data-icon-1-removebg-preview.png?alt=media&token=d45138e8-5f61-4289-8a96-58a3e74b29ff"
                  alt="frontend"
                />
              </div>
              <div
                className="skills-container"
                onClick={() => handleSkillIconClick("tools")}
              >
                <img
                  className="skill-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-81de0.appspot.com/o/tools.png?alt=media&token=ed6142f7-4289-49eb-9f5e-69e55a7ffd20"
                  alt="frontend"
                />
              </div>

            </div>
            <div className="skills-info">{renderSkillsInfo()}</div>
          </div>
          <div className="info">
            <h4>
              " Greetings, I am Aravind Venkatachalam, a young and dedicated
              developer with a profound passion for acquiring knowledge in
              cutting-edge technologies. My journey into the digital realm began
              in childhood, fueled by a relentless curiosity about how computers
              operate. Holding a Bachelor of Engineering in Computer Science, I
              have amassed extensive foundational knowledge in computer science,
              complemented by expertise in machine learning, web development, big
              data, and cloud computing. While I recognize the strength that
              specialization brings, I am confident that focused training can
              swiftly elevate me to a professional level in any given field. I
              view my explorative nature as a potent asset, empowering me as a
              Multidimensional person for your endeavors"
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

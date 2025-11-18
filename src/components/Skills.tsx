import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "ReactJs", level: 20 },
        { name: "Tailwind CSS", level: 40 },
        { name: "JavaScript", level: 70 },
        { name: "CSS", level: 80 },
        { name: "HTML", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "PHP", level: 60 },
        { name: "MySQL", level: 50 }
      ]
    },
    {
      title: "CMS & E-commerce",
      skills: [
        { name: "WordPress", level: 93 },
        { name: "Shopify", level: 89 },
        { name: "WooCommerce", level: 91 },
        { name: "Custom Themes", level: 94 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring your ideas to life.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/40 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git & GitHub",  "MongoDB",
              "Sass/SCSS", "Figma", "Photoshop", "Bootstrap",

            ].map((tech, index) => (
              <span
                key={index}
                className="bg-slate-800/30 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const Technologies = () => {
  return (
    <div className="mt-5">
      <div>
        <h3 className="text-bold underline underline-offset-8 mb-5 decoration-4 text-gray-800 dark:text-gray-400">
          TECHS
        </h3>

        <div className="flex items-center justify-around">
          <div>
            {/* C# */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              title="C#"
              proficiency=""
            />

            {/* Javascript */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              title="Javascript"
              proficiency=""
            />

            {/* Typescript */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              title="Typescript"
              proficiency=""
            />

            {/* Nodejs */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              title="Nodejs"
              proficiency=""
            />

            {/* Dotnet Core */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
              title="Dotnet Core"
              proficiency=""
            />

            {/* Tailwindcss */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              title="Tailwindcss"
              proficiency=""
            />

            {/* HTML */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              title="HTML"
              proficiency=""
            />

            {/* SQL Server */}
            <TechItem
              iconClassName="devicon-microsoftsqlserver-plain text-5xl flex-1"
              title="SQL Server"
              proficiency=""
            />

            {/* VS Code */}
            <TechItem
              iconClassName="devicon-visualstudio-plain text-5xl text-blue-400 flex-1"
              title="VS Code"
              proficiency=""
            />
          </div>

          <div>
            {/* CSS */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              title="CSS"
              proficiency=""
            />

            {/* Bootstrap */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              title="Bootstrap"
              proficiency=""
            />

            {/* Linux */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              title="Linux"
              proficiency=""
            />

            {/* Postgresql */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              title="Postgresql"
              proficiency=""
            />

            {/* MongoDb */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              title="MongoDb"
              proficiency=""
            />

            {/* Express */}
            <TechItem
              iconClassName="devicon-express-original text-5xl flex-1"
              title="Express"
              proficiency=""
            />

            {/* GIT */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              title="GIT"
              proficiency=""
            />

            {/* GitHub */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              title="GitHub"
              proficiency=""
            />

            {/* Vim */}
            <TechItem
              imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"
              title="Vim"
              proficiency=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TechItem = ({ imgSrc, iconClassName, title, proficiency }) => {
  return (
    <div className="flex items-center mt-2 p-2 rounded-md bg-bg_light_navbar dark:bg-bg_message hover:animate-jump">
      {imgSrc && <img src={imgSrc} className="w-12 mr-5 flex-1" />}
      {iconClassName && <i className={iconClassName}></i>}

      <div className="flex flex-col flex-1">
        <p className="font-bold">{title}</p>
        <span className="font-thin text-sm dark:text-gray-400 text-gray-700">{proficiency}</span>
      </div>
    </div>
  );
};

export default Technologies;

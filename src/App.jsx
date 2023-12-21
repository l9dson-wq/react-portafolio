import GetInTouch from './GetInTouch.jsx'
import ILove from './ILove.jsx'
import OnTheWeb from './OnTheWeb.jsx'
import Projects from './projects.jsx'
import ProjectsPreview from './ProjectsPreview.jsx'
import Techonologies from './Techs.jsx'
import DarkCat from './images/illustrations/black_cat.png'
import lightCat from './images/illustrations/light_cat.png'
import Pfp from './images/illustrations/pfp.jpeg'

function App() {
  return (
    <>
      <Projects />

      <div className="bg-bg_light_body dark:bg-bg_dark dark:text-white max-w-full sm:max-w-3xl mx-auto animate-fade animate-ease-in" id="homeView">
        <div className="max-w-full sm:max-w-body mx-auto p-4 sm:p-0">

          <div>
            <img src={DarkCat} className="animate-fade dark:block hidden mx-auto w-72" />
            <img src={lightCat} className="animate-fade dark:hidden block mx-auto w-72" />
            <div className="dark:bg-bg_message dark:text-white bg-bg_light_navbar text-center rounded-md p-3 m-2">
              A software developer base in Dominican Republic
            </div>
          </div>

          <div className="flex justify-center items-center flex-col sm:align-top sm:justify-between sm:flex-row mt-10 sm:items-start">
            <div className="flex flex-col text-center sm:text-start">
              <h3 className="text-3xl font-semibold" id="aboutMe">Andelson Lopez Ysabel</h3>
              <span className="dark:text-slate-300 text-gray-800">Software developer</span>
            </div>
            <img src={Pfp} alt="" className="rounded-full w-28 mt-5 sm:mt-0" />
          </div>

          <h3 className="text-bold underline underline-offset-8 mb-5 decoration-4 text-gray-800 dark:text-gray-400">ABOUT ME</h3>
          <p className="text-lg"><span className="ml-5 text-blue-600 dark:text-blue-400">Passionate software developer</span>, always interested in finding new things to learn, currently studying and improving to more in programming both as backend and fronted (as far as possible of course). Always trying to create new projects with cutting edge technologies in the industry. It also highlights the taste for pizza and video games.</p>

          <span id="technologies"></span>
          <br />
          <br />
          <Techonologies />

          <br />
          <br />
          <ILove />

          <br />
          <br />
          <OnTheWeb />

          <span id="projectsPreview"></span>
          <br />
          <br />
          <ProjectsPreview />

          <br />
          <br />
          <GetInTouch />
        </div>
      </div>
    </>
  )
}

export default App
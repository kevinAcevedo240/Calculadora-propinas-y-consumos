import linkedinSVG from "../assets/linkedin-svgrepo-com.svg";
import githubSVG from "../assets/github-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="flex h-16 items-center rounded-lg bg-gray-900 m-3">
  <div className="flex w-full items-center justify-between px-7 text-[13px] font-medium">
    <div className="text-gray-400 dark:text-night-300">
      <span className="text-xl mr-2 lg:text-xl">2024©</span>
      <a
        href="https://github.com/kevinAcevedo240"
        target="_blank"
        className="text-xl font-normal text-white hover:text-primary-500 lg:text-2xl dark:text-night-100 dark:hover:text-primary-500">
        <b>Kevin Acevedo</b>
      </a>
    </div>
    <ul className="flex text-gray-500 space-x-2 dark:text-night-300">
      <li className="effect hover:text-primary-500 p-1 rounded-lg">
        <a href="https://www.linkedin.com/in/kevin-julian-acevedo-salazar/" target="_blank" className="text-blue-600 hover:text-blue-800">
        <img src={linkedinSVG} alt="LinkedIn" className="w-10 bg-white rounded-lg p-1"/>
        </a>
      </li>
      <li className="effect hover:text-primary-500 p-1 rounded-lg">
        <a href="https://github.com/kevinAcevedo240" target="_blank" className="text-gray-600 hover:text-gray-800">
        <img src={githubSVG} alt="Github" className="w-10 bg-white rounded-lg p-1"/>
        </a>
      </li>

    </ul>
  </div>
</footer>
  )
}

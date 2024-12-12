import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-4">{project.date}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            <FaExternalLinkAlt className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}


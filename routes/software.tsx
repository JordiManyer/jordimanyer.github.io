import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";

interface Project {
  title: string;
  description: string;
  link: string;
  role?: string;
}

export default function Software() {
  const projects: Project[] = [
    {
      title: "Gridap.jl ecosystem",
      description:
        "A next-generation finite element framework in Julia for the grid-based approximation of partial differential equations. The framework provides a high-level API that allows users to write FEM code that closely resembles the mathematical notation.",
      link: "https://github.com/gridap/Gridap.jl",
      role: "Owner and lead developer",
    },
    {
      title: "GridapSolvers.jl",
      description:
        "A collection of solvers and preconditioners specifically designed for the Gridap ecosystem. This package provides efficient numerical methods for solving large-scale linear and nonlinear systems arising from FEM discretizations.",
      link: "https://github.com/gridap/GridapSolvers.jl",
      role: "Founder, owner and lead developer",
    },
  ];

  return (
    <>
      <Head
        title="Software"
        description="Open source software projects developed by Jordi Manyer"
        type="website"
        path="/software"
      />
      <Layout active="/software">
        <div class="space-y-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Software Projects
          </h1>

          <div class="prose dark:prose-invert max-w-none">
            <section>
              <p class="text-gray-700 dark:text-gray-300">
                I am passionate about developing high-quality, open-source scientific software.
                My projects focus on finite element methods for partial differential equations,
                with emphasis on high-performance computing. Here are some of my main contributions:
              </p>
            </section>

            <section>
              <div class="not-prose">
                <div class="grid gap-6">
                  {projects.map((project) => (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {project.title}
                      </h3>
                      <p class="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      {project.role && (
                        <p class="text-gray-500 dark:text-gray-400 mb-2">
                          Role: {project.role}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

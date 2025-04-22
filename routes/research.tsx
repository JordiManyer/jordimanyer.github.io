import Layout from "../components/Layout.tsx";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default function Research() {
  const projects: Project[] = [
    {
      title: "Gridap.jl",
      description:
        "A next-generation finite element framework in Julia for the grid-based approximation of partial differential equations. The framework provides a high-level API that allows users to write FEM code that closely resembles the mathematical notation.",
      link: "https://github.com/gridap/Gridap.jl",
      tags: ["Numerical Methods", "PDEs", "Finite Elements", "Julia"],
    },
    {
      title: "GridapDistributed.jl",
      description:
        "A parallel distributed-memory extension for Gridap.jl, enabling large-scale numerical simulations across multiple computational nodes. This package implements efficient domain decomposition methods and parallel solvers.",
      link: "https://github.com/gridap/GridapDistributed.jl",
      tags: ["Distributed Computing", "High Performance", "Parallel Computing"],
    },
    {
      title: "GridapSolvers.jl",
      description:
        "A collection of solvers and preconditioners specifically designed for the Gridap ecosystem. This package provides efficient numerical methods for solving large-scale linear and nonlinear systems arising from FEM discretizations.",
      link: "https://github.com/gridap/GridapSolvers.jl",
      tags: ["Numerical Solvers", "Preconditioners", "Linear Algebra"],
    },
  ];

  return (
    <Layout active="/research">
      <div class="space-y-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Research
        </h1>

        <div class="prose dark:prose-invert max-w-none">
          <section>
            <h2 class="text-gray-900 dark:text-gray-100">Current Research</h2>
            <p class="text-gray-700 dark:text-gray-300">
              My research focuses on developing efficient numerical methods and
              software tools for solving partial differential equations. I work
              at the intersection of numerical analysis, scientific computing,
              and high-performance computing, with a particular emphasis on
              finite element methods and their parallel implementations.
            </p>
          </section>

          <section>
            <h2 class="text-gray-900 dark:text-gray-100">Research Projects</h2>

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
                    <div class="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-gray-900 dark:text-gray-100">Research Methods</h2>
            <p class="text-gray-700 dark:text-gray-300">
              My research methodology combines theoretical analysis with
              practical implementation:
            </p>
            <ul class="text-gray-700 dark:text-gray-300">
              <li>
                Development of numerical methods for PDEs with focus on
                efficiency and accuracy
              </li>
              <li>
                Implementation of parallel algorithms for distributed computing
                environments
              </li>
              <li>
                Design and development of scientific software with emphasis on
                usability and performance
              </li>
              <li>
                Application of modern software engineering practices to
                scientific computing
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}

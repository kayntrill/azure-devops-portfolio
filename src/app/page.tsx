'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise CI/CD Automation",
    description:
      "Designed and implemented a scalable CI/CD pipeline for a Fortune 500 company, integrating Azure Pipelines, Kubernetes, and automated security scans. Reduced deployment time by 60% and improved release reliability.",
    tech: ["Azure Pipelines", "Kubernetes", "Terraform", "SonarQube"],
    link: "https://github.com/sample/enterprise-cicd",
  },
  {
    title: "Cloud Migration Accelerator",
    description:
      "Led the migration of 50+ legacy applications to Azure, automating infrastructure provisioning and deployment with Bicep and Azure DevOps. Enabled zero-downtime cutovers and robust monitoring.",
    tech: ["Azure DevOps", "Bicep", "App Insights", "ARM Templates"],
    link: "https://github.com/sample/cloud-migration",
  },
  {
    title: "DevSecOps Enablement Platform",
    description:
      "Built a self-service platform for secure app delivery, integrating policy-as-code, automated compliance, and secrets management. Empowered teams to deploy securely and autonomously.",
    tech: ["Azure Key Vault", "Policy as Code", "GitHub Actions", "Azure Monitor"],
    link: "https://github.com/sample/devsecops-platform",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 transition-colors duration-500">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionVariants}
        className="max-w-2xl w-full px-6 py-16 rounded-3xl shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex flex-col items-center mb-12 mt-8"
      >
        <Image
          src="/IMG_9294.JPG"
          alt="Azure DevOps Engineer"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-600 shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
          Kundai Nyatondo
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4 text-center">
          Azure DevOps Engineer
        </h2>
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 text-center">
          Passionate about building robust, scalable CI/CD pipelines and cloud-native solutions. 7+ years of experience automating deployments, optimizing workflows, and enabling high-performing teams on Azure. Certified Azure DevOps Expert. Advocate for DevOps best practices, security, and continuous improvement.
        </p>
        <Link href="#projects" className="inline-block px-6 py-3 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none">
          View Projects
        </Link>
      </motion.section>
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
        className="w-full max-w-4xl mx-auto px-4 py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5, type: "spring" }}
              className="block rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-md transition-colors hover:bg-blue-50 dark:hover:bg-blue-950 group focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-blue-700 dark:text-blue-400 text-xs font-semibold">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
        className="w-full max-w-3xl mx-auto px-4 py-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Skills & Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Azure DevOps", color: "bg-blue-700 text-white" },
            { name: "CI/CD", color: "bg-blue-500 text-white" },
            { name: "Kubernetes", color: "bg-sky-600 text-white" },
            { name: "Terraform", color: "bg-indigo-700 text-white" },
            { name: "Bicep", color: "bg-cyan-700 text-white" },
            { name: "GitHub Actions", color: "bg-gray-900 text-white" },
            { name: "Azure ARM", color: "bg-blue-900 text-white" },
            { name: "Docker", color: "bg-blue-400 text-white" },
            { name: "PowerShell", color: "bg-slate-800 text-white" },
            { name: "YAML", color: "bg-yellow-500 text-black" },
            { name: "Monitoring", color: "bg-green-700 text-white" },
            { name: "Security", color: "bg-red-700 text-white" },
            { name: "IaC", color: "bg-purple-700 text-white" },
            { name: "Agile", color: "bg-pink-600 text-white" },
          ].map((skill, idx) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * idx, duration: 0.4 }}
              className={`px-4 py-2 rounded-full font-semibold shadow text-sm ${skill.color} focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              tabIndex={0}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
        className="w-full max-w-xl mx-auto px-4 py-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Contact
        </h2>
        <div className="bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-800">
          <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out!'); }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-slate-700 dark:text-slate-300">Or email me at </span>
            <a href="mailto:kundai.nyatondo@outlook.com" className="text-blue-700 dark:text-blue-400 font-semibold underline">kundai.nyatondo@outlook.com</a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

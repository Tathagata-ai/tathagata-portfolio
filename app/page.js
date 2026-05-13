import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800 px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

  {/* Logo / Name */}
  <h1 className="text-2xl font-bold tracking-wide text-white">
    Tathagata
  </h1>

  {/* Navigation Links */}
  <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base">

    <a href="#about" className="hover:text-white transition duration-300">
      About
    </a>

    <a href="#projects" className="hover:text-white transition duration-300">
      Projects
    </a>

    <a href="#skills" className="hover:text-white transition duration-300">
      Skills
    </a>

    <a href="#certificates" className="hover:text-white transition duration-300">
      Certificates
    </a>

    <a href="#resume" className="hover:text-white transition duration-300">
      Resume
    </a>

    <a href="#contact" className="hover:text-white transition duration-300">
      Contact
    </a>

  </div>
</nav>

      {/* Hero Section */}
<section className="flex flex-col items-center text-center py-28 px-6">

  {/* Profile Image */}
  <div className="mb-8">
    <Image
      src="/pp.png"
      alt="Tathagata Bhattacharyya"
      width={170}
      height={170}
      className="rounded-full border-4 border-gray-700 shadow-2xl"
    />
  </div>

  {/* Name */}
  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
    Tathagata Bhattacharyya
  </h1>

  {/* Subtitle */}
  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
    Technical Trainer | Learning & Development Professional |
    AI Enthusiast | Data Analytics Practitioner
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-4">

    <a
      href="#projects"
      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
    >
      View Projects
    </a>

    <a
      href="/resume.pdf"
      download
      className="border border-gray-600 px-6 py-3 rounded-full hover:border-white transition duration-300"
    >
      Download CV
    </a>

  </div>

</section>

      {/* Projects */}
      {/* Projects */}
<section id="projects" className="px-8 py-16 bg-gray-900">
  <h2 className="text-3xl font-bold mb-10 text-center">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Ollama Chatbot */}
    <div className="border border-gray-700 p-6 rounded-lg hover:border-white transition">
      <h3 className="text-xl font-semibold mb-2">
        Local AI Chatbot using Ollama & Tkinter
      </h3>

      <p className="text-gray-400 mb-4">
        Developed a desktop-based AI chatbot using Python, Tkinter, and Ollama to enable local interaction with large language models without relying on cloud APIs.
      </p>

      <p className="text-sm text-gray-500 mb-4">
        Technologies: Python, Tkinter, Ollama, Local LLMs
      </p>

      <a
        href="https://github.com/Tathagata-ai/ollama-tkinter-chatbot"
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </div>

    {/* AI Weather Agent */}
    <div className="border border-gray-700 p-6 rounded-lg hover:border-white transition">
      <h3 className="text-xl font-semibold mb-2">
        AI Weather Agent
      </h3>

      <p className="text-gray-400 mb-4">
        Built an AI-powered weather assistant capable of generating intelligent weather responses using APIs, automation workflows, and conversational AI concepts.
      </p>

      <p className="text-sm text-gray-500 mb-4">
        Technologies: Python, APIs, AI Agents, OpenAI
      </p>

      <a
        href="https://github.com/Tathagata-ai/ai-weather-agent"
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </div>

    {/* Power BI Dashboard */}
    <div className="border border-gray-700 p-6 rounded-lg hover:border-white transition">
      <h3 className="text-xl font-semibold mb-2">
        ESPN Cricinfo Analytics Dashboard
      </h3>

      <p className="text-gray-400 mb-4">
        Developed a Power BI analytics dashboard using ESPN Cricinfo data to visualize player statistics, match insights, and cricket performance analytics.
      </p>

      <p className="text-sm text-gray-500 mb-4">
        Technologies: Power BI, Data Analytics, Visualization, Cricket Analytics
      </p>

      <a
        href="https://github.com/Tathagata-ai/espn_crickinfo_Analysis"
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </div>
    {/* Screen Time Analysis */}
<div className="border border-gray-700 p-6 rounded-lg hover:border-white transition">
  <h3 className="text-xl font-semibold mb-2">
    Indian Kids Screen Time Analysis
  </h3>

  <p className="text-gray-400 mb-4">
    Conducted a data analysis project focused on screen time patterns among Indian children to identify behavioral trends, usage insights, and digital consumption patterns.
  </p>

  <p className="text-sm text-gray-500 mb-4">
    Technologies: Python, Data Analytics, Visualization, Research Analysis
  </p>

  <a
    href="https://github.com/Tathagata-ai/indian-kids-screen-time-analysis"
    target="_blank"
    className="text-blue-400 hover:underline"
  >
    View Project →
  </a>
</div>
{/* Job Market Analysis */}
<div className="border border-gray-700 p-6 rounded-lg hover:border-white transition">
  <h3 className="text-xl font-semibold mb-2">
    Job Market Analysis
  </h3>

  <p className="text-gray-400 mb-4">
    Conducted a data-driven analysis of job market trends to identify high-demand skills, technology trends, and evolving industry requirements across different domains.
  </p>

  <p className="text-sm text-gray-500 mb-4">
    Technologies: Python, Data Analytics, Visualization, Market Research
  </p>

  <a
    href="https://github.com/Tathagata-ai/jobMarketAnalysis"
    target="_blank"
    className="text-blue-400 hover:underline"
  >
    View Project →
  </a>
</div>

  </div>
</section>

      {/* Skills */}
      {/* Skills */}
<section id="skills" className="px-8 py-16 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">Skills & Expertise</h2>

  <div className="grid md:grid-cols-3 gap-6 text-gray-300">

    {/* Technical Skills */}
    <div className="border border-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
      <ul className="space-y-2">
        <li>Python, Java, R, SQL</li>
        <li>Power BI, Tableau</li>
      </ul>
    </div>

    {/* AI & Analytics */}
    <div className="border border-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">AI & Analytics</h3>
      <ul className="space-y-2">
        <li>Generative AI</li>
        <li>AI Agents</li>
        <li>Data Analytics</li>
      </ul>
    </div>

    {/* Training & Leadership */}
    <div className="border border-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Training & Leadership</h3>
      <ul className="space-y-2">
        <li>Curriculum Design</li>
        <li>Training Management</li>
        <li>Mentoring</li>
      </ul>
    </div>

  </div>
</section>

      {/* Certificates */}
      <section id="certificates" className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Generative AI for Working Professional
            </h3>
            <p className="text-gray-400 mb-4">
              Issued by IIT Patna | 2026
            </p>
            <a href="/certificates/iit_genai.pdf" target="_blank" className="text-blue-400 hover:underline">
              View Certificate →
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Google Data Analytics Professional Certificate
            </h3>
            <p className="text-gray-400 mb-4">
              Issued by Coursera | 2025
            </p>
            <a href="/certificates/google.pdf" target="_blank" className="text-blue-400 hover:underline">
              View Certificate →
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Data Science & Analytics (Gold)
            </h3>
            <p className="text-gray-400 mb-4">
              Issued by NASSCOM FutureSkills | 2026
            </p>
            <a href="/certificates/data-science.pdf" target="_blank" className="text-blue-400 hover:underline">
              View Certificate →
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Python using AI Workshop
            </h3>
            <p className="text-gray-400 mb-4">
              Issued by AI for Techies | 2025
            </p>
            <a href="/certificates/Certificate.pdf" target="_blank" className="text-blue-400 hover:underline">
              View Certificate →
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Data Analytics Certification
            </h3>
            <p className="text-gray-400 mb-4">
              Issued by Skillsetmaster | 2026
            </p>
            <a href="/certificates/data-analytic.pdf" target="_blank" className="text-blue-400 hover:underline">
              View Certificate →
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Collaboration & Problem-Solving Training
            </h3>
            <p className="text-gray-400 mb-4">
              Issued by PA Team | 2025
            </p>
            <a href="/certificates/problem-solving.pdf" target="_blank" className="text-blue-400 hover:underline">
              View Certificate →
            </a>
          </div>

        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="px-8 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>

        <a
          href="/resume.pdf"
          download
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Download CV
        </a>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="px-8 py-20 bg-gray-950 text-center mt-10"
>
  <h2 className="text-4xl font-bold mb-10 tracking-tight">
    Contact
  </h2>

  <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
    I’m always open to discussing technical training opportunities,
    AI-driven learning solutions, analytics projects, and collaboration
    opportunities.
  </p>

  <div className="flex flex-col gap-6 text-gray-300 text-lg">

    {/* Email */}
<div>
  <p className="font-semibold text-white mb-2">
    Email
  </p>

  <div className="flex flex-col gap-2">

    <a
      href="mailto:tathagata2009@gmail.com"
      className="text-blue-400 hover:underline"
    >
      tathagata2009@gmail.com
    </a>

    <a
      href="mailto:tathagata.mail@gmail.com"
      className="text-blue-400 hover:underline"
    >
      tathagata.mail@gmail.com
    </a>

  </div>
</div>

    {/* LinkedIn */}
<div>
  <p className="font-semibold text-white mb-1">
    LinkedIn
  </p>

  <a
    href="https://www.linkedin.com/in/tathagata2009/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    View LinkedIn Profile
  </a>
</div>

    {/* GitHub */}
<div>
  <p className="font-semibold text-white mb-1">
    GitHub
  </p>

  <a
    href="https://github.com/Tathagata-ai"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    View GitHub Profile
  </a>
</div>

  </div>
</section>

    </main>
  );
}
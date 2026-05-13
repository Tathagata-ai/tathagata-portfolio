import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Tathagata</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#certificates" className="hover:text-white">Certificates</a>
          <a href="#resume" className="hover:text-white">Resume</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center py-20">
        <Image
          src="/pp.png"
          alt="Tathagata Bhattacharyya"
          width={150}
          height={150}
          className="rounded-full border-4 border-white mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">
          Tathagata Bhattacharyya
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          Technical Trainer | Learning & Development Professional 
        </p>
      </div>

      {/* About Section */}
      <section id="about" className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          Results-driven Technical Trainer and Learning & Development professional with over 15 years of experience in Python, Java, Data Analytics, RPA, and Generative AI.

          <br /><br />

          I have successfully trained 500+ learners, achieving up to 100% certification success rates by simplifying complex concepts into practical, hands-on learning experiences.

          <br /><br />

          Recently, I have expanded into AI solution development, building intelligent agents and analytics systems to bridge the gap between learning and real-world application.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-16 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI Chatbot for Training</h3>
            <p className="text-gray-400">
              Developed an AI chatbot to assist learners with real-time query resolution using Python and Generative AI.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Training Analytics Dashboard</h3>
            <p className="text-gray-400">
              Built a dashboard to track learner performance, certification success rates, and engagement metrics.
            </p>
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

      {/* Contact */}
      <section id="contact" className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-300 mb-4">
          Email: your@email.com
        </p>

        <p className="text-gray-300">
          LinkedIn: linkedin.com/in/yourprofile
        </p>
      </section>

    </main>
  );
}
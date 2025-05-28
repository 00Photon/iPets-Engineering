import { Lightbulb, TrendingUp, Users, Award, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const benefits = [
    {
      icon: <Lightbulb className="h-8 w-8 text-ipets-cyan" />,
      title: "Innovation Culture",
      description: "Work with cutting-edge technologies and contribute to innovative engineering solutions",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ipets-red" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career advancement pathways",
    },
    {
      icon: <Users className="h-8 w-8 text-ipets-light-blue" />,
      title: "Collaborative Environment",
      description: "Work alongside experienced professionals in a supportive team environment",
    },
    {
      icon: <Award className="h-8 w-8 text-ipets-cyan" />,
      title: "Professional Development",
      description: "Access to training programs, certifications, and industry conferences",
    },
  ]

  const opportunities = [
    {
      title: "Project Engineers",
      department: "Engineering",
      description: "Lead engineering design and project execution for complex industrial projects",
    },
    {
      title: "Process Engineers",
      department: "Engineering",
      description: "Design and optimize industrial processes for oil & gas and power sectors",
    },
    {
      title: "Project Managers",
      department: "Project Management",
      description: "Manage end-to-end project delivery ensuring quality, schedule, and budget compliance",
    },
    {
      title: "Procurement Specialists",
      department: "Procurement",
      description: "Manage strategic sourcing and vendor relationships for major projects",
    },
    {
      title: "Construction Supervisors",
      department: "Construction",
      description: "Oversee construction and installation activities ensuring safety and quality",
    },
    {
      title: "Commissioning Engineers",
      department: "Commissioning",
      description: "Lead system commissioning and performance verification activities",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-ipets-dark-blue to-blue-800 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200">
              Build your career with a leading EPICOM firm and be part of innovative engineering solutions that shape
              the future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Why Choose iPets Engineering?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team where innovation meets excellence. We offer a culture of continuous learning,
              professional growth, and meaningful contributions to complex engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-ipets-dark-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Culture */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-6">Innovation at the Core</h2>
              <p className="text-lg text-gray-600 mb-6">
                At iPets Engineering, innovation isn't just a buzzword—it's how we approach every project and challenge.
                Our team members are encouraged to think creatively, propose new solutions, and contribute to the
                advancement of engineering practices.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We invest in the latest technologies, provide access to cutting-edge tools, and create an environment
                where innovative ideas can flourish and make a real impact on our projects and the industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ipets-cyan rounded-full"></div>
                  <span className="text-gray-700">Access to latest engineering software and tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ipets-cyan rounded-full"></div>
                  <span className="text-gray-700">Participation in industry research and development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ipets-cyan rounded-full"></div>
                  <span className="text-gray-700">Collaboration with leading technology partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ipets-cyan rounded-full"></div>
                  <span className="text-gray-700">Innovation recognition and reward programs</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-ipets-light-blue to-ipets-cyan p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Growth Opportunities</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Technical Excellence</h4>
                  <p className="text-sm opacity-90">
                    Advance your technical skills through challenging projects and mentorship
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Leadership Development</h4>
                  <p className="text-sm opacity-90">
                    Develop leadership capabilities through project management opportunities
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industry Recognition</h4>
                  <p className="text-sm opacity-90">Gain recognition as an expert in your field through our platform</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Global Exposure</h4>
                  <p className="text-sm opacity-90">
                    Work on international projects and expand your global perspective
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across our various departments and find the perfect role to advance
              your engineering career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block bg-ipets-light-blue text-ipets-dark-blue px-3 py-1 rounded-full text-sm font-medium">
                    {opportunity.department}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ipets-dark-blue mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-ipets-red hover:text-red-600 font-semibold"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best candidates while providing a positive
              experience for all applicants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ipets-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-ipets-dark-blue mb-2">Submit Application</h3>
              <p className="text-gray-600">Send your resume and cover letter to our HR team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ipets-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-ipets-dark-blue mb-2">Initial Review</h3>
              <p className="text-gray-600">Our HR team reviews your qualifications and experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ipets-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-ipets-dark-blue mb-2">Interview Process</h3>
              <p className="text-gray-600">Technical and behavioral interviews with our team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ipets-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-ipets-dark-blue mb-2">Welcome Aboard</h3>
              <p className="text-gray-600">Onboarding and integration into our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-ipets-light-blue">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our team of innovative engineers and contribute to projects that make a difference. Send your
            application today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 text-ipets-dark-blue">
              <Mail className="h-6 w-6" />
              <span className="text-lg font-semibold">hr@ipets-engineering.com</span>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact HR Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

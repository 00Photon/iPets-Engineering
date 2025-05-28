import Image from "next/image"
import { Calendar, MapPin, Users, Award } from "lucide-react"

export default function ProjectsPage() {
  const projectHighlight = {
    title: "Sapele AG Solution Project",
    description:
      "A comprehensive EPICOM project involving the design, procurement, installation, and commissioning of advanced gas processing solutions.",
    details: [
      "Complete engineering design and optimization",
      "Strategic procurement of specialized equipment",
      "Professional installation and construction management",
      "Comprehensive commissioning and testing",
      "Ongoing maintenance and support services",
    ],
    stats: [
      { label: "Project Duration", value: "18 Months", icon: <Calendar className="h-5 w-5" /> },
      { label: "Location", value: "Sapele, Nigeria", icon: <MapPin className="h-5 w-5" /> },
      { label: "Team Size", value: "45+ Engineers", icon: <Users className="h-5 w-5" /> },
      { label: "Status", value: "Successfully Completed", icon: <Award className="h-5 w-5" /> },
    ],
  }

  const projectTypes = [
    {
      title: "Oil & Gas Processing",
      description: "Refineries, gas processing plants, and petrochemical facilities",
      image: "/placeholder.svg?height=300&width=400&query=oil refinery processing plant",
    },
    {
      title: "Power Generation",
      description: "Thermal power plants, renewable energy systems, and transmission infrastructure",
      image: "/placeholder.svg?height=300&width=400&query=power generation plant with turbines",
    },
    {
      title: "Industrial Infrastructure",
      description: "Manufacturing facilities, process plants, and industrial automation systems",
      image: "/placeholder.svg?height=300&width=400&query=industrial manufacturing facility",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-ipets-dark-blue to-blue-800 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200">Delivering Complex Projects with Precision</p>
          </div>
        </div>
      </section>

      {/* Project Highlight */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Featured Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in delivering comprehensive EPICOM solutions for complex industrial projects.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-ipets-dark-blue mb-6">{projectHighlight.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{projectHighlight.description}</p>

                <div className="space-y-4 mb-8">
                  {projectHighlight.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-ipets-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {projectHighlight.stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-ipets-cyan">{stat.icon}</div>
                      <div>
                        <div className="font-semibold text-ipets-dark-blue">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=Sapele gas processing facility industrial project"
                  alt="Sapele AG Solution Project"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Project Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans across multiple industries, showcasing our versatility and expertise in
              delivering complex engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ipets-dark-blue mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Capabilities */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-6">Project Delivery Excellence</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our proven project delivery methodology ensures successful completion of complex engineering projects
                across various industries. We combine technical expertise with efficient project management to deliver
                exceptional results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ipets-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ipets-dark-blue mb-2">Planning & Design</h4>
                    <p className="text-gray-600">Comprehensive project planning and detailed engineering design</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ipets-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ipets-dark-blue mb-2">Execution</h4>
                    <p className="text-gray-600">Professional procurement, construction, and installation services</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ipets-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ipets-dark-blue mb-2">Commissioning</h4>
                    <p className="text-gray-600">Systematic testing, commissioning, and performance verification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&query=engineering team managing complex industrial project"
                alt="Project Management"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ipets-light-blue">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next engineering challenge. Our team is ready to deliver innovative solutions
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="/services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

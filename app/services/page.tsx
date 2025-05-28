import Image from "next/image"
import { Cog, ClipboardList, ShoppingCart, Wrench, CheckCircle, Settings } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Cog className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-ipets-cyan" />,
      title: "Engineering",
      description: "Comprehensive engineering design and technical solutions for complex industrial projects.",
      features: [
        "Process Engineering",
        "Mechanical Design",
        "Electrical & Instrumentation",
        "Civil & Structural Engineering",
        "Safety & Risk Assessment",
      ],
    },
    {
      icon: <ClipboardList className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-ipets-red" />,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery within budget and quality standards.",
      features: [
        "Project Planning & Scheduling",
        "Cost Management",
        "Quality Assurance",
        "Risk Management",
        "Stakeholder Coordination",
      ],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-ipets-cyan" />,
      title: "Procurement",
      description: "Strategic procurement services ensuring optimal sourcing of materials and equipment.",
      features: [
        "Vendor Selection & Management",
        "Material Sourcing",
        "Equipment Procurement",
        "Supply Chain Management",
        "Cost Optimization",
      ],
    },
    {
      icon: <Wrench className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-ipets-red" />,
      title: "Construction & Installation",
      description: "Professional construction and installation services with focus on safety and quality.",
      features: [
        "Site Preparation",
        "Equipment Installation",
        "Piping & Mechanical Works",
        "Electrical Installation",
        "Safety Management",
      ],
    },
    {
      icon: <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-ipets-cyan" />,
      title: "Commissioning & Completion",
      description: "Systematic commissioning processes ensuring optimal system performance and reliability.",
      features: [
        "System Testing",
        "Performance Verification",
        "Documentation",
        "Training & Handover",
        "Warranty Support",
      ],
    },
    {
      icon: <Settings className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-ipets-red" />,
      title: "Operation & Maintenance",
      description: "Ongoing maintenance and operational support to ensure long-term asset performance.",
      features: [
        "Preventive Maintenance",
        "Emergency Response",
        "Performance Monitoring",
        "Spare Parts Management",
        "Technical Support",
      ],
    },
  ]

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-zinc-900 to-zinc-800 text-white min-h-[60vh] sm:min-h-[50vh] flex items-center">
        <div className="container-max w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="responsive-text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Our Services</h1>
            <p className="responsive-text-xl text-zinc-300 leading-relaxed px-4 sm:px-0">
              Comprehensive EPICOM solutions covering the entire project lifecycle from initial design to ongoing
              maintenance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="responsive-text-4xl font-bold text-zinc-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Complete EPICOM Solutions
            </h2>
            <p className="responsive-text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              We provide end-to-end engineering solutions across all phases of your project, ensuring seamless
              integration and optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-modern p-6 sm:p-8 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">{service.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-zinc-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ipets-cyan rounded-full flex-shrink-0"></div>
                      <span className="text-zinc-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="responsive-text-4xl font-bold text-zinc-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Industries We Serve
            </h2>
            <p className="responsive-text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Our expertise spans across multiple industries, delivering specialized solutions tailored to each sector's
              unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-modern p-6 sm:p-8 text-center group">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/placeholder.svg?height=200&width=300&query=oil and gas industrial facility"
                  alt="Oil & Gas"
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">Oil & Gas</h3>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                Upstream, midstream, and downstream solutions including refineries, pipelines, and processing
                facilities.
              </p>
            </div>

            <div className="card-modern p-6 sm:p-8 text-center group">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/placeholder.svg?height=200&width=300&query=power generation plant with turbines"
                  alt="Power Generation"
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">Power</h3>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                Power generation facilities, transmission systems, and renewable energy projects with cutting-edge
                technology.
              </p>
            </div>

            <div className="card-modern p-6 sm:p-8 text-center group md:col-span-2 lg:col-span-1">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/placeholder.svg?height=200&width=300&query=infrastructure construction and development"
                  alt="Infrastructure"
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">Infrastructure</h3>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                Critical infrastructure projects including transportation, utilities, and industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
        <div className="container-max text-center">
          <h2 className="responsive-text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Ready to Start Your Project?</h2>
          <p className="responsive-text-xl text-zinc-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let our experienced team help you deliver your next project with precision, quality, and on schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <a href="/contact" className="btn-primary text-base sm:text-lg w-full sm:w-auto">
              Get Quote
            </a>
            <a
              href="/projects"
              className="btn-outline text-base sm:text-lg border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-700 w-full sm:w-auto"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

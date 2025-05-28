import Link from "next/link"
import { CheckCircle, Award, Users, Clock, ArrowRight, Zap, Shield, Target } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const features = [
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-ipets-cyan" />,
      title: "ISO Certified",
      description: "ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2007 certified for quality and safety",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-ipets-cyan" />,
      title: "Expert Team",
      description: "Experienced professionals delivering complex projects with precision",
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-ipets-cyan" />,
      title: "Since 1997",
      description: "Over 25 years of proven track record in EPICOM services",
    },
  ]

  const services = [
    "Engineering & Design",
    "Project Management",
    "Procurement",
    "Construction & Installation",
    "Commissioning & Completion",
    "Operation & Maintenance",
  ]

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Engineers" },
    { number: "99%", label: "Client Satisfaction" },
  ]

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white section-padding overflow-hidden min-h-[80vh] sm:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&query=abstract geometric pattern')] opacity-5"></div>
        <div className="container-max relative w-full">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-zinc-800/50 rounded-full text-xs sm:text-sm text-zinc-300 mb-6 sm:mb-8 backdrop-blur-sm">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-ipets-cyan" />
              Leading EPICOM Solutions Since 1997
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
              Innovative Engineering. <span className="text-gradient">Reliable Solutions.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-zinc-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              Leading EPICOM firm specializing in Oil & Gas, Power, and Infrastructure projects. Delivering excellence
              with comprehensive engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <Link href="/services" className="btn-primary text-base sm:text-lg w-full sm:w-auto">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary text-base sm:text-lg w-full sm:w-auto">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-zinc-200">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-zinc-100 rounded-full text-xs sm:text-sm text-zinc-600 mb-4 sm:mb-6">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-ipets-red" />
              Why Choose iPets Engineering
            </div>
            <h2 className="responsive-text-4xl font-bold text-zinc-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Excellence in Every Project
            </h2>
            <p className="responsive-text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              We combine decades of experience with innovative solutions to deliver exceptional results for our clients
              across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-modern p-6 sm:p-8 text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">{feature.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-zinc-100 rounded-full text-xs sm:text-sm text-zinc-600 mb-4 sm:mb-6">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-ipets-cyan" />
                Complete EPICOM Solutions
              </div>
              <h2 className="responsive-text-4xl font-bold text-zinc-900 mb-6 sm:mb-8">
                End-to-End Engineering Excellence
              </h2>
              <p className="responsive-text-xl text-zinc-600 mb-8 sm:mb-10 leading-relaxed">
                From initial engineering and design to final commissioning and ongoing maintenance, we provide
                comprehensive solutions for your most complex projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ipets-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-ipets-cyan" />
                    </div>
                    <span className="text-zinc-700 font-medium text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center text-ipets-red hover:text-red-600 font-semibold text-base sm:text-lg group"
              >
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-ipets-red/20 to-ipets-cyan/20 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
              <Image
                src="/placeholder.svg?height=500&width=600&query=modern engineering team working on oil and gas project blueprints"
                alt="Engineering Services"
                width={600}
                height={500}
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
        <div className="container-max text-center">
          <h2 className="responsive-text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Let's Build the Future — One Project at a Time
          </h2>
          <p className="responsive-text-xl text-zinc-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to start your next project? Our team of experts is here to provide innovative engineering solutions
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <Link href="/contact" className="btn-primary text-base sm:text-lg w-full sm:w-auto">
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="btn-outline text-base sm:text-lg border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-700 w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

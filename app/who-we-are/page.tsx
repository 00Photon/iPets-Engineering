import Image from "next/image"
import { Target, Eye, Heart, Award } from "lucide-react"

export default function WhoWeArePage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-ipets-red" />,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency",
    },
    {
      icon: <Target className="h-8 w-8 text-ipets-cyan" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering superior quality solutions",
    },
    {
      icon: <Eye className="h-8 w-8 text-ipets-light-blue" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches",
    },
    {
      icon: <Award className="h-8 w-8 text-ipets-red" />,
      title: "Sustainability",
      description: "We are committed to environmental stewardship and sustainable practices",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-ipets-dark-blue to-blue-800 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-gray-200">
              A leading EPICOM firm with over 25 years of experience in delivering innovative engineering solutions
              across Oil & Gas, Power, and Infrastructure sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-6">Our Journey Since 1997</h2>
              <p className="text-lg text-gray-600 mb-6">
                iPets Engineering was founded in 1997 with a vision to provide comprehensive engineering solutions to
                the growing industrial sector. What started as a specialized automation and control systems company has
                evolved into a full-service EPICOM firm.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have expanded our capabilities to cover the entire project lifecycle - from initial
                engineering and design through procurement, construction, installation, commissioning, and ongoing
                maintenance services.
              </p>
              <p className="text-lg text-gray-600">
                Today, we stand as a trusted partner for complex projects in Oil & Gas, Power generation, and critical
                Infrastructure, consistently delivering excellence while maintaining the highest standards of safety and
                quality.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&query=iPets Engineering company building and team of engineers"
                alt="iPets Engineering Company"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-ipets-dark-blue mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To deliver innovative, reliable, and sustainable engineering solutions that exceed our clients'
                expectations while contributing to the development of critical infrastructure and industrial
                capabilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-ipets-dark-blue mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the leading EPICOM firm in Africa, recognized for our technical excellence, innovative solutions,
                and commitment to sustainable development across all sectors we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients, partners,
              and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-ipets-dark-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Expansion */}
      <section className="section-padding bg-ipets-light-blue">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-6">Continuous Growth & Innovation</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our commitment to growth and innovation has enabled us to expand from automation and control systems to
              comprehensive EPICOM services. We continuously invest in new technologies, training, and capabilities to
              stay at the forefront of engineering excellence.
            </p>
            <p className="text-lg text-gray-700">
              With a focus on sustainability, integrity, and best practices, we are building a legacy of engineering
              excellence that will benefit future generations while meeting today's most challenging project
              requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

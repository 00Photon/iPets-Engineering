import { Shield, Leaf, Users, Target, CheckCircle, AlertTriangle } from "lucide-react"

export default function IMSPolicyPage() {
  const policies = [
    {
      icon: <Shield className="h-8 w-8 text-ipets-red" />,
      title: "Quality Management",
      description:
        "ISO 9001:2015 certified quality management system ensuring consistent delivery of high-quality services and products.",
      points: [
        "Continuous improvement processes",
        "Customer satisfaction focus",
        "Documented procedures and controls",
        "Regular management reviews",
      ],
    },
    {
      icon: <Leaf className="h-8 w-8 text-ipets-cyan" />,
      title: "Environmental Management",
      description:
        "ISO 14001:2015 environmental management system demonstrating our commitment to environmental protection.",
      points: [
        "Environmental impact assessment",
        "Waste reduction and recycling",
        "Energy efficiency initiatives",
        "Compliance with environmental regulations",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-ipets-light-blue" />,
      title: "Health & Safety",
      description: "OHSAS 18001:2007 occupational health and safety management system ensuring workplace safety.",
      points: [
        "Zero harm safety culture",
        "Comprehensive safety training",
        "Incident prevention and reporting",
        "Emergency response procedures",
      ],
    },
  ]

  const riskManagement = [
    {
      title: "Risk Identification",
      description: "Systematic identification of potential risks across all project phases",
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive evaluation of risk probability and impact",
    },
    {
      title: "Risk Mitigation",
      description: "Implementation of effective risk control measures",
    },
    {
      title: "Monitoring & Review",
      description: "Continuous monitoring and periodic review of risk management effectiveness",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-ipets-dark-blue to-blue-800 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IMS Policy</h1>
            <p className="text-xl text-gray-200">
              Integrated Management System - Quality, Health, Safety & Environment
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Our Commitment to Excellence</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              iPets Engineering is committed to maintaining the highest standards of Quality, Health, Safety, and
              Environmental (QHSE) management through our integrated management system, ensuring sustainable and
              responsible business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">{policy.icon}</div>
                <h3 className="text-2xl font-bold text-ipets-dark-blue mb-4">{policy.title}</h3>
                <p className="text-gray-600 mb-6">{policy.description}</p>

                <ul className="space-y-3">
                  {policy.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-ipets-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain internationally recognized certifications that demonstrate our commitment to quality,
              environmental responsibility, and safety excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-ipets-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ipets-dark-blue mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Quality Management System certification ensuring consistent quality delivery
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-ipets-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ipets-dark-blue mb-3">ISO 14001:2015</h3>
              <p className="text-gray-600">
                Environmental Management System certification for environmental stewardship
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-ipets-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ipets-dark-blue mb-3">OHSAS 18001:2007</h3>
              <p className="text-gray-600">Occupational Health and Safety Management System certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ipets-dark-blue mb-6">Risk Management Framework</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive risk management approach ensures proactive identification, assessment, and mitigation
                of potential risks across all project phases and business operations.
              </p>

              <div className="space-y-6">
                {riskManagement.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-ipets-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ipets-dark-blue mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-ipets-light-blue to-ipets-cyan p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Environmental Care</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6" />
                  <span>Sustainable resource utilization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6" />
                  <span>Environmental impact minimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6" />
                  <span>Compliance with environmental standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Proactive environmental monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Statement */}
      <section className="section-padding bg-ipets-dark-blue text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Policy Statement</h2>
            <p className="text-lg text-gray-200 mb-8">
              "iPets Engineering is committed to conducting business in a manner that protects the health and safety of
              our employees, contractors, and communities while minimizing our environmental impact. We strive for
              continuous improvement in our quality management system and maintain compliance with all applicable legal
              and regulatory requirements."
            </p>
            <p className="text-lg text-gray-200">
              "Through our integrated management system, we ensure that quality, health, safety, and environmental
              considerations are integral to all our business decisions and project execution processes."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

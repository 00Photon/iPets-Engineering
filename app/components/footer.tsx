import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-ipets-red to-ipets-cyan rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">iP</span>
              </div>
              <span className="font-bold text-xl">iPets Engineering</span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base">
              Innovative Engineering. Reliable Solutions. EPICOM services since 1997.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-ipets-cyan transition-colors cursor-pointer touch-manipulation">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-ipets-cyan transition-colors cursor-pointer touch-manipulation">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/who-we-are"
                  className="text-zinc-400 hover:text-white transition-colors text-sm sm:text-base touch-manipulation"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-white transition-colors text-sm sm:text-base touch-manipulation"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-400 hover:text-white transition-colors text-sm sm:text-base touch-manipulation"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-400 hover:text-white transition-colors text-sm sm:text-base touch-manipulation"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-zinc-400 text-sm sm:text-base">Engineering</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm sm:text-base">Procurement</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm sm:text-base">Installation</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm sm:text-base">Commissioning</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm sm:text-base">Maintenance</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-ipets-cyan" />
                </div>
                <span className="text-zinc-400 text-sm break-all">info@ipets-engineering.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-ipets-cyan" />
                </div>
                <span className="text-zinc-400 text-sm break-all">hr@ipets-engineering.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-ipets-cyan" />
                </div>
                <span className="text-zinc-400 text-sm">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-ipets-cyan" />
                </div>
                <span className="text-zinc-400 text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} iPets Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/new-logo.png" 
                  alt="Auth Bac" 
                  width={300} 
                  height={100}
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#6B7280] hover:text-[#2F6FA3] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#1F2937] hover:text-[#2F6FA3] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#6B7280] hover:text-[#2F6FA3] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#6B7280] hover:text-[#2F6FA3] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#1F4E79] text-white hover:bg-[#2F6FA3] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F7FA] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#1F2937] mb-6">
              About Auth Bac
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We're building the future of SMS verification, helping businesses verify customer identity while improving delivery rates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">Our Mission</h2>
            <p className="text-lg text-[#6B7280] mb-4">
              Auth Bac was created to solve a critical problem: businesses need a reliable way to verify customer identity via SMS while maintaining high delivery rates.
            </p>
            <p className="text-lg text-[#6B7280] mb-4">
              We provide a simple, secure verification platform that acts as a trusted intermediary between businesses and their customers.
            </p>
            <p className="text-lg text-[#6B7280]">
              Our goal is to make SMS verification seamless, secure, and accessible for businesses of all sizes.
            </p>
          </div>
          <div className="bg-[#F5F7FA] rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-[#1F4E79]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Focused on Quality</h3>
                  <p className="text-[#6B7280]">
                    Built from the ground up to meet industry standards and best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#1F4E79]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Security First</h3>
                  <p className="text-[#6B7280]">
                    Your customers' data is protected with enterprise-grade security measures.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-[#1F4E79]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Lightning Fast</h3>
                  <p className="text-[#6B7280]">
                    Optimized for speed with sub-2-second page loads on mobile networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-[#6B7280]">
              Trusted by companies that value compliance, security, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Shield className="w-8 h-8 text-[#1F4E79]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Reliable Service</h3>
              <p className="text-[#6B7280]">
                Built with industry best practices for maximum reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Users className="w-8 h-8 text-[#1F4E79]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Multi-Brand Support</h3>
              <p className="text-[#6B7280]">
                Support multiple brands with customizable styling options.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Zap className="w-8 h-8 text-[#1F4E79]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">High Performance</h3>
              <p className="text-[#6B7280]">
                Global CDN ensures fast load times worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Target className="w-8 h-8 text-[#1F4E79]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Easy Integration</h3>
              <p className="text-[#6B7280]">
                Simple URL-based integration with comprehensive documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F4E79] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join businesses that trust Auth Bac for SMS verification.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-[#5E8F5E] text-white text-lg font-semibold rounded-lg hover:bg-[#4a7a4a] transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F4E79] text-white py-12 border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Auth Bac</h3>
              <p className="text-blue-200">
                SMS verification for businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-blue-200 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-blue-200 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-blue-200 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-blue-200 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-blue-200">
                support@authbac.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Address</h4>
              <p className="text-blue-200">
                2000 NE 42nd Ave PMB 1251<br />
                Portland, OR 97213<br />
                United States of America
              </p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Auth Bac. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

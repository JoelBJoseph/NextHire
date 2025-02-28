import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users, Building, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Welcome to the College Placement System
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-200">
                Find your dream job and kickstart your career with our cutting-edge placement platform.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/offers">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse Offers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
              We provide comprehensive placement solutions for students and employers
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Diverse Opportunities</h3>
              <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Access a wide range of job opportunities from top companies across various industries.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Expert Guidance</h3>
              <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Receive personalized career advice and support from our experienced placement team.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Industry Connections</h3>
              <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Build valuable connections with industry leaders through our extensive network.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Career Development</h3>
              <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                Access workshops, training sessions, and resources to enhance your professional skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border-l border-gray-200 dark:border-gray-700 pl-4">
              <span className="text-4xl font-bold text-blue-600">500+</span>
              <span className="text-gray-500 dark:text-gray-400">Companies</span>
            </div>
            <div className="flex flex-col items-center space-y-2 border-l border-gray-200 dark:border-gray-700 pl-4">
              <span className="text-4xl font-bold text-blue-600">10,000+</span>
              <span className="text-gray-500 dark:text-gray-400">Students Placed</span>
            </div>
            <div className="flex flex-col items-center space-y-2 border-l border-gray-200 dark:border-gray-700 pl-4">
              <span className="text-4xl font-bold text-blue-600">95%</span>
              <span className="text-gray-500 dark:text-gray-400">Success Rate</span>
            </div>
            <div className="flex flex-col items-center space-y-2 border-l border-gray-200 dark:border-gray-700 pl-4">
              <span className="text-4xl font-bold text-blue-600">24/7</span>
              <span className="text-gray-500 dark:text-gray-400">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Start Your Career Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                Join thousands of students who have found their dream jobs through our platform.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


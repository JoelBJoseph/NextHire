import { JobOfferCard } from "@/components/job-offer-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Briefcase } from "lucide-react"

// This would normally come from a database
const jobOffers = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$100,000 - $150,000",
    description: "We are looking for a talented software engineer to join our team...",
    logo: "/placeholder.svg?height=100&width=100",
    type: "Full-time",
    experience: "3-5 years",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Data Insights Inc",
    location: "New York, NY",
    salary: "$120,000 - $180,000",
    description: "Join our data science team to work on cutting-edge machine learning projects...",
    logo: "/placeholder.svg?height=100&width=100",
    type: "Full-time",
    experience: "4-6 years",
    skills: ["Python", "Machine Learning", "SQL"],
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Creative Solutions",
    location: "Los Angeles, CA",
    salary: "$90,000 - $130,000",
    description: "We're seeking a creative UX designer to help shape the future of our products...",
    logo: "/placeholder.svg?height=100&width=100",
    type: "Full-time",
    experience: "2-4 years",
    skills: ["Figma", "Adobe XD", "User Research"],
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Innovate Co",
    location: "Seattle, WA",
    salary: "$110,000 - $160,000",
    description: "Lead the development of innovative products in a fast-paced environment...",
    logo: "/placeholder.svg?height=100&width=100",
    type: "Full-time",
    experience: "5-7 years",
    skills: ["Product Strategy", "Agile", "Data Analysis"],
  },
  {
    id: 5,
    title: "Marketing Specialist",
    company: "Brand Builders",
    location: "Chicago, IL",
    salary: "$70,000 - $100,000",
    description: "Join our marketing team to create compelling campaigns for top brands...",
    logo: "/placeholder.svg?height=100&width=100",
    type: "Full-time",
    experience: "2-4 years",
    skills: ["Digital Marketing", "Social Media", "Content Strategy"],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Web Wizards",
    location: "Austin, TX",
    salary: "$95,000 - $140,000",
    description: "Seeking a versatile full stack developer to build robust web applications...",
    logo: "/placeholder.svg?height=100&width=100",
    type: "Full-time",
    experience: "3-5 years",
    skills: ["JavaScript", "Python", "AWS"],
  },
]

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-600 dark:bg-blue-700 py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your Dream Job</h1>
            <p className="text-blue-100 mb-8">Discover exciting opportunities that match your skills and aspirations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input type="text" placeholder="Search jobs..." className="pl-10 bg-white dark:bg-gray-800 h-12" />
              </div>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Latest Opportunities</h2>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOffers.map((offer) => (
            <JobOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  )
}


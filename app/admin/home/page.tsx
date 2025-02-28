"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { JobOfferAdmin } from "@/components/job-offer-admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Search, Briefcase, Users, Building, GraduationCap } from "lucide-react"

// This would normally come from a database
const initialJobOffers = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$100,000 - $150,000",
    description: "We are looking for a talented software engineer to join our team...",
    students: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        education: "BS in Computer Science",
        experience: "2 years",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        education: "MS in Software Engineering",
        experience: "3 years",
      },
    ],
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Data Insights Inc",
    location: "New York, NY",
    salary: "$120,000 - $180,000",
    description: "Join our data science team to work on cutting-edge machine learning projects...",
    students: [
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        education: "PhD in Statistics",
        experience: "5 years",
      },
    ],
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Creative Solutions",
    location: "Los Angeles, CA",
    salary: "$90,000 - $130,000",
    description: "We're seeking a creative UX designer to help shape the future of our products...",
    students: [],
  },
]

const stats = [
  {
    name: "Total Job Offers",
    value: "124",
    icon: Briefcase,
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Active Applications",
    value: "573",
    icon: Users,
    change: "+54.02%",
    changeType: "positive",
  },
  {
    name: "Partner Companies",
    value: "48",
    icon: Building,
    change: "+12.30%",
    changeType: "positive",
  },
  {
    name: "Placed Students",
    value: "289",
    icon: GraduationCap,
    change: "+8.24%",
    changeType: "positive",
  },
]

export default function AdminHome() {
  const [jobOffers, setJobOffers] = useState(initialJobOffers)
  const [searchTerm, setSearchTerm] = useState("")

  const handleDelete = (id: number) => {
    setJobOffers(jobOffers.filter((offer) => offer.id !== id))
  }

  const filteredOffers = jobOffers.filter(
    (offer) =>
      offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin</h1>
        <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your job listings today.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={cn("text-xs", stat.changeType === "positive" ? "text-green-500" : "text-red-500")}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Job Offers Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Job Offers</CardTitle>
              <CardDescription>Manage and monitor all job listings</CardDescription>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Job
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search job offers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="grid gap-6">
            {filteredOffers.map((offer) => (
              <JobOfferAdmin key={offer.id} offer={offer} onDelete={() => handleDelete(offer.id)} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { JobApplicationForm } from "@/components/job-application-form"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase } from "lucide-react"

interface JobOffer {
  id: number
  title: string
  company: string
  location: string
  salary: string
  description: string
  logo: string
  type: string
  experience: string
  skills: string[]
}

export function JobOfferCard({ offer }: { offer: JobOffer }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        className="h-full flex flex-col justify-between overflow-hidden border-2 hover:border-blue-500 transition-colors"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="relative pb-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Image
                src={offer.logo || "/placeholder.svg"}
                alt={offer.company}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-xl mb-1">{offer.title}</CardTitle>
              <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                {offer.company}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-1" />
              {offer.location}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-1" />
              {offer.type}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Briefcase className="h-4 w-4 mr-1" />
              {offer.experience}
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Salary:</span> {offer.salary}
              </p>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                {offer.description}
              </motion.p>
            </div>
            <div className="flex flex-wrap gap-2">
              {offer.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Apply Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Apply for {offer.title}</DialogTitle>
              </DialogHeader>
              <JobApplicationForm jobId={offer.id} />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


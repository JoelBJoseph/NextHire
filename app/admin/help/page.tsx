import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users } from "lucide-react"

export default function AdminHelp() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Support Dashboard</h1>
        <p className="text-muted-foreground">Monitor and respond to user support requests.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Active Requests</CardTitle>
                <CardDescription>Recent support tickets that need attention</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No active support requests at the moment.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>User Statistics</CardTitle>
                <CardDescription>Overview of user support interactions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Average Response Time:</span> 2.5 hours
              </p>
              <p className="text-sm">
                <span className="font-medium">Satisfaction Rate:</span> 94%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


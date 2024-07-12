
import { Card, CardContent } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Messages</h2>
          <Card>
            <CardContent className="grid gap-4">
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    
                    <div className="font-medium">Martin Oyedepo</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Due: 2023-05-15</div>
                </div>
                <div className="text-sm text-muted-foreground">Message: Algebra Fundamentals</div>
              </div>
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                   
                    <div className="font-medium">Odeniran Sulaimon</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Due: 2023-06-01</div>
                </div>
                <div className="text-sm text-muted-foreground">Message: Organic Chemistry Lab</div>
              </div>
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                   
                    <div className="font-medium">Eniola Ajao</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Due: 2023-07-01</div>
                </div>
                <div className="text-sm text-muted-foreground">Message: Human Anatomy Project</div>
              </div>
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    
                    <div className="font-medium">Martin Oyedepo</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Due: 2023-08-15</div>
                </div>
                <div className="text-sm text-muted-foreground">Message: Calculus Concepts</div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Assignments</h2>
          <Card>
            <CardContent className="grid gap-4">
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Mathematics</div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">Due: 2023-06-30</div>
                    <Badge variant="secondary">Attempt 1</Badge>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Pythagoras Theorem</div>
              </div>
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Chemistry</div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">Due: 2023-07-15</div>
                    <Badge variant="secondary">Attempt 2</Badge>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Atoms</div>
              </div>
              <div className="grid gap-2 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Biology</div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">Due: 2023-08-01</div>
                    <Badge variant="secondary">Attempt 1</Badge>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Skeletal system</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
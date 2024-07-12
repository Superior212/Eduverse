
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">January 2024</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <div className="text-muted-foreground font-medium">Sun</div>
            <div className="text-muted-foreground font-medium">Mon</div>
            <div className="text-muted-foreground font-medium">Tue</div>
            <div className="text-muted-foreground font-medium">Wed</div>
            <div className="text-muted-foreground font-medium">Thu</div>
            <div className="text-muted-foreground font-medium">Fri</div>
            <div className="text-muted-foreground font-medium">Sat</div>
            <div className="text-muted-foreground">1</div>
            <div className="text-muted-foreground">2</div>
            <div className="text-muted-foreground">3</div>
            <div className="text-muted-foreground">4</div>
            <div className="text-muted-foreground">5</div>
            <div className="text-muted-foreground">6</div>
            <div className="text-muted-foreground">7</div>
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
              8
            </div>
            <div className="text-muted-foreground">9</div>
            <div className="text-muted-foreground">10</div>
            <div className="text-muted-foreground">11</div>
            <div className="text-muted-foreground">12</div>
            <div className="text-muted-foreground">13</div>
            <div className="text-muted-foreground">14</div>
            <div className="text-muted-foreground">15</div>
            <div className="text-muted-foreground">16</div>
            <div className="text-muted-foreground">17</div>
            <div className="text-muted-foreground">18</div>
            <div className="text-muted-foreground">19</div>
            <div className="text-muted-foreground">20</div>
            <div className="text-muted-foreground">21</div>
            <div className="text-muted-foreground">22</div>
            <div className="text-muted-foreground">23</div>
            <div className="text-muted-foreground">24</div>
            <div className="text-muted-foreground">25</div>
            <div className="text-muted-foreground">26</div>
            <div className="text-muted-foreground">27</div>
            <div className="text-muted-foreground">28</div>
            <div className="text-muted-foreground">29</div>
            <div className="text-muted-foreground">30</div>
            <div className="text-muted-foreground">31</div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

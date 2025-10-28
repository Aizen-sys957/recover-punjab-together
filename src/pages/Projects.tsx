import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, Calendar, Users, Building2, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "School Reconstruction - Amritsar",
      organization: "Education Department & UNICEF",
      description: "Rebuilding 5 schools damaged during floods with improved infrastructure",
      progress: 65,
      status: "in-progress",
      location: "Amritsar District",
      startDate: "Jan 2025",
      endDate: "Jun 2025",
      beneficiaries: "2,500 students",
      budget: "₹4.2 Crore",
      updates: [
        "Foundation work completed for all buildings",
        "Structural framework 60% complete",
        "Safety audit conducted successfully",
      ],
    },
    {
      id: 2,
      title: "Road Network Restoration",
      organization: "PWD Punjab",
      description: "Repairing and upgrading damaged rural roads connecting 12 villages",
      progress: 40,
      status: "in-progress",
      location: "Ludhiana District",
      startDate: "Feb 2025",
      endDate: "Aug 2025",
      beneficiaries: "15,000 residents",
      budget: "₹6.8 Crore",
      updates: [
        "Survey and planning completed",
        "25 km road work in progress",
        "New drainage systems being installed",
      ],
    },
    {
      id: 3,
      title: "Housing Rehabilitation Program",
      organization: "Housing Board & Habitat for Humanity",
      description: "Providing safe housing to 200 families who lost homes",
      progress: 85,
      status: "in-progress",
      location: "Bathinda District",
      startDate: "Nov 2024",
      endDate: "Apr 2025",
      beneficiaries: "200 families",
      budget: "₹8.5 Crore",
      updates: [
        "170 houses completed and occupied",
        "Final 30 houses under construction",
        "Community center construction started",
      ],
    },
    {
      id: 4,
      title: "Agricultural Land Restoration",
      organization: "Agriculture Department",
      description: "Soil treatment and irrigation system repair for flood-affected farmland",
      progress: 30,
      status: "in-progress",
      location: "Multiple Districts",
      startDate: "Mar 2025",
      endDate: "Sep 2025",
      beneficiaries: "800 farmers",
      budget: "₹3.2 Crore",
      updates: [
        "Soil testing completed for 500 acres",
        "Irrigation canal cleaning in progress",
        "Seed distribution planned for next month",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-secondary";
      case "in-progress":
        return "bg-primary";
      case "planned":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Recovery Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track ongoing recovery and reconstruction projects across Punjab. Transparent progress
            updates and accountability for every initiative.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-1">8</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">₹45.6Cr</div>
              <div className="text-sm text-muted-foreground">Total Budget</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">48K+</div>
              <div className="text-sm text-muted-foreground">Beneficiaries</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects List */}
        <div className="max-w-6xl mx-auto space-y-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="bg-gradient-card border-b">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <Badge className={getStatusColor(project.status)}>In Progress</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.organization}</p>
                    <p className="text-foreground">{project.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-3xl font-bold text-primary mb-1">{project.progress}%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Progress Bar */}
                <div className="mb-6">
                  <Progress value={project.progress} className="h-3" />
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="text-sm font-medium">{project.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="text-sm font-medium">
                        {project.startDate} - {project.endDate}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Beneficiaries</div>
                      <div className="text-sm font-medium">{project.beneficiaries}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                      <div className="text-sm font-medium">{project.budget}</div>
                    </div>
                  </div>
                </div>

                {/* Recent Updates */}
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-3 text-sm">Recent Updates</h4>
                  <ul className="space-y-2">
                    {project.updates.map((update, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{update}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    View Full Details
                  </Button>
                  <Button className="flex-1 gap-2">
                    Track Progress
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

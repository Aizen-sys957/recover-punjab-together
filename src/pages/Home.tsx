import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Package,
  Users,
  Heart,
  TrendingUp,
  MapPin,
  FileText,
  Shield,
} from "lucide-react";

const Home = () => {
  const stats = [
    { icon: AlertCircle, label: "Active Reports", value: "142", color: "text-primary" },
    { icon: Package, label: "Resources Matched", value: "89", color: "text-secondary" },
    { icon: Users, label: "Active Volunteers", value: "356", color: "text-accent" },
    { icon: Heart, label: "Total Donations", value: "₹2.4M", color: "text-destructive" },
  ];

  const actions = [
    {
      icon: AlertCircle,
      title: "Report Damage",
      description: "Submit a damage report with photos and location",
      path: "/report",
      color: "bg-primary",
    },
    {
      icon: Package,
      title: "Browse Resources",
      description: "Find or offer materials, equipment, and volunteers",
      path: "/resources",
      color: "bg-secondary",
    },
    {
      icon: TrendingUp,
      title: "View Projects",
      description: "Track recovery projects and their progress",
      path: "/projects",
      color: "bg-accent",
    },
    {
      icon: FileText,
      title: "Knowledge Hub",
      description: "Learn best practices for resilient rebuilding",
      path: "/knowledge",
      color: "bg-primary",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Live updates on affected zones and recovery progress",
    },
    {
      icon: Shield,
      title: "Verified Organizations",
      description: "Connect with trusted NGOs and government authorities",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by and for the affected communities",
    },
    {
      icon: Heart,
      title: "Transparent Impact",
      description: "Track every rupee and see real recovery outcomes",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Rebuilding Punjab, Together
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              A unified platform connecting communities, volunteers, and resources for effective
              post-disaster recovery and resilient rebuilding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-lg h-12">
                <Link to="/report">Report Damage</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-card/20 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/30 text-lg h-12"
              >
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need help or want to contribute, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <Link to={action.path} key={index}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <action.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{action.title}</h3>
                  <p className="text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Affected Zones Map Placeholder */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Affected Zones</h2>
            <p className="text-lg text-muted-foreground">
              Real-time visualization of disaster-affected areas across Punjab
            </p>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 mx-auto text-primary" />
                  <p className="text-muted-foreground">Interactive map will be displayed here</p>
                  <p className="text-sm text-muted-foreground">
                    Showing affected districts, severity levels, and recovery status
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RecoverTogether?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A trusted platform built with transparency, efficiency, and community at its core
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16">
          <Card className="bg-card/95 backdrop-blur-sm border-none shadow-xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Every Contribution Makes a Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of volunteers, donors, and organizations working together to rebuild
                stronger, safer communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Donate Now
                </Button>
                <Button size="lg" variant="outline">
                  Volunteer With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

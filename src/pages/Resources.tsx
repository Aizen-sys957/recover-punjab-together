import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Users, Wrench, Search, Plus, MapPin, Clock } from "lucide-react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    {
      id: 1,
      type: "materials",
      title: "Construction Materials",
      provider: "Punjab Building Authority",
      description: "Cement, bricks, roofing materials available",
      quantity: "50 units",
      location: "Ludhiana Warehouse",
      status: "available",
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      type: "volunteers",
      title: "Medical Team",
      provider: "Red Cross Punjab",
      description: "Doctors and nurses available for medical camps",
      quantity: "12 volunteers",
      location: "Amritsar",
      status: "available",
      lastUpdated: "4 hours ago",
    },
    {
      id: 3,
      type: "equipment",
      title: "Heavy Machinery",
      provider: "PWD Punjab",
      description: "Excavators and JCB for debris removal",
      quantity: "3 machines",
      location: "Jalandhar",
      status: "in-use",
      lastUpdated: "1 day ago",
    },
    {
      id: 4,
      type: "materials",
      title: "Food Supplies",
      provider: "Seva Foundation",
      description: "Packaged meals, water, and essentials",
      quantity: "500 packets",
      location: "Patiala",
      status: "available",
      lastUpdated: "3 hours ago",
    },
    {
      id: 5,
      type: "volunteers",
      title: "Construction Workers",
      provider: "Builders Association",
      description: "Skilled workers for reconstruction",
      quantity: "25 workers",
      location: "Bathinda",
      status: "available",
      lastUpdated: "5 hours ago",
    },
    {
      id: 6,
      type: "equipment",
      title: "Water Pumps",
      provider: "Irrigation Department",
      description: "High capacity water pumps for drainage",
      quantity: "10 pumps",
      location: "Various locations",
      status: "available",
      lastUpdated: "6 hours ago",
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "materials":
        return <Package className="w-5 h-5" />;
      case "volunteers":
        return <Users className="w-5 h-5" />;
      case "equipment":
        return <Wrench className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === "available" ? "bg-secondary" : "bg-muted";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
            <Package className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Resources Hub</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find available resources or offer help. Connect materials, volunteers, and equipment
            with those who need them most.
          </p>
        </div>

        {/* Search and Add */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for resources, volunteers, or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 gap-2">
            <Plus className="w-5 h-5" />
            Offer Resources
          </Button>
        </div>

        {/* Filters */}
        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card
                  key={resource.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className={`w-12 h-12 ${
                          resource.type === "materials"
                            ? "bg-primary/10"
                            : resource.type === "volunteers"
                            ? "bg-secondary/10"
                            : "bg-accent/10"
                        } rounded-lg flex items-center justify-center`}
                      >
                        {getTypeIcon(resource.type)}
                      </div>
                      <Badge className={getStatusColor(resource.status)}>
                        {resource.status === "available" ? "Available" : "In Use"}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{resource.description}</p>

                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline">{resource.quantity}</Badge>
                    </div>

                    <div className="space-y-2 pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{resource.provider}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{resource.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Updated {resource.lastUpdated}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4" variant={resource.status === "available" ? "default" : "secondary"}>
                      {resource.status === "available" ? "Request Resource" : "View Details"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter((r) => r.type === "materials")
                .map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <Button className="w-full">Request Resource</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="volunteers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter((r) => r.type === "volunteers")
                .map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <Button className="w-full">Request Help</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="equipment">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter((r) => r.type === "equipment")
                .map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <Button className="w-full">Request Equipment</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resources;

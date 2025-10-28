import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  Home,
  Download,
  ExternalLink,
} from "lucide-react";

const Knowledge = () => {
  const guideCategories = [
    {
      icon: Home,
      title: "Housing & Infrastructure",
      count: 12,
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Shield,
      title: "Safety & Preparedness",
      count: 8,
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: TrendingUp,
      title: "Economic Recovery",
      count: 6,
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Users,
      title: "Community Support",
      count: 10,
      color: "bg-primary/10 text-primary",
    },
  ];

  const featuredGuides = [
    {
      title: "Post-Disaster Recovery Planning Framework",
      description:
        "Comprehensive guide from UNDP on national post-disaster recovery planning and coordination, including institutional arrangements and best practices.",
      category: "Policy Framework",
      readTime: "45 min read",
      source: "UNDP",
      tags: ["Recovery Planning", "Coordination", "Institutional"],
    },
    {
      title: "Building Back Better: Resilient Construction",
      description:
        "Guidelines for reconstructing damaged buildings with improved disaster resilience, including structural design and material specifications.",
      category: "Construction",
      readTime: "30 min read",
      source: "National Building Code",
      tags: ["Construction", "Resilience", "Standards"],
    },
    {
      title: "Community-Led Recovery Approaches",
      description:
        "Best practices for involving affected communities in recovery planning and implementation for sustainable and inclusive outcomes.",
      category: "Community",
      readTime: "20 min read",
      source: "UNDP & Local NGOs",
      tags: ["Community", "Participation", "Inclusion"],
    },
    {
      title: "Disaster Risk Reduction in Recovery",
      description:
        "Integrating disaster risk reduction measures during recovery to reduce future vulnerabilities and build long-term resilience.",
      category: "Risk Management",
      readTime: "35 min read",
      source: "UNDP Guidance",
      tags: ["DRR", "Risk Management", "Resilience"],
    },
    {
      title: "Livelihood Restoration Programs",
      description:
        "Strategies for restoring economic activities and livelihoods of affected populations, including agricultural and small business support.",
      category: "Economic Recovery",
      readTime: "25 min read",
      source: "FAO & UNDP",
      tags: ["Livelihoods", "Economic", "Agriculture"],
    },
    {
      title: "Psychosocial Support Guidelines",
      description:
        "Addressing mental health and psychosocial needs of disaster-affected communities through culturally appropriate interventions.",
      category: "Health & Wellbeing",
      readTime: "20 min read",
      source: "WHO & Local Health Dept",
      tags: ["Mental Health", "Support", "Wellbeing"],
    },
  ];

  const keyPrinciples = [
    {
      title: "Human-Centered Recovery",
      description: "Prioritize affected people's needs, rights, and participation in all decisions",
    },
    {
      title: "Build Back Better",
      description: "Use recovery as opportunity to reduce risks and improve resilience",
    },
    {
      title: "Inclusive Approach",
      description: "Ensure vulnerable groups are included in planning and benefit equitably",
    },
    {
      title: "Coordination & Partnership",
      description: "Foster collaboration between government, NGOs, and communities",
    },
    {
      title: "Transparency & Accountability",
      description: "Maintain open communication and track resource usage effectively",
    },
    {
      title: "Long-term Sustainability",
      description: "Plan for lasting improvements, not just quick fixes",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence-based resources and best practices for effective disaster recovery and
            resilient rebuilding, guided by UNDP frameworks and local expertise.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {guideCategories.map((category, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-3">
                <div
                  className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mx-auto`}
                >
                  <category.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} resources</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Principles Section */}
        <section className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Key Principles of Disaster Recovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyPrinciples.map((principle, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Guides */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Resources</h2>
            <Button variant="outline">View All Resources</Button>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Guides</TabsTrigger>
              <TabsTrigger value="policy">Policy & Planning</TabsTrigger>
              <TabsTrigger value="technical">Technical Guides</TabsTrigger>
              <TabsTrigger value="community">Community Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {featuredGuides.map((guide, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <CardHeader className="bg-gradient-card border-b">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-5 h-5 text-primary" />
                          <Badge variant="outline">{guide.category}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Source:</span> {guide.source}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Read time:</span> {guide.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 gap-2">
                        <BookOpen className="w-4 h-4" />
                        Read Guide
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="policy">
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Policy & Planning Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    National frameworks, coordination guidelines, and strategic planning documents
                  </p>
                  <Button>Browse Policy Documents</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical">
              <Card>
                <CardContent className="p-12 text-center">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Technical Guidelines</h3>
                  <p className="text-muted-foreground mb-4">
                    Construction standards, safety protocols, and technical specifications
                  </p>
                  <Button>Browse Technical Guides</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="community">
              <Card>
                <CardContent className="p-12 text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Community Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    Practical guides for community members, volunteers, and local organizations
                  </p>
                  <Button>Browse Community Guides</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Help Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="p-12 text-center space-y-4">
              <ExternalLink className="w-12 h-12 mx-auto" />
              <h2 className="text-3xl font-bold">Need More Help?</h2>
              <p className="text-lg text-primary-foreground/90">
                Connect with disaster recovery experts, access training materials, or request custom
                guidance for your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Contact Experts
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-card/20 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/30"
                >
                  Request Training
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Knowledge;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  FileText,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  Home,
  Download,
  ExternalLink,
  Building2,
  Heart,
  Sprout,
  School,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Target,
  Network,
} from "lucide-react";

const Knowledge = () => {
  const recoveryAreas = [
    {
      icon: Building2,
      title: "Shelter & Housing",
      description: "Transitional and permanent housing solutions, material assistance, reconstruction guidelines",
    },
    {
      icon: Heart,
      title: "Health & WATSAN",
      description: "Community health services, psychosocial support, safe water access, sanitation",
    },
    {
      icon: Sprout,
      title: "Livelihoods & Food Security",
      description: "Market restoration, income generation, agricultural support, economic recovery",
    },
    {
      icon: School,
      title: "Community Services",
      description: "Education facilities, health centers, community infrastructure, awareness programs",
    },
    {
      icon: AlertTriangle,
      title: "Disaster Risk Reduction",
      description: "Risk-informed response, contingency planning, safe building guidelines, environmental management",
    },
    {
      icon: Lightbulb,
      title: "Capacity Building",
      description: "Organizational development, volunteer systems, sustainability strategies, service strengthening",
    },
  ];

  const strategicApproaches = [
    {
      category: "Strategic Approach",
      approaches: [
        {
          title: "Sectoral",
          description: "Task division by sector with recovery partners taking the lead in specific sectoral areas of specialization.",
        },
        {
          title: "Geographic",
          description: "Tasking based on location with partners taking lead in specific areas and delivering comprehensive recovery assistance.",
        },
        {
          title: "Strategic Gaps",
          description: "Multi-partner effort to address significant gaps that no single agency can address within sectoral programming.",
        },
      ],
    },
    {
      category: "Modalities",
      approaches: [
        {
          title: "Bilateral",
          description: "Organizations operate independently to provide direct support to response and recovery activities.",
        },
        {
          title: "Multi-lateral",
          description: "Pooling and joint management of organizational resources under common leadership.",
        },
        {
          title: "Partner Consortia",
          description: "Partners work together under common framework to enhance capacities and fill gaps.",
        },
      ],
    },
    {
      category: "Coordination Mechanisms",
      approaches: [
        {
          title: "Strategy & Common Objectives",
          description: "Common recovery strategy, joint reporting, strategic planning support to local organizations.",
        },
        {
          title: "Coordination Structures",
          description: "Leadership task force and technical groups under UN cluster system or other coordination structure.",
        },
        {
          title: "Legal Architecture",
          description: "Achieving independent legal status for international recovery organizations and facilitating operational activities.",
        },
      ],
    },
  ];

  const implementationAreas = [
    {
      title: "Shelter",
      icon: Building2,
      activities: [
        "Provision of shelter kits and safe building information",
        "Material assistance and cash grants for reconstruction",
        "Reconstruction of permanent housing",
        "Address transitional and long-term shelter needs",
        "Support for self-settled and managed camps",
      ],
    },
    {
      title: "Health & WATSAN",
      icon: Heart,
      activities: [
        "Community-based health and first aid services",
        "Psychosocial support and mental health services",
        "Ensuring access to safe water sources",
        "Low-tech and sustainable water solutions",
        "Sanitation infrastructure development",
      ],
    },
    {
      title: "Livelihoods & Economic Recovery",
      icon: Sprout,
      activities: [
        "Re-establishing local markets and trade",
        "Short-term salary support for teachers, doctors, nurses",
        "Community livelihood initiatives",
        "Support for local enterprise development",
        "Food security assessment and support",
      ],
    },
    {
      title: "Community Infrastructure",
      icon: School,
      activities: [
        "Development and equipping of health centers",
        "Temporary and permanent school facilities",
        "Promotion of safety and awareness programs",
        "Empowerment of community organizations",
        "Re-establishment of essential services",
      ],
    },
    {
      title: "Disaster Risk Reduction",
      icon: AlertTriangle,
      activities: [
        "Contingency planning for immediate hazards",
        "Advocacy for safe building guidelines",
        "Addressing food security threats",
        "Environmental management programs",
        "Community-based disaster risk reduction",
      ],
    },
    {
      title: "Local Capacity Development",
      icon: Lightbulb,
      activities: [
        "Organizational development support",
        "Finance and human resource systems",
        "Volunteer management systems",
        "Disaster management training",
        "Sustainability through income generation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Post-Disaster Recovery Knowledge Hub</h1>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Comprehensive guidance on post-disaster recovery strategies, integrating relief with long-term 
            development. While recovery has traditionally been treated as a separate phase, there is growing 
            recognition that effective preparedness, relief, and recovery activities are integrally related—especially 
            in reducing risk and vulnerability. This knowledge hub provides frameworks, tools, and best practices 
            for coordinated, sustainable recovery efforts.
          </p>
        </div>

        {/* Core Recovery Principles */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Understanding Post-Disaster Recovery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Post-disaster recovery represents a critical window of opportunity for long-term risk reduction 
                and community resilience building. Recent disasters—including the 2004 Indian Ocean Tsunami, 
                2010 Haiti earthquake, and 2011 Fukushima triple disaster—have highlighted the need for strengthening 
                links from recovery to risk reduction.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Early Recovery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Assessment, planning and implementation designed to strengthen relief interventions and support 
                    disaster-affected people through the first few months following a disaster (relief to recovery transition).
                  </p>
                </div>
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Long-term Recovery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Medium to longer-term planning and implementation of substantive recovery programmes in the first 
                    year or longer, focusing on reconstruction, rehabilitation, and sustainable development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Recovery Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Network className="w-6 h-6 text-primary" />
            Six Core Recovery Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recoveryAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategic Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Organizing Collective Recovery Action</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A harmonized and integrated approach combined with effective coordination and operational structures 
                allows recovery partners to achieve greater impact. Three main elements are required to effectively 
                organize activities over the medium and long-term:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {strategicApproaches.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2 text-primary">{section.category}</h3>
                    {section.approaches.map((approach, aIdx) => (
                      <div key={aIdx} className="space-y-2">
                        <h4 className="font-semibold text-sm">{approach.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{approach.description}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community Rebuilding Through Integrated Approaches</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {implementationAreas.map((area, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">{area.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-13 pt-4 space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Key activities and interventions for {area.title.toLowerCase()}:
                    </p>
                    <ul className="space-y-2">
                      {area.activities.map((activity, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Practices & Key Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Harmonized Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Each organization supporting recovery has its own constraints, resources and ambitions in meeting 
                  the needs of the most vulnerable. Coordination should steer towards areas of greatest overlap.
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Balance public and donor expectations with practicalities</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Find valued niche in complex environment</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Operate in areas of overlap for maximum impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Recovery Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Recovery offers a critical "window of opportunity" for long-term risk reduction when implemented 
                  with strategic foresight and community participation.
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Link recovery activities to risk reduction measures</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Protect vulnerable people from further risks</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Ensure sustainable development outcomes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Community Engagement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Effective recovery must prioritize affected communities' participation in planning and 
                  implementation to ensure culturally appropriate and sustainable outcomes.
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Empower community organizations</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Support local leadership and decision-making</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Build on existing community structures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Capacity Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Supporting local organizations to re-establish services and plan for future growth ensures 
                  long-term sustainability and community resilience.
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Strengthen organizational systems</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Develop volunteer management programs</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Plan for sustainability and income generation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Additional Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Related Topics
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer transition-colors">• Climate Change Adaptation</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Community Engagement & Accountability</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Disaster Risk Financing</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Infrastructure and Services</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Mental Health & Psychosocial Support</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Urban Resilience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Download className="w-4 h-4 text-primary" />
                    Key Documents
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer transition-colors">• UNDP Recovery Framework</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Build Back Better Guidelines</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Community Recovery Toolkit</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• DRR Integration Manual</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Coordination Mechanisms Guide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-primary" />
                    External Resources
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer transition-colors">• PreventionWeb Portal</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• UNDRR Knowledge Base</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Global Facility for Disaster Reduction</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Humanitarian Response Library</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">• Red Cross Red Crescent Resources</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Contribute to Recovery Knowledge</h2>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Share your experiences, lessons learned, and best practices from recovery operations. 
                  Help build a comprehensive knowledge base that supports effective disaster recovery worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Submit Case Study
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-card/20 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/30"
                  >
                    Request Guidance
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-card/20 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/30"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download All Resources
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Knowledge;

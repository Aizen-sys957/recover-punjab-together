import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Upload, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportDamage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Report Submitted Successfully",
      description: "Your damage report has been received. Reference ID: DR-2025-001234",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Report Submitted Successfully</h2>
              <p className="text-muted-foreground text-lg">
                Your damage report has been received and assigned reference number:
              </p>
              <div className="text-2xl font-mono font-bold text-primary">DR-2025-001234</div>
              <p className="text-muted-foreground">
                You can track the status of your report and receive updates on recovery efforts. Our
                team will review your submission and coordinate appropriate response actions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={() => setSubmitted(false)}>Submit Another Report</Button>
                <Button variant="outline">Track My Report</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Report Damage</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us coordinate recovery efforts by reporting damage in your area. Your information
            enables faster response and resource allocation.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Damage Report Form</CardTitle>
            <CardDescription>
              Please provide as much detail as possible. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alternate">Alternate Contact</Label>
                    <Input id="alternate" type="tel" placeholder="Alternate phone number" />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  Location Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
                  <div className="space-y-2">
                    <Label htmlFor="district">District *</Label>
                    <Select required>
                      <SelectTrigger id="district">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="amritsar">Amritsar</SelectItem>
                        <SelectItem value="ludhiana">Ludhiana</SelectItem>
                        <SelectItem value="jalandhar">Jalandhar</SelectItem>
                        <SelectItem value="patiala">Patiala</SelectItem>
                        <SelectItem value="bathinda">Bathinda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tehsil">Tehsil/Block</Label>
                    <Input id="tehsil" placeholder="Enter tehsil/block" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="House/Plot number, Street, Village/Town"
                      required
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>GPS Location</Label>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Use Current Location
                    </Button>
                  </div>
                </div>
              </div>

              {/* Damage Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    3
                  </div>
                  Damage Information
                </h3>

                <div className="space-y-4 ml-10">
                  <div className="space-y-2">
                    <Label htmlFor="damageType">Type of Damage *</Label>
                    <Select required>
                      <SelectTrigger id="damageType">
                        <SelectValue placeholder="Select damage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Building</SelectItem>
                        <SelectItem value="commercial">Commercial Property</SelectItem>
                        <SelectItem value="agricultural">Agricultural Land/Crops</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure (Roads, Bridges)</SelectItem>
                        <SelectItem value="livestock">Livestock</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity Level *</Label>
                    <Select required>
                      <SelectTrigger id="severity">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor - Repairable</SelectItem>
                        <SelectItem value="moderate">Moderate - Significant Damage</SelectItem>
                        <SelectItem value="severe">Severe - Major Structural Damage</SelectItem>
                        <SelectItem value="total">Total Loss/Destroyed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the damage, what happened, and when it occurred..."
                      required
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimatedLoss">Estimated Loss (₹)</Label>
                    <Input
                      id="estimatedLoss"
                      type="number"
                      placeholder="Approximate value in Rupees"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Photos</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG up to 10MB (Max 5 photos)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Needs */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    4
                  </div>
                  Immediate Needs
                </h3>

                <div className="space-y-4 ml-10">
                  <div className="space-y-2">
                    <Label htmlFor="urgentNeeds">What do you need most urgently?</Label>
                    <Textarea
                      id="urgentNeeds"
                      placeholder="e.g., Temporary shelter, food, water, medical assistance, building materials..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="peopleAffected">Number of People Affected</Label>
                    <Input id="peopleAffected" type="number" placeholder="Number of people" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <Button type="submit" size="lg" className="flex-1">
                  Submit Report
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Save as Draft
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Your report will be reviewed by authorities and response teams. You'll receive a
                reference number to track progress.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportDamage;

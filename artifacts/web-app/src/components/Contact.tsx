import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// We don't have a shadcn Select configured, so we'll build a standard HTML select that looks like the input
const selectClass = "flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide some details about the job"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-contact-title">
              Get in touch.
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full mb-8" />
            
            <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
              Ready to start your project or need something fixed? Fill out the form or give me a direct call. I aim to respond to all inquiries within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Direct Line</h3>
                  <a href="tel:0412345678" className="text-3xl font-serif font-bold text-foreground hover:text-primary transition-colors">
                    0412 345 678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Service Area</h3>
                  <p className="text-xl font-medium text-foreground">
                    Tardale, Morwell, Traralgon,<br />and surrounding Gippsland areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-background border border-border rounded-2xl p-6 md:p-10 shadow-lg">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
                data-testid="contact-success-message"
              >
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Message Sent</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Thanks for reaching out. I'll get back to you shortly to discuss your project.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Request a Quote</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name *</label>
                    <Input 
                      id="name" 
                      placeholder="John Smith" 
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                      data-testid="input-contact-name"
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-foreground">Phone Number *</label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="0400 000 000" 
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                      data-testid="input-contact-phone"
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                    data-testid="input-contact-email"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="service" className="text-sm font-bold text-foreground">Service Needed *</label>
                  <select 
                    id="service" 
                    {...register("service")}
                    className={`${selectClass} ${errors.service ? "border-destructive" : ""}`}
                    data-testid="select-contact-service"
                  >
                    <option value="">Select a service...</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="plastering">Plastering</option>
                    <option value="renovations">Renovations</option>
                    <option value="extensions">Extensions</option>
                    <option value="tiny-house">Tiny House Building</option>
                    <option value="other">Other / Maintenance</option>
                  </select>
                  {/* Custom dropdown arrow for native select styling */}
                  <div className="absolute right-4 top-10 pointer-events-none text-muted-foreground">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Project Details *</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me a bit about what needs doing..." 
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                    data-testid="textarea-contact-message"
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 text-lg h-14" 
                  disabled={isSubmitting}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}

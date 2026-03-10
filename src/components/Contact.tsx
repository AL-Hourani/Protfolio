import { useState, FormEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_q75w7jv",
        "template_5jtlj7a",
        form.current,
        "rJIyvHjP0nGFgau1X"
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully! I will get back to you soon.");
        form.current.reset();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-github-darker/40">

      <div className="w-[92%] max-w-6xl mx-auto">

        {/* Title */}

        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            If you would like to collaborate, discuss a project, or just say hello,
            feel free to reach out.
          </p>

          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>

        </div>

        {/* Content */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <Card className="p-8 bg-github-dark border  hover:border-github-accent transition">

            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="h-11 w-11 rounded-lg bg-github-accent/10 flex items-center justify-center">
                  <Mail className="text-github-accent" size={20} />
                </div>

                <div>
                  <p className="text-sm text-github-text opacity-70">Email</p>
                  <a
                    href="mailto:jalhourani3@gmail.com"
                    className="text-github-accent hover:underline"
                  >
                    jalhourani3@gmail.com
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="h-11 w-11 rounded-lg bg-github-accent/10 flex items-center justify-center">
                  <Phone className="text-github-accent" size={20} />
                </div>

                <div>
                  <p className="text-sm text-github-text opacity-70">Phone</p>
                  <a
                    href="tel:+963980329517"
                    className="text-github-accent hover:underline"
                  >
                    +963 980 329 517
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="h-11 w-11 rounded-lg bg-github-accent/10 flex items-center justify-center">
                  <MapPin className="text-github-accent" size={20} />
                </div>

                <div>
                  <p className="text-sm text-github-text opacity-70">Location</p>
                  <p>Homs, Syria</p>
                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-12">

              <h4 className="text-lg font-medium mb-4">
                Connect with me
              </h4>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="h-10 w-10 rounded-lg bg-github-dark flex items-center justify-center hover:bg-github-accent/20 transition"
                >
                  <Github size={18} />
                </a>

                <a
                  href="#"
                  className="h-10 w-10 rounded-lg bg-github-dark flex items-center justify-center hover:bg-github-accent/20 transition"
                >
                  <Linkedin size={18} />
                </a>

              </div>

            </div>

          </Card>

          {/* Contact Form */}

          <Card className="p-8 bg-github-medium border border-github-medium hover:border-github-accent transition">

            <h3 className="text-2xl font-semibold mb-8">
              Send a Message
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">

              <div>

                <label className="text-sm text-github-text mb-1 block">
                  Your Name
                </label>

                <Input
                  name="from_name"
                  required
                  className="bg-github-dark border-github-dark focus:border-github-accent"
                />

              </div>

              <div>

                <label className="text-sm text-github-text mb-1 block">
                  Email
                </label>

                <Input
                  name="user_email"
                  type="email"
                  required
                  className="bg-github-dark border-github-dark focus:border-github-accent"
                />

              </div>

              <div>

                <label className="text-sm text-github-text mb-1 block">
                  Message
                </label>

                <Textarea
                  name="message"
                  required
                  className="bg-github-dark border-github-dark min-h-[130px] focus:border-github-accent"
                />

              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-github-blue hover:bg-opacity-90 flex items-center justify-center gap-2 mt-4"
              >

                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && <ArrowRight size={18} />}

              </Button>

            </form>

          </Card>

        </div>

      </div>

    </section>
  );
};

export default Contact;
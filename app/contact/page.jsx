"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { profile, services } from "@/lib/profile";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: profile.location,
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "nur-alam04",
    href: profile.linkedin,
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Nur-Alam-Limon",
    href: profile.github,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const chosen = new URLSearchParams(window.location.search).get("service");
    if (chosen) {
      setFormData((prev) => ({ ...prev, service: chosen }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent. I will reply by email.");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("The form could not send. Use the email link on the right. It opens your mail app directly.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("The form could not send. Use the email link on the right. It opens your mail app directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
      }}
      className="py-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[100px]">
          {/* FORM */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#1A2A3F] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Tell me the product and the constraint. Email and phone on the right work even if this form is blocked.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {services.map((service) => (
                      <SelectItem key={service.num} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" size="md" className="max-w-40" disabled={sending}>
                {sending ? "Sending" : "Send message"}
              </Button>

              {status && (
                <p className="text-white/60 text-sm">{status}</p>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#1A2A3F] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl hover:text-accent" target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {item.description}
                      </a>
                    ) : (
                      <h3 className="text-xl">{item.description}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

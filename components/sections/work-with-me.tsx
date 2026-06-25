// components/sections/work-with-me.tsx

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Startup Research",
        description:
            "Helping founders understand markets, competitors, and opportunities before making strategic decisions",
        items: [
            "Competitor Analysis",
            "Market Research",
            "Industry Mapping",
            "Customer Insights",
        ],
    },
    {
        title: "Business Analytics",
        description:
            "Transforming raw data into actionable insights through dashboards, reporting, and structured analysis",
        items: [
            "KPI Dashboards",
            "Excel Models",
            "Power BI",
            "Performance Analysis",
        ],
    },
    {
        title: "Product & Growth",
        description:
            "Supporting product decisions and growth initiatives through problem-solving and experimentation",
        items: [
            "Growth Strategy",
            "User Research",
            "Process Optimization",
            "Business Insights",
        ],
    },
    {
        title: "Mentorship",
        description:
            "Helping students and young professionals navigate academics (tutoring), careers, and opportunities",
        items: [
            "Resume Reviews",
            "Interview Preparation",
            "Career Guidance",
            "IIT/JEE Mentorship",
        ],
    },
    
];

export function WorkWithMeSection() {
    return (
        <section id="work-with-me" className="pt-4 pb-4 md:pt-12 md:pb-4">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    label="Work With Me"
                    title="Let's build something meaningful."
                    subtitle="I collaborate with startups, founders, and ambitious individuals across analytics, strategy, research, and mentorship."
                />

                <div className="grid md:grid-cols-2 gap-5 mt-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                            }}
                            className="card-base p-7 group"
                        >
                            <h3
                                className="text-xl font-bold mb-3"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {service.title}
                            </h3>

                            <p
                                className="text-sm leading-relaxed mb-5"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-xs px-3 py-1 rounded-full"
                                        style={{
                                            background: "var(--border)",
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="card-base p-8 mt-8 text-center"
                >
                    <h3
                        className="text-2xl font-bold mb-3"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Have a project in mind?
                    </h3>

                    <p
                        className="max-w-2xl mx-auto mb-6"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Whether you're building a startup, validating an idea,
                        improving operations, or looking for strategic insights,
                        I'd love to hear about your challenge.
                    </p>

                    <a
                        href="mailto:aniruddhgoyal03@gmail.com"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                        style={{ color: "var(--accent)" }}
                    >
                        Let's Talk
                        <ArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
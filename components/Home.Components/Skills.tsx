"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Skills</h2>

      {/* Technical Skills */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="space-y-4">
          <Card className="shadow-md border border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="p-4">
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Backend Development (Node.js, Express.js, TypeScript)</li>
                <li>Database Management (PostgreSQL, Prisma, Sequelize, MongoDB)</li>
                <li>Authentication & Authorization (JWT, Cookies, RBAC)</li>
                <li>API Development (RESTful APIs, Postman testing)</li>
                <li>Frontend Development (React, Next.js, Tailwind CSS)</li>
                <li>Version Control (Git, GitHub)</li>
                <li>Dev Tools (VS Code, Docker basics)</li>
                <li>Cybersecurity Fundamentals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
        <div className="space-y-4">
          <Card className="shadow-md border border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="p-4">
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Problem-Solving & Analytical Thinking</li>
                <li>Team Collaboration & Communication</li>
                <li>Adaptability & Continuous Learning</li>
                <li>Attention to Detail</li>
                <li>Time Management</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// src/components/ui/GithubCalendar.jsx
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalendarSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-8">GitHub Contributions</h2>

      <div className="w-full max-w-4xl mx-auto overflow-auto">
        <GitHubCalendar
          username="Souvik34"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          theme={{
            light: ["#f0f0f0", "#c084fc", "#a855f7", "#9333ea", "#6b21a8"],
            dark: ["#0f172a", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7"],
          }}
        />
      </div>
    </section>
  );
}

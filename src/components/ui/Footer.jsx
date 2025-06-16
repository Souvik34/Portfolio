import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Hash,
} from "lucide-react";
import { SiDiscord, SiHashnode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-20 py-8 px-6 text-sm text-zinc-600 dark:text-zinc-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Souvik Sural. All rights reserved.
        </p>

        <div className="flex gap-4 text-zinc-500 dark:text-zinc-400">
          <a
            href="mailto:youremail@gmail.com"
            aria-label="Send Email"
            className="hover:text-red-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://discord.com/users/yourid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-indigo-400 transition-colors"
          >
            <SiDiscord className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://hashnode.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode Blog"
            className="hover:text-blue-600 transition-colors"
          >
            <SiHashnode className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

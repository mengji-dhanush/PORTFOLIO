import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  name,
  description,
  github,
  deployment,
}: {
  name: string;
  description: string | null;
  github: string;
  deployment: string | null;
}) {
  return (
    <div className="group relative p-6 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{name}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed min-h-[60px]">
          {description || "A cool project built with passion."}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
        <a
          href={`https://${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>Code</span>
        </a>

        {deployment && (
          <a
            href={`https://${deployment}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

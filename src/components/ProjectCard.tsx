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
    <div className="card hover:shadow-5xl hover:scale-105 transition-all duration-300 px-4 py-2 m-2 bg-neutral-800 text-white border border-neutral-200 rounded-xl w-60">
      <div className="title text-bold text-3xl font-bold">{name}</div>
      <div className="desc">{description}</div>
      <div className="github">
        <a href={`https://${github}`} className="hover:underline text-blue-200">
          Github
        </a>
      </div>
      {deployment && (
        <div className="deploy">
          <a
            href={`https://${deployment}`}
            className="hover:underline text-blue-200"
          >
            View Website
          </a>
        </div>
      )}
    </div>
  );
}

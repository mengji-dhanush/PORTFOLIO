import Card from "@/components/ProjectCard";

const projects = [
  {
    name: "Socio Campus",
    description:
      "A cloud-native social media platform for college students built with Next.js and Express.js. Features JWT-based auth, role checks, and secure session management. Deployed on AWS VPC with EC2, ElastiCache (Redis), DynamoDB, and S3.",
    github: "github.com/mengji-dhanush/Socio-Campus",
    deployment: null,
  },
  {
    name: "Dr32Teeth",
    description:
      "Real-world dental clinic management system with Next.js, Express.js, and PostgreSQL. Includes OTP-based auth, RBAC for doctors/staff/patients, and appointment dashboards. Containerized with Docker and CI/CD pipelines.",
    github: "github.com/DyutiM25/DR32THEETH",
    deployment: null,
  },
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-6 lg:px-20 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="w-12 h-[2px] bg-purple-500"></span>
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              name={project.name}
              description={project.description}
              github={project.github}
              deployment={project.deployment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

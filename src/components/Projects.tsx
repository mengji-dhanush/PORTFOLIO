import Card from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="projects border-b border-b-white bg-black w-full px-4 py-2"
    >
      <div className="text-4xl text-bold text-white font-bold px-4 py-2">
        Here are some of my works
      </div>
      <div className="cards flex flex-wrap justify-evenly px-4 py-2">
        <Card
          name="wanderlust"
          description=""
          github="github.com/mengji-dhanush/wanderlust"
          deployment=""
        />
        <Card
          name="socio"
          github="github.com/mengji-dhanush/socio"
          description=""
          deployment=""
        />

        <Card
          name="kishan"
          github="github.com/mengji-dhanush/KISHAN---A-VIRTUAL-FARMER-ASSISTANT"
          description="Helping farmers to detect plant diseases using a CNN with an option of chatting with experts so it is helpful to farmers. Acheived 89.9% accuracy after 10 epochs and could reach upto 97% if done for more epoch"
          deployment=""
        />
      </div>
    </div>
  );
}

import Form from "@/components/Form";

export default function Contact() {
  return (
    <div id="contact" className="py-20 px-6 lg:px-20 w-full relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </p>

        <Form />
      </div>
    </div>
  );
}

import Form from "@/components/Form";

export default function Contact() {
  return (
    <div
      id="contact"
      className="contact-me border-b border-b-white bg-black px-4 py-2 text-white w-full"
    >
      <div className="contact-me-text text-4xl text-bold px-4 py-2 m-2 font-bold">
        Contact Me
      </div>
      <Form />
    </div>
  );
}

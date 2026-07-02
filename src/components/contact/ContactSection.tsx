
import Container from "../ui/Container";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const ContactSection = () => {
  return (
    <section className="bg-[#0F1115] py-32">

      <Container>

        <div className="grid gap-10 lg:grid-cols-2">

          <ContactForm />

          <GoogleMap />

        </div>

      </Container>

    </section>
  );
};

export default ContactSection;
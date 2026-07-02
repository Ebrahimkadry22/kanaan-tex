import { motion } from "framer-motion";

import ContactCard from "./ContactCard";
import { contactData } from "./contactData";
import Container from "../ui/Container";

const ContactCards = () => {
  return (
    <section className="bg-[#0F1115] py-24">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {contactData.map((item) => (
            <ContactCard
              key={item.id}
              {...item}
            />
          ))}
        </motion.div>

      </Container>

    </section>
  );
};

export default ContactCards;
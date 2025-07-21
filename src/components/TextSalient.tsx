import { motion } from 'framer-motion';


export default function TextSalient() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
      <section className="py-10 px-6 md:px-[5%] text-center w-full font-lato">
        <h2 className="text-3xl  tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h2>
        <p className="uppercase mb-5 mt-10 underline-offset-4 text-sm tracking-wide text-genese-gold">Detalles del artículo</p>
      </section>
    </motion.div>
  );
}

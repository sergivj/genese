import { motion } from "framer-motion";

export default function TextVideo() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex w-full py-[5%] pl-6 md:pl-[5%] gap-x-14"
      >

      <section className=" text-start w-1/2">
        <h2 className="text-4xl w-full  tracking-wide ">Caja Genèse de regalo en cada pedido </h2>
        <p className="uppercase mb-5 mt-5 underline-offset-4 text-md tracking-wide text-genese-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      <video
        className="w-1/2 h-auto rounded-lg shadow-lg"
        src="/diamons.mp4"
        autoPlay
        loop
        muted
      />

    </motion.div>
  );
}

export default function RegisterButton({bounce}) {
  return (
    <a
      href="#"
      class="{bounce} inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-8 py-3"
    >
      Register
    </a>
  );
}

import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link href="../register-page">
      <a class="inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3 border-white border-1">
        Register
      </a>
    </Link>
  );
}

export default function RecordElement({
  top,
  title,
  text,
  ex,
  imgSource,
  link,
}) {
  return (
    <>
      <div class="group flex flex-col md:flex-row items-center gap-4 lg:gap-6 hover:bg-white rounded-3xl py-4 px-4">
        <a
          href={link}
          class="w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-3xl shadow-lg relative"
        >
          <img
            src={imgSource}
            loading="lazy"
            alt="Photo by Minh Pham"
            class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
          />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-gray-500 text-sm">{top}</span>

          <h2 class="text-gray-800 text-xl font-bold">
            <a
              href={link}
              class="hover:text-indigo-700 hover:underline active:text-indigo-600 transition duration-100"
            >
              {title}
            </a>
          </h2>

          <p class="text-gray-500">
            {text}
            <br />
            <a class="italic">ex : {ex}</a>
          </p>

          <div class="text-right pr-5">
            <a
              href={link}
              class="text-indigo-500 hover:text-indigo-700 hover:underline active:text-indigo-700 font-semibold transition duration-100 text-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

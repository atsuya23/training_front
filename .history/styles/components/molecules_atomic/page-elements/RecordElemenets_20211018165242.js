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
      <div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6 hover:bg-white rounded-3xl">
        <a
          href={link}
          class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-3xl shadow-lg relative"
        >
          <img
            src={imgSource}
            loading="lazy"
            alt="Photo by Minh Pham"
            class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
          />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-gray-400 text-sm">{top}</span>

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
            ex : {ex}
          </p>

          <div>
            <a
              href="#"
              class="text-indigo-500 hover:text-indigo-700 hover:underline active:text-indigo-700 font-semibold transition duration-100"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

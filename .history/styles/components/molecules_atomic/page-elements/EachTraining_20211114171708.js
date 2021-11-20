export default function EachTraining({  }) {
  return (
    <div>
      <a
        href="#"
        class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
      >
        <img
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          loading="lazy"
          alt="Photo by Austin Wade"
          class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
        />
      </a>

      <div class="flex flex-col">
        <span class="text-gray-500">Men</span>
        <a
          href="#"
          class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
        >
          Business Causual
        </a>
      </div>
    </div>
  );
}
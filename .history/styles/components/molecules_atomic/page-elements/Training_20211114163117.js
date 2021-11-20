import Link from "next/link";

export default function Training({ training }) {
  return (
    <>
      {/* Training - start */}
      <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4 border-b border-indigo-300 hover:bg-white rounded-t-3xl duration-300">
        <div class="w-20 md:w-24 h-20 md:h-24 bg-gray-100 rounded-full overflow-hidden shadow-3xl cursor-pointer">
          {training.place == "zym" && (
            <img
              src="https://training-rest.herokuapp.com/media/images/bench_press_icon.jpg"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              class="w-full h-full object-cover object-center"
            />
          )}
          {training.place == "home" && (
            <img
              src="https://training-rest.herokuapp.com/media/images/dumbbell_icon.jpg"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              class="w-full h-full object-cover object-center"
            />
          )}
        </div>

        <div>
          <Link href={`/training/${training.id}`}>
            <div class="text-indigo-500 hover:text-indigo-700 hover:underline cursor-pointer md:text-xl font-bold text-center sm:text-left">
              {training.created_at}
            </div>
          </Link>
          <p class="text-gray-700 text-sm md:text-base text-center sm:text-left">
            Evaluation : {training.evaluation}
          </p>
          <p class="text-gray-500 text-sm md:text-base text-center sm:text-left italic">
            place : {training.place}
          </p>
        </div>
      </div>
      {/* Training - end */}
    </>
  );
}

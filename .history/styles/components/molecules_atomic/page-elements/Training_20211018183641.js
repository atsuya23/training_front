export default function Training({ training }) {
  return (
    <>
      {/* person - start */}
      <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4 border-b border-indigo-300 hover:bg-white rounded-l">
        <div class="w-20 md:w-24 h-20 md:h-24 bg-gray-100 rounded-full overflow-hidden shadow-3xl hover:pointer-cursor">
          <img
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
            loading="lazy"
            alt="Photo by Ayo Ogunseinde"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-indigo-500 hover:text-indigo-700 hover:underline cursor-pointer md:text-xl font-bold text-center sm:text-left">
            {training.created_at}
          </div>
          <p class="text-gray-700 text-sm md:text-base text-center sm:text-left">
            Evaluation : {training.evaluation}
          </p>
          <p class="text-gray-500 text-sm md:text-base text-center sm:text-left italic">
            {training.review && <p>review : {training.review}</p>}
          </p>

        </div>
      </div>
      {/* person - end */}
    </>
  );
}

export default function Content({ content }) {
    return (
      <>
        {/* person - start */}
        <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4 border-b border-dotted border-gray-400">
          {/* <div class="w-20 md:w-24 h-20 md:h-24 bg-gray-100 rounded-full overflow-hidden shadow-3xl cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              class="w-full h-full object-cover object-center"
            />
          </div> */}
  
          <div>
            <div class="text-green-400 md:text-xl text-center sm:text-left">
              {content.training_type}
            </div>
            <p class="text-gray-700 text-sm md:text-base text-center sm:text-left">
              Evaluation : {content.training_type}
            </p>
            <p class="text-gray-500 text-sm md:text-base text-center sm:text-left italic">
              {content.set1 && <p>review : {content.set1}</p>}
            </p>
  
          </div>
        </div>
        {/* person - end */}
      </>
    );
  }
  
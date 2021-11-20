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
          <div class="text-gray-600 font-normal inline-block md:text-xl text-left sm:text-left py-3">
            <table class="table-fixed">
              <tr>
                <th class="w-36 text-sm md:text-lg">
                  {content.training_type == "bench_press" && "ベンチプレス"}
                </th>
                <th class="text-red-400 text-sm md:text-lg">
                  {" "}
                  {content.weight && `${content.weight}Kg * `} ( {content.set1}{" "}
                  {content.set2 && `+ ${content.set2}`}{" "}
                  {content.set3 && `+ ${content.set3}`} )
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* person - end */}
    </>
  );
}

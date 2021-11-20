export default function ContentEachTotal({ content, aboutTraining }) {
  return (
    <div class="bg-gray-100">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        {/* --- text - start --- */}
        <div class="mb-10 md:mb-16">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Meet our Team
          </h2>

          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* --- text - end --- */}

        {/* --- Content start --- */}
        <div class="flex flex-col sm:flex-row gap-2 md:gap-4 border-b border-dotted border-gray-400">
          <div class="text-gray-600 font-normal inline-block md:text-xl text-left py-3 pl-2">
            <table class="table-fixed">
              <tr>
                <th class="w-48 text-red-400 text-sm md:text-lg">
                  {" "}
                  {content.weight && `${content.weight}Kg * `} ( {content.set1}{" "}
                  {content.set2 && `+ ${content.set2}`}{" "}
                  {content.set3 && `+ ${content.set3}`} )
                </th>
                <th class="pl-1 text-gray-400 text-base italic">
                  (
                  {content.set3 &&
                    `${
                      content.weight *
                      (content.set1 + content.set2 + content.set3)
                    }Kg`}
                  {content.set2 &&
                    content.set3 == null &&
                    `${content.weight * (content.set1 + content.set2)}Kg`}
                  {content.set2 == null &&
                    content.set3 == null &&
                    `${content.weight * content.set1}Kg`}
                  )
                </th>
              </tr>
            </table>
          </div>
        </div>
        {/* --- Content end --- */}
      </div>
    </div>
  );
}

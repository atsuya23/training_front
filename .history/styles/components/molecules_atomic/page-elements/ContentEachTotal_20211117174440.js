export default function ContentEachTotal({ content, id_training }) {
  console.log(id_training)

  return (
    <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
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

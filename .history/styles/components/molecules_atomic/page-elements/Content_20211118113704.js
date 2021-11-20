import TypeToJap from "../../atoms_atomic/changeWord/TypeToJap";

export default function Content({ content }) {
  return (
    <>
      {/* --- Content start --- */}
      <div class="flex flex-col sm:flex-row gap-2 md:gap-4 border-b border-dotted border-gray-400">
        <div class="text-gray-600 font-normal inline-block md:text-xl text-left pt-4 pb-3 pl-2">
          <table class="table-fixed">
            <tr>
              <th class="w-48 text-sm md:text-base">
                <TypeToJap type={content.training_type} />
              </th>
              <th class="w-52 text-red-400 text-sm md:text-lg">
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
    </>
  );
}

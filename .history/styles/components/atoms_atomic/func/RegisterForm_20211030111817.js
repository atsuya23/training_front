import ContentForm from "./ContentForm";
import TrainingForm from "./TrainingForm";
import { createTraining, createContent } from "./createFunc";

export default function RegisterForm() {
  return (
    <form
      class="max-w-screen-md gap-4 mx-auto"
      onSubmit={(createTraining, createContent)}
    >
      <TrainingForm />
      <br />
      <ContentForm />
      <div class="sm:col-span-2 flex justify-between items-center mt-9">
        <button
          type="submit"
          class="inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3 mt-3 shadow-lg animate-bounce"
        >
          Create
        </button>

        <span class="text-gray-500 text-sm">*Required</span>
      </div>
    </form>
  );
}

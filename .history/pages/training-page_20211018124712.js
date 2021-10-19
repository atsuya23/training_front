import Layout from "../styles/components/organisms_atomic/Layout";

import { getAllTraining } from "../styles/components/atoms_atomic/func/getAllTraining";
import Training from "../styles/components/molecules_atomic/Training";

export default function TrainingPage({ filteredTrainings }) {
  return (
    <Layout title="Training Page">
      <ul>
        {filteredTrainings &&
          filteredTrainings.map((training) => (
            <Training key={training.id} training={training} />
          ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredTrainings = await getAllTraining();
  return {
    props: { filteredTrainings },
  };
}

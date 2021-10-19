import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../styles/components/organisms_atomic/Layout";
import { getAllTraining } from "../../styles/components/atoms_atomic/func/getAllTraining";
import { getAllTrainingId } from "../../styles/components/atoms_atomic/func/getAllTrainingId"; 

export default function Training({training}) {
    const router = useRouter();

    if (!training) {
        return <div>Loading...</div>
    }
    return (
        <Layout title={`Training detail -${training.id}`-}>
            {training.id}
            {training.created_at}
        </Layout>
    )
}
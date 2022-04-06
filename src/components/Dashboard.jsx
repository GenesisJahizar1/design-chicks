import styles from "./Dashboard.module.css";
import { Footer } from "./footer/Footer";
import { Form } from "./form/Form";
import { ContGrid } from "./grid/ContGrid";

export const Dashboard = () => {
    return (
        <> 
            <main className={styles.content}>
                <h1 className={styles.title}>Condimentum consectetur</h1>
                <Form />
                <ContGrid />
            </main>

            <Footer />
           
        </>

    );
};

import styles from "./LoginPage.module.css"
import { LoginModal } from "../components/LoginModal"
export function LoginPage() {
    return <div className={styles.container}>
        <LoginModal></LoginModal>
    </div>
}
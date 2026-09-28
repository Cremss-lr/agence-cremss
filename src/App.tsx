import { useRef } from "react";
import styles from "./App.module.css";
import { CremssLogo, type CremssLogoHandle } from "./components/cremss-logo";

function App() {
	const logoRef = useRef<CremssLogoHandle>(null);

	return (
		<main className={styles.stage}>
      <CremssLogo ref={logoRef} className={styles.logo} />
    </main>
	);
}

export default App

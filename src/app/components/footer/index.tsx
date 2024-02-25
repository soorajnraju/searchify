import Image from "next/image";
import styles from "./index.module.scss";
import logo from "@public/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles["footer-content"]}>
      <div className={styles["nav-right"]}>
        <li>
          <Link href={"/"}>
            <Image width={200} height={50} src={logo} alt="flydubai" />
          </Link>
        </li>
      </div>
    </div>
  );
}

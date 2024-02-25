import Image from "next/image";
import styles from "./index.module.scss";
import menu from "@public/menu.svg";
import IconBellPlus from "../icons/icon-bell-plus";
import IconProfile from "../icons/icon-profile";
import IconViewGrid from "../icons/icon-viw-grid";

export interface NavBarProps {
  handleToggle: () => void;
}

export default function Navbar({ handleToggle }: NavBarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-left"]}>
        <li onClick={() => handleToggle()}>
          <Image height={30} src={menu} alt={"Menu"} />
        </li>
      </div>
      <div className={styles["nav-right"]}>
        <li>
          <IconBellPlus />
        </li>
        <li>
          <IconProfile />
        </li>
        <li>
          <IconViewGrid />
        </li>
      </div>
    </nav>
  );
}

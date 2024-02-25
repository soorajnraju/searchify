import Image from "next/image";
import styles from "./index.module.scss";
import menu from "@public/menu.svg";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import PersonIcon from "@mui/icons-material/Person";
import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";

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
          <NotificationAddIcon />
        </li>
        <li>
          <PersonIcon />
        </li>
        <li>
          <ViewComfyAltIcon />
        </li>
      </div>
    </nav>
  );
}

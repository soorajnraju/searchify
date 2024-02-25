import Link from "next/link";
import styles from "./index.module.scss";

export interface SideBarProps {
  items: item[];
}

interface item {
  key: string;
  title: string;
}

export default function SideBar({ items }: SideBarProps) {
  return (
    <div className={styles["sidebar-wrapper"]}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.key}>
              <Link href={"#"}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

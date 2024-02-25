import Image from "next/image";
import styles from "./index.module.scss";

export interface CardProps {
  item: PackageItem;
}

export interface PackageItem {
  id: string;
  title: string;
  description: string;
  image: Image;
}

export interface Image {
  title: string;
  url: string;
}

export default function Card({ item }: CardProps) {
  const { id, title, description, image } = item;
  return (
    <div className={styles["card-wrapper"]}>
      <Image width={350} height={200} src={image.url} alt={image.title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

import Card from "../../components/card";
import styles from "./page.module.scss";
import { headers } from "next/headers";

export default async function Page({
  params,
}: {
  params: { keyword: string };
}) {
  const keyword = params.keyword;
  const host = headers().get("host");
  //As there is no ssl certificate configured using http
  //const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const protocol = "http";
  let data = null;
  if (keyword && keyword != "" && keyword.length >= 3) {
    let response = await fetch(
      `${protocol}://${host}/api/search?keyword=${keyword}`
    );
    try {
      data = await response.json();
    } catch (e) {
      console.log(e);
    }

    return (
      <div className={styles.container}>
        <div className={styles.title}>Search results</div>
        <div className={styles["search-results"]}>
          {data.packages[0]?.items.map((item: any) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

/*Proxy API which is responsible to pull the data from contentful and transform
the response according to the UI demand*/

import { PackageItemType, PackageType } from "@/app/types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  //fetch from contentful
  const postData = {
    query: `
    query {
        sfPackageCollection(limit:10, where:{title_contains:"${keyword}"}){
          total, 
          items{
            sys{
              id
            }
            title,
            itemsCollection(limit:10){
              total,
              items{
                sys{
                  id
                }
                title,
                image{
                  title,
                  url
                },
                description
              }
            }
          }
        }
      }`,
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  };
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(postData),
  };
  const response = await fetch(
    process.env.CONTENTFUL_ENDPOINT as string,
    requestOptions
  ).then((response) => {
    // Check if the response status is OK (200) or not
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON response
    return response.json();
  });

  const jsonData = await response;

  //Preparing final json
  const result = {
    packages: <any>[],
  };

  jsonData.data.sfPackageCollection.items.forEach((pack: any) => {
    let p: PackageType = {
      id: pack.sys.id,
      title: pack.title,
      items: [],
    };
    pack.itemsCollection.items.forEach((item: any) => {
      let t: PackageItemType = {
        id: item.sys.id,
        title: item.title,
        description: item.description,
        image: item.image,
      };
      p.items.push(t);
    });
    result.packages.push(p);
  });
  //End of preparation

  return Response.json(result);
}

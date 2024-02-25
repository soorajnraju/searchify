/** This file contains the type/interfaces used in the app except the propTypes */
export interface PackagesType {
  packages: PackageType[];
}

export interface PackageType {
  id: string;
  title: string;
  items: PackageItemType[];
}

export interface PackageItemType {
  id: string;
  title: string;
  description: string;
  image: {
    title: string;
    url: string;
  };
}

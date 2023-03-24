import { Keyword } from "./keyword";

export interface Resource {
  id: string;
  name: string;
  image: string;
  description: string;
  keywords: Keyword[];
}

export type Library = {
  [key: string]: Resource[];
};

export type Aggregate = {
  library: Library,
  keywords: string[]
}
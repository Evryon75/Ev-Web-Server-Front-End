export enum LanguageTags {
  RUST,
  JAVA,
  CSHARP,
  C,
  CPP,
  PYTHON,
  CSS,
  HTML,
  MARKDOWN,
  EV,
}
export interface Repo {
  name: string,
  about: string,
  language: string,
}

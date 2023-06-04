export enum LanguageTags {
  RUST = "Rust",
  JAVA = "Java",
  CSHARP = "C#",
  C = "C",
  CPP = "C++",
  PYTHON = "Python",
  CSS = "CSS",
  HTML = "HTML",
  MARKDOWN = "Markdown",
  EV = "Ev",
  NULL = "Null",
}
export interface Repo {
  name: string,
  about: string,
  language: string,
}

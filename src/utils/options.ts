import { CheckboxOption } from "../components/Checkbox/Checkbox";

// Model Options
export enum ModelOptions {
  GPT_35_TURBO = "gpt-3.5-turbo",
  GPT_4 = "gpt-4",
  GPT_4O = "gpt-4o",
}

export const MODEL_OPT_DEFAULT = ModelOptions.GPT_4O;

export const MODEL_OPTS: CheckboxOption[] = [
  { value: ModelOptions.GPT_35_TURBO, label: "gpt-3.5-turbo" },
  { value: ModelOptions.GPT_4, label: "gpt-4" },
  { value: ModelOptions.GPT_4O, label: "gpt-4o (latest)" },
];

// Comments Style Options
export enum CommentsStyle {
  PROFESSIONAL = "professional",
  INFORMAL = "informal",
  DIRECT = "direct",
  FRIENDLY = "friendly",
  FUNNY = "funny",
  ANYTHING = "anything",
}

export const COMMENTS_STYLE_OPT_DEFAULT = CommentsStyle.ANYTHING;

export const COMMENTS_STYLE_OPTS: CheckboxOption[] = [
  { value: CommentsStyle.ANYTHING, label: "Anything" },
  { value: CommentsStyle.INFORMAL, label: "Informal" },
  { value: CommentsStyle.PROFESSIONAL, label: "Professional" },
  { value: CommentsStyle.DIRECT, label: "Direct" },
  { value: CommentsStyle.FRIENDLY, label: "Friendly" },
  { value: CommentsStyle.FUNNY, label: "Funny" },
];

// Hashtag Options
export enum HashtagOptions {
  RANDOMLY = "randomly",
  NO = "no",
}

export const HASHTAG_OPT_DEFAULT = HashtagOptions.RANDOMLY;

export const HASHTAG_OPTS: CheckboxOption[] = [
  { value: HashtagOptions.RANDOMLY, label: "Yes" },
  { value: HashtagOptions.NO, label: "No, please" },
];

// import { createUniqueID } from './utilities'
import { customAlphabet } from 'nanoid/non-secure'
import { v4 as uuidv4 } from 'uuid';

function createUniqueID(length: number = 5): string {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', length);
  return nanoid()
}

export type Field = {
  id: string,
  key: string,
  label: string,
  type: string,
  fields: any[],
  options: object,
  default: any,
  is_static: boolean
}

export const Field = (f = {}): Field => ({
  id: createUniqueID(),
  key: '',
  label: '',
  type: 'text',
  fields: [],
  options: {},
  default: '',
  is_static: false,
  ...f
})

export type Component = {
  type: 'component',
  id: string,
  symbolID: string | null
}

export const Component = (): Component => ({
  type: 'component',
  id: createUniqueID(),
  symbolID: null
})

export type Symbol = {
  id: string,
  name: string,
  code: {
    html: string,
    css: string,
    js: string
  },
  fields: any[],
  content: object
}

export const Symbol = (symbol = {}): Symbol => ({
  id: uuidv4(),
  name: '',
  code: {
    css: '',
    html: '',
    js: ''
  },
  fields: [],
  content: {
    en: {}
  },
  ...symbol
})

export type Page = {
  id?: number,
  url: string,
  name: string,
  code: {
    html: {
      head: string,
      below: string
    },
    css: string,
    js: string
  },
  fields: any[],
  content: object,
  parent: string | null,
  // pages: any[],
}

export const Page = (page = {}): Page => ({
  id: uuidv4(),
  url: '',
  name: '',
  code: {
    html: {
      head: '',
      below: ''
    },
    css: '',
    js: ''
  },
  fields: [],
  content: {
    en: {}
  },
  parent: null,
  ...page,
})

export type Site = {
  id: string,
  url: string,
  name: string,
  // pages: any[],
  code: {
    html: {
      head: string,
      below: string
    },
    css: string,
    js: string
  },
  fields: any[],
  content: {}
}

export const Site = ({ url, name } = { url: 'default', name: 'Default' }): Site => ({
  id: uuidv4(),
  url,
  name,
  code: {
    html: {
      head: ``,
      below: ''
    },
    css: `
@import url("https://unpkg.com/@primo-app/primo@1.3.64/reset.css");

#page {
  font-family: system-ui, sans-serif;
  color: var(--color);
  line-height: 1.6; 
  font-size: 1rem;
  background: var(--background);
}

.section-container {
  max-width: var(--max-width, 1200px);
  margin: 0 auto;
  padding: 3rem var(--padding, 1rem); 
}

.heading {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  margin: 0;
}

.button {
  color: white;
  background: var(--color-accent);
  border-radius: 5px;
  padding: 8px 20px;
  transition: var(--transition);

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  } 

  &.inverted {
    background: transparent; 
    color: var(--color-accent); 
    border: 2px solid var(--color-accent);
  }
}
`,
    js: ''
  },
  fields: [],
  content: {
    'en': { // locale
    }
  }
})


export const locales = [
  {
    key: "af",
    name: "Afrikaans",
  },
  {
    key: "ar",
    name: "Arabic",
  },
  {
    key: "be",
    name: "Belarusian",
  },
  {
    key: "bg",
    name: "Bulgarian",
  },
  {
    key: "bs",
    name: "Bosnian",
  },
  {
    key: "ca",
    name: "Catalan",
  },
  {
    key: "cs",
    name: "Czech",
  },
  {
    key: "cy",
    name: "Welsh",
  },
  {
    key: "da",
    name: "Danish",
  },
  {
    key: "de",
    name: "German",
  },
  {
    key: "el",
    name: "Greek",
  },
  {
    key: "en",
    name: "English",
  },
  {
    key: "fa",
    name: "Persian",
  },
  {
    key: "fi",
    name: "Finnish",
  },
  {
    key: "fr",
    name: "French",
  },
  {
    key: "he",
    name: "Hebrew",
  },
  {
    key: "hi",
    name: "Hindi",
  },
  {
    key: "hu",
    name: "Hungarian",
  },
  {
    key: "hy-am",
    name: "Armenian",
  },
  {
    key: "id",
    name: "Indonesian",
  },
  {
    key: "is",
    name: "Icelandic",
  },
  {
    key: "it",
    name: "Italian",
  },
  {
    key: "ja",
    name: "Japanese",
  },
  {
    key: "ka",
    name: "Georgian",
  },
  {
    key: "kk",
    name: "Kazakh",
  },
  {
    key: "km",
    name: "Cambodian",
  },
  {
    key: "ko",
    name: "Korean",
  },
  {
    key: "lo",
    name: "Lao",
  },
  {
    key: "lt",
    name: "Lithuanian",
  },
  {
    key: "lv",
    name: "Latvian",
  },
  {
    key: "mk",
    name: "Macedonian",
  },
  {
    key: "mn",
    name: "Mongolian",
  },
  {
    key: "ms",
    name: "Malay",
  },
  {
    key: "my",
    name: "Burmese",
  },
  {
    key: "ne",
    name: "Nepalese",
  },
  {
    key: "nl",
    name: "Dutch",
  },
  {
    key: "pl",
    name: "Polish",
  },
  {
    key: "pt",
    name: "Portuguese",
  },
  {
    key: "ro",
    name: "Romanian",
  },
  {
    key: "ru",
    name: "Russian",
  },
  {
    key: "sk",
    name: "Slovak",
  },
  {
    key: "sl",
    name: "Slovenian",
  },
  {
    key: "sq",
    name: "Albanian",
  },
  {
    key: "sv",
    name: "Swedish",
  },
  {
    key: "th",
    name: "Thai",
  },
  {
    key: "tl-ph",
    name: "Tagalog (Philippines)",
  },
  {
    key: "tr",
    name: "Turkish",
  },
  {
    key: "uk",
    name: "Ukrainian",
  },
  {
    key: "ur",
    name: "Urdu",
  },
  {
    key: "uz",
    name: "Uzbek",
  },
  {
    key: "vi",
    name: "Vietnamese",
  },
  {
    key: "zh",
    name: "Chinese",
  },
  {
    key: "es",
    name: "Spanish",
  },
  {
    key: "et",
    name: "Estonian",
  },
];
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type Glossary = {
    id: string,
    englishName: string,
    koreanName: string,
    category: string,
    definition: string,
    example: string,
    relationships: Array<string>
}

export type Category = {
    id: string,
    koreanTitle: string,
    category: string
}
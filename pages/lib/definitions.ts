// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// 편의상 정의했습니다.

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
    koreanName: string,
    englishName: string
}
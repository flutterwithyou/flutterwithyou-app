// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// 편의상 정의했습니다.

export type Glossary = {
    id: String,
    englishName: String,
    koreanName: String,
    category: String,
    definition: String,
    example: String,
    relationships: Array<String>
}

export type Category = {
    id: String,
    koreanName: String,
    englishName: String
}
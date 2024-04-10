import { Glossary } from "./definitions";
import * as Hangul from 'hangul-js';

// Transform glossaries data which are from 'api/glossaries/all'

export async function findInitialChar(name: string) {
   
    // disassemble 
    const arr  = Hangul.disassemble(name); 
    // return initial char
    return arr[0];
    
}

    
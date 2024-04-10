// 엔드포인트가 glossaries/all 

import { Glossary } from '@/pages/lib/definitions';
import { findInitialChar } from '@/pages/lib/utils';
import { MongoClient, WithId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
   let dict = new Map<string, Glossary[]> ();
    try {
        
       if (req.method == 'GET') {  const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        const data = await db
            .collection("glossaries")
            .find({})
            .toArray();
        // res.status(200).json(data);

        client.close();
        
        /*glossaries = data.map((glossaries) => {
                _id: glossaries._id.toString()
            });
        }
        */
        let glossaries: Glossary[] = data.map((doc) => ({
            id: doc._id.toString(),
            koreanName: doc.koreanName.toString(),
            englishName: doc.englishName.toString(),
            category: doc.category.toString(),
            definition: doc.definition.toString(),
            example: doc.example.toString(),
            relationships: doc.relationships.toString()
        }));
        

    for (const elem of glossaries) {
        
        const glossary = elem.koreanName;
        const initialChar: string = await findInitialChar(glossary);
        if (dict.has(initialChar)) {
            dict.get(initialChar)?.push(elem);
        } else {
            dict.set(initialChar, [elem]);
        }
    }

    const jsonObject: { [key: string]: any } = {};
    dict.forEach((value, key) => {
        jsonObject[key] = value;
    });

    res.status(200).json(jsonObject);
    console.log(jsonObject);

    }
     else {
         res.status(405).end(); // Method not allowed
        }
}    
     catch (e) {
        console.error(e);
        res.status(500).end();
    }

}
// 엔드포인트가 glossaries/all 

import { Glossary } from '@/pages/lib/definitions';
import { findInitialChar } from '@/pages/lib/utils';
import { MongoClient, WithId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler (req: NextApiRequest, res: NextApiResponse) {
   let dict = new Map<string, Glossary[]> ();
    try {
        // 데이터베이스에서 전체 용어 데이터 가져오기
       if (req.method == 'GET') {  const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        const data = await db
            .collection("glossaries")
            .find({})
            .toArray();


        client.close();
        
    // 정의한 용어 타입 배열로 데이터 저장
        let glossaries: Glossary[] = data.map((doc) => ({
            id: doc._id.toString(),
            koreanName: doc.koreanName.toString(),
            englishName: doc.englishName.toString(),
            category: doc.category.toString(),
            definition: doc.definition.toString(),
            example: doc.example.toString(),
            relationships: doc.relationships.toString()
        }));
        
    // 용어 배열에 있는 용어의 첫번째 초성을 기준으로 저장
    for (const elem of glossaries) {
        
        const glossary = elem.koreanName;
        const initialChar: string = await findInitialChar(glossary); // 첫번째 자음을 가져온다
        if (dict.has(initialChar)) { // 기존 딕셔너리에 자음 키 값 존재 시 용어 추가
            dict.get(initialChar)?.push(elem);
        } else {
            dict.set(initialChar, [elem]); // 없을 시 새로운 키 값과 용어 추가
        }
    }

    // JSON 객체로 변환
    const jsonObject: { [key: string]: any } = {};
    dict.forEach((value, key) => {
        jsonObject[key] = value;
    });

    // 상태 코드 200이면 JSON 객체 반환
    res.status(200).json(jsonObject);
    // console.log(jsonObject);

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
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (  req: NextApiRequest, res: NextApiResponse ) {
    try {
        if (req.method == 'GET') {
        const {category} = req.query; // URL에서 query value 가져오기
        const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries"); // 데이터베이스와 연결
        // 쿼리 값이랑 같은 카테고리 데이터 가져오기
        const glossaries = await db 
            .collection("glossaries")
            .find({ category: category })
            .toArray(); 

        res.status(200).json(glossaries);

        client.close();
        
       } else {
            return res.status(405).end(); // Methods not allowed
        }
        
    } catch (e) {
        console.error(e);
    }

}
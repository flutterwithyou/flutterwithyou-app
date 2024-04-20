/**
 * @swagger
 * /api/glossaries/category/{category}:
 *   get:
 *     description: 카테고리에 속한 모든 용어들을 반환합니다.
 *     parameters:
 *      - in: path
 *        name: category
 *        schema:
 *         type: string
 *        required: true
 *        description: 한글 카테고리 첫 단어의 영문명. e.g. 플러터&다트 -> flutter
 *     responses:
 *       200:
 *         description: 용어들 중 해당 카테고리 프로퍼티를 가진 모든 용어들을 반환합니다.
 *       405:
 *          description: 잘못된 방법으로 접근
 *       500: 
 *          description: 내부 서버 에러 발생으로 인한 접근 거부
 */

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
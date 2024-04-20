/**
 * @swagger
 * /api/categories:
 *   get:
 *     description: 모든 카테고리들을 반환합니다.
 *     responses:
 *       200:
 *         description: 모든 카테고리 데이터를 반환합니다. 
 *       405:
 *          description: 잘못된 방법으로 접근
 *       500: 
 *          description: 내부 서버 에러 발생으로 인한 접근 거부
 */

import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { Category } from '../lib/definitions';


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'GET') {const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        // 데이터베이스 연결 후 카테고리들 데이터 가져오기
        const data = await db
            .collection("categories")
            .find({})
            .toArray();
        
        client.close();

        res.status(200).json(data);
        
    } else {
            res.status(405).end(); // Method not Allowed
        }
    } catch (e) {
        console.error(e);
    }
	
}
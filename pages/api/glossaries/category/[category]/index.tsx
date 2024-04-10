import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (  req: NextApiRequest, res: NextApiResponse ) {
    try {
        if (req.method == 'GET') {
        const {category} = req.query;
        const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        const glossaries = await db
            .collection("glossaries")
            .find({ category: category })
            .toArray();
        res.status(200).json(glossaries);

        client.close();
        
       } else {
            return res.status(405).end();
        }
        
    } catch (e) {
        console.error(e);
    }

}
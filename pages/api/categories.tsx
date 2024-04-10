import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'GET') {const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        const categories = await db
            .collection("categories")
            .find({})
            .toArray();
        res.status(200).json(categories);
        
        client.close();

        return {
            categories: categories.map((categories) => {
                _id: categories._id.toString()
            })
        }} else {
            res.status(405).end(); // Method not Allowed
        }
    } catch (e) {
        console.error(e);
    }
	
}
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function fetchCategoriesData (req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        const categories = await db
            .collection("categories")
            .find({})
            .toArray();
        res.json(categories);
        
        client.close();
    } catch (e) {
        console.error(e);
    }
    
    return
	
}
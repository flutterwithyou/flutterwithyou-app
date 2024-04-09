import clientPromise from "@/pages/lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("fluttewithyou_flutterGlossaries");
        const categories = await db
            .collection("categories")
            .find({})
            .toArray();
        res.json(categories);

        
    } catch (e) {
        console.error(e);
    }
}
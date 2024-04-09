import clientPromise from "@/pages/lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("fluttewithyou_flutterGlossaries");
        const glossaries = await db
            .collection("glossaries")
            .find({})
            .toArray();
        res.json(glossaries);
    } catch (e) {
        console.error(e);
    }
}
import { MongoClient } from 'mongodb';


export default async function fetchGlossariesFromDb () {
    try {
        const client = await MongoClient.connect('mongodb+srv://kjiwon411:HD4L97kJlB7OPWpU@cluster0.jlvxmnz.mongodb.net/fluttewithyou_flutterGlossaries?retryWrites=true&w=majority');
        const db = client.db("fluttewithyou_flutterGlossaries");
        const glossaries = await db
            .collection("glossaries")
            .find({})
            .toArray();

        client.close();
        
        return glossaries.map;
        
    } catch (e) {
        console.error(e);
    }

}
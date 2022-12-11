export default class Exercise {
    id: string;
    name: string;
    bodypart: string;
    info: string;
    wiki_link: string;
    image_link: string;
    constructor(id: string, name: string, bodypart: string, info: string, wiki_link: string, image_link: string) {
        this.id = id;
        this.name = name;
        this.bodypart = bodypart;
        this.info = info;
        this.wiki_link = wiki_link;
        this.image_link = image_link;
    }
    //unfinished implementation
    public static async getByBodyPart(bodypart: string) {
        const rawData = await fetch(`https://fitbro-server.onrender.com/exercise/${bodypart}`)
            .then((res) => res.json())
            .then((data) => {
                return data;
            });
        const outputArray = [];
        for (let i = 0; i < rawData.length; i++) {
            outputArray.push(new Exercise(rawData[i]._id, rawData[i].name, rawData[i].bodypart, rawData[i].info, rawData[i].wiki_link, rawData[i].image_link));
        }
        return outputArray;
    }
}

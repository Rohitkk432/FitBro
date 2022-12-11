export default class BodyPart {
    id: string;
    bodypart: string;
    info: string;
    constructor(id: string, bodypart: string, info: string) {
        this.id = id;
        this.bodypart = bodypart;
        this.info = info;
    }
    public static async getInfo(part: string) {
        const info = await fetch(`https://fitbro-server.onrender.com/partinfo/${part}`).then((res) => res.json());
        return new BodyPart(info[0]._id, info[0].bodypart, info[0].info);
    }
}

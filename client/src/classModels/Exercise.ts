export default class Exercise {
    private id: number;
    private name: string;
    private BodyPart: string;
    private info: string;
    private videoLink: string;
    private imageLink: string;
    constructor(id: number, name: string, BodyPart: string, info: string, videoLink: string, imageLink: string) {
        this.id = id;
        this.name = name;
        this.BodyPart = BodyPart;
        this.info = info;
        this.videoLink = videoLink;
        this.imageLink = imageLink;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBodyPart() {
        return this.BodyPart;
    }
    getInfo() {
        return this.info;
    }
    getVideoLink() {
        return this.videoLink;
    }
    getImageLink() {
        return this.imageLink;
    }

    //unfinished implementation
    static getById(id: string) {
        return 0;
    }
    static getByName(name: string) {
        return 0;
    }
    static getByBodyPart(bodyPart: string) {
        return 0;
    }
}

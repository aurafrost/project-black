export class Image{
    title:string;
    bg:string;
    facebook:string;
    twitter:string;
    video:string;
    image:string;
    href:string;
    text:string;
    
    constructor(title?,bg?,facebook?,twitter?,video?,image?,href?,text?){
        this.title=title;
        this.bg=bg;
        this.facebook=facebook;
        this.twitter=twitter;
        this.video=video;
        this.image=image;
        this.href=href;
        this.text=text;
    }
}
var Youtube = /** @class */ (function () {
    function Youtube(vd, prod, cat, pub, vw, lk, dlk, sh, dl, ss) {
        var _this = this;
        this.getTitle = function () {
            return _this.videotitle;
        };
        this.getProduction = function () {
            return _this.production;
        };
        this.getCatageory = function () {
            return _this.category;
        };
        this.getPublished = function () {
            return _this.published;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislike;
        };
        this.getShare = function () {
            return _this.share;
        };
        this.getDownload = function () {
            return _this.download;
        };
        this.getSubscribe = function () {
            return _this.subscibe;
        };
        this.videotitle = vd;
        this.production = prod;
        this.category = cat;
        this.published = pub;
        this.views = vw;
        this.likes = lk;
        this.dislike = dlk;
        this.share = sh;
        this.download = dl;
        this.subscibe = ss;
    }
    return Youtube;
}());
var y1 = new Youtube("Powerstar pawan kalyan Biggest Movie name is GabbarSing", " This Movie build by Parameswara Art Productions", "This movie lot of factors like Action and Entertainer movie", "This Movie Published by on of the tollywood biggest Screen  Mythri move makers", "This mobie views in 100.2millions", 5123564782, 100, 200000, "3000k", "500000k");
console.log("Title name :" + y1.videotitle);
console.log("Production name:" + y1.production);
console.log("Catageory of movie:" + y1.category);
console.log("Published of the movie:  " + y1.published);
console.log("Viwes: " + y1.views);
console.log("Likes: " + y1.likes);
console.log("Dis likes: " + y1.dislike);
console.log("Shares: " + y1.share);
console.log("Downloads: " + y1.download);
console.log("Subscribe: " + y1.subscibe);
//     //access private specifier. 
//     setalldetailsofmyfav = (l:number,d:number)=> {
//         this.likes = l;
//         this.dislike = d;
//         let plus:number = 1000;
//         let minus:number = d-320;
//         console.log(`\n\nThe most popular video of ${this.production} '${this.videotitle}' has ${(this.likes+2675)} likes and only ${this.dislike-minus} dislikes !`);
//     }
// }
// class Newpost extends Libs {
//     super(vdnew:string,prodnew:string,catnew:string,pubnew:string,vwnew:number,lknew:number,dlknew:number,shnew?:boolean,dlnew?:boolean,ssnew?:boolean){
//         this.videotitle = vdnew;
//         this.views = vwnew;
//     }
//     newtitle = ()=> {
//        let w:string = prompt(`\nDo you want to watch this new video from ${this.production}`);
//        if(w==`yes`)
//        {
//             this.download = true;
//             console.log("\nDownloaded successfully ..");
//            console.log(`\nYou are watching ${this.videotitle}`);
//        }
//        else if(w==`no`)
//        {
//            console.log(`\nSorry something went wrong!!`);
//        }
//        else {
//            console.log(`\nOOpS you are offline !`);
//        }
//     }
//     newpostview = ()=> {
//         console.log(`\nViews of the ${this.videotitle}'s are unbelivable !!i\It's ${this.views}`);
//     }
// } 
// class Performers {
//     public name:string[];
//     public channel:string;
//     public ttl:string;
//     constructor(nm:string[],tl:string,ch?:string) {
//         this.name = nm; 
//         this.channel = ch;
//         this.ttl = tl;
//     }
//     checkperforming = (...ppl)=> {
//         let allppl:string[] = [];
//         let all = ppl;
//         allppl = allppl.concat(all);
//         return `\n${this.name} are giving wonderful performance in ${this.ttl}`;
//     } 
// }
// //Object of Libs class(super-class)
// let Libsobj = new Libs("Home Craft","Fairytale","Business","6 May 2018",83721,45098,2320,true,false,true);
// let g = Libsobj.getTitle();
// console.log(g);
// Libsobj.setalldetailsofmyfav(232984,3659);
// //object of Newpost class(sub-class of Libs)
// let newpostobj = new Newpost("The jungle book","T-series","Entertaiment","7 may 2018",98990,90077,0,true,false,true);
// newpostobj.newtitle();
// //display all object's total views
// console.log(`\nThe total view of ${Libsobj.production} and ${newpostobj.production} are ${Libsobj.views+newpostobj.views}`);
// //object of Performance(sub class of Libs)
// let per = new Performers(['Emma watsen','milla staufer','Kristen'],"The jungle book","KidsBlog");
// console.log(per.checkperforming(this.name)); 
// //checks two different object's parameter in one function
// let fun = (newpstttl,perfrmttl,len)=> {
//     if(newpstttl == perfrmttl)
//     {
//         console.log(`\nThe '${newpstttl}' from ${newpostobj.production} is performed by ${len} Actors.`);
//     }
//     else {
//         console.log(`\nThere is no same title found !!!`);
//     }
// }
// //calling function
// let lenofarray:number = (<string[]>per.name).length;
// fun(newpostobj.videotitle,per.ttl,lenofarray);
// alert("Done !");

class Facebook {
    constructor(private work:Array<string>, private currentlocation:string , private contact:Array<any> , private family:string , public aboutlife: Array<string>,private  details:string ){
        this.work=work;
        this.currentlocation=currentlocation;
        this.aboutlife=aboutlife;
        this.contact=contact;
        this.details=details;
        this.family=family;
    }
    GetWorkplace=()=>{
        return this.work
    }
    Getcurrentlocation=()=>{
        return this.currentlocation
    }
    setChangeplace = (name:string)=>{
        this.currentlocation=name;
    }
    GetContact=()=>{
        return this.contact;
    }
    GetDetalis=()=>{
        return this.details
    }
    GetFamily= ()=>{
        return this.family
    }
}
let  f1:Facebook = new Facebook ("N R T Tech park,Agna Global Solutions ,Glory Auto Tech","surat ,gujart", "9493852732,mallellivinodkumar@gmail.com,18/12/1996,male","single" ,"Became a blood donor on Facebook","comlete school from Santhividyanikathan,Graduated from Vikas Group of Institutions")
console.log("Work Place is: " + f1.GetWorkplace() );
console.log(" About life is: "+ f1.aboutlife);
console.log( "lived place before change: " + f1.Getcurrentlocation());
f1.setChangeplace("Banglore");
console.log("lived place after change: "+ f1.Getcurrentlocation() );
console.log("about family: "+ f1.GetFamily() );
console.log("detalis: " + f1.GetDetalis());
console.log("Conract: "+ f1.GetContact());
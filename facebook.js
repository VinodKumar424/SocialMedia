var Facebook = /** @class */ (function () {
    function Facebook(work, currentlocation, contact, family, aboutlife, details) {
        var _this = this;
        this.work = work;
        this.currentlocation = currentlocation;
        this.contact = contact;
        this.family = family;
        this.aboutlife = aboutlife;
        this.details = details;
        this.GetWorkplace = function () {
            return _this.work;
        };
        this.Getcurrentlocation = function () {
            return _this.currentlocation;
        };
        this.setChangeplace = function (name) {
            _this.currentlocation = name;
        };
        this.GetContact = function () {
            return _this.contact;
        };
        this.GetDetalis = function () {
            return _this.details;
        };
        this.GetFamily = function () {
            return _this.family;
        };
        this.work = work;
        this.currentlocation = currentlocation;
        this.aboutlife = aboutlife;
        this.contact = contact;
        this.details = details;
        this.family = family;
    }
    return Facebook;
}());
var f1 = new Facebook("N R T Tech park,Agna Global Solutions ,Glory Auto Tech", "surat ,gujart", "9493852732,mallellivinodkumar@gmail.com,18/12/1996,male", "single", "Became a blood donor on Facebook", "comlete school from Santhividyanikathan,Graduated from Vikas Group of Institutions");
console.log("Work Place is: " + f1.GetWorkplace());
console.log(" About life is: " + f1.aboutlife);
console.log("lived place before change: " + f1.Getcurrentlocation());
f1.setChangeplace("Banglore");
console.log("lived place after change: " + f1.Getcurrentlocation());
console.log("about family: " + f1.GetFamily());
console.log("detalis: " + f1.GetDetalis());
console.log("Conract: " + f1.GetContact());

// window.onload = function() {
// 	alert("Welcome to my crib");
// }
// Basic class 
var place = /** @class */ (function () {
    function place(teaserImg, name, adress, zipCode, city) {
        this.tesaserImg = teaserImg;
        this.name = name;
        this.adress = adress;
        this.zipCode = zipCode;
        this.city = city;
    }
    place.prototype.display = function () {
        // document.write(` `);
        $(".container-fluid").html("\n  \t\t\tTEST\n\t\t <div>\n\t\t      <ul>\n\t\t      \t <li> <img src=\"" + this.tesaserImg + "\"></li>\t\n\t\t      \t <li> " + this.name + " </li>\n\t\t         <li> " + this.adress + "  </li>\n\t\t         <li> " + this.zipCode + " " + this.city + "  </li>\n\t\t      </ul>\n   \t\t</div> \n\n  \t\t\t");
    };
    return place;
}());
var Wien = new place("img/Karlskirche.jpg", "Karlskirche", "Wien", "Karlsplatz 1", 1010);
Wien.display();
// derived class 1 
// class restaurant extends place {
// 	telephone: number;
//   	type:string;
//   	webadress:string;
//   		constructor(teaserImg, city, adress, zipCode, telephone, type, webadress)
// 		{
// 			super(teaserImg, city, adress, zipCode);
// 			this.telephone = telephone;
// 			this.type = type;
// 			this.webadress = webadress;
// 		}
// 	}
// var ForuSeasons = new restaurant ("Test1","Test2","Test3",2020,22134,"Austrian","www.genickbruch");
// ForuSeasons.display();
// derived class 2 	
// class events extends place  {
// 		eventdate: string;
// 		time:string;
// 		price:number;
//   		constructor(teaserImg, city, adress, zipCode,eventdate,time,price)
// 		{
// 			super(teaserImg, city, adress, zipCode);
// 			this.eventdate = eventdate;
// 			this.time = time;
// 			this.price = price;
// 		}
// }	
// 	var Festival = new events ("Test1","Test2","Test3",2020,"12.08.2019","14:00");
// Wien.display();

// window.onload = function() {
// 	alert("Welcome to my crib");
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic class ______________________________________
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
        $(".container-fluid").html("\n\t\t <div>\n\t\t      <ul>\n\t\t      \t <li> <img src=\"" + this.tesaserImg + "\"></li>\t\n\t\t      \t <li> " + this.name + " </li>\n\t\t         <li> " + this.adress + "  </li>\n\t\t         <li> " + this.zipCode + " " + this.city + "  </li>\n\t\t      </ul>\n   \t\t</div> \n\n  \t\t\t");
    };
    return place;
}());
// END Basic class ______________________________________
// Location Objects_______________________________________
var Karlskirche = new place("img/Karlskirche.jpg", "Karlskirche", "Wien", "Karlsplatz 1", 1010);
// Karlskirche.display();
var localZoo = new place("img/zoo1.jpg", "Schoenbrunn", "Wien", "Schoenbrunnstr 2", 1130);
// localZoo.display();
// END Location Objects____________________________________________________
// derived class 1 
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(teaserImg, name, adress, zipCode, city, telephone, type, webadress) {
        var _this = _super.call(this, teaserImg, name, adress, zipCode, city) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.webadress = webadress;
        return _this;
    }
    restaurant.prototype.display = function () {
        $(".container-fluid").html("\n\t\t\t<div>\n\t\t      <ul>\n\t\t      \t <li> <img src=\"" + this.tesaserImg + "\"></li>\t\n\t\t      \t <li> " + this.name + " </li>\n\t\t         <li> " + this.adress + "  </li>\n\t\t         <li> " + this.zipCode + " " + this.city + "  </li>\n\t\t         <li> " + this.telephone + " </li>\n\t\t         <li> " + this.type + "</li>\n\t\t         <li> " + this.webadress + "</li>\n\t\t      </ul>\n   \t\t\t</div> \n  \t\t\t");
    };
    return restaurant;
}(place));
// END derived class 1 ____________________________________________ 
// Restaurant Objects____________________________________________________
var WaldorfAstoria = new restaurant("img/WaldorfRestaurant.jpg", "Waldorf Astoria", "Stephansplatz 1", 1010, "Wien", 234455, "higclass", "waldorf.at");
// WaldorfAstoria.display();
var SteiererEck = new restaurant("img/SteiererEck.jpg", "SteiererEck", "Am Heumarkt 2A", 1010, "Wien", 26532986, "highest class", "steierereck.at");
// SteiererEck.display();
// END Restaurant Objects____________________________________________________
// derived class 2 	
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(teaserImg, name, adress, zipCode, city, eventdate, time, price) {
        var _this = _super.call(this, teaserImg, name, adress, zipCode, city) || this;
        _this.eventdate = eventdate;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    events.prototype.display = function () {
        // document.write(` `);
        $(".container-fluid").html("\n\t\t <div>\n\t\t      <ul>\n\t\t      \t <li> <img src=\"" + this.tesaserImg + "\"></li>\t\n\t\t      \t <li> " + this.name + " </li>\n\t\t         <li> " + this.adress + "  </li>\n\t\t         <li> " + this.zipCode + " " + this.city + "  </li>\n\t\t         <li> " + this.eventdate + "</li>\n\t\t         <li> " + this.time + "</li>\n\t\t         <li> " + this.price + "</li>\n\t\t      </ul>\n   \t\t</div> \n\n  \t\t\t");
    };
    return events;
}(place));
// END derived class 2 ____________________________________________ 
var Nazar = new events("img/rap.jpg", "Nazar", "Stadthallenplatz 1", 2120, "Wien", "12.08.2019", "14:00", 70);
// Nazar.display();
var Raf = new events("img/rap2.jpg", "Nazar", "Museumsquartier 1 ", 2120, "Wien", "30.04.2019", "14:00", 70);
// Raf.display();
// ENDING SOLUTION_________________________________________________
var displayloc = $(".boxFKOA");
// console.log(displayloc);
var locations = [Karlskirche, localZoo, WaldorfAstoria, SteiererEck, Nazar, Raf];
console.log(locations);
// checkItUp(locations)
// function checkItUp(param) {
// 	for (let i = 0; i < param.length; i++) { 
// 	  $(displayloc[i]).html(`
// 			 <div>
// 			      <ul>
// 			         <li> ${param[i].name} </li>
// 			      </ul>
// 	   		</div> 
// 		`)
// 	}
// }

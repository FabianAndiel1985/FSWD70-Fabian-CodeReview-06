// window.onload = function() {
// 	alert("Welcome to my crib");
// }

// Basic class ______________________________________


class place {
	name:string;
  	tesaserImg: string;
  	city:string;
  	adress:string;
  	zipCode:number;

  	constructor(teaserImg, name, adress,zipCode, city)
		{
			this.tesaserImg = teaserImg;
			this.name = name;	
			this.adress= adress;
			this.zipCode=zipCode;
			this.city = city;
		}

  	display() {
  		// document.write(` `);
  		$(".container-fluid").html(`
		 <div>
		      <ul>
		      	 <li> <img src="${this.tesaserImg}"></li>	
		      	 <li> ${this.name} </li>
		         <li> ${this.adress}  </li>
		         <li> ${this.zipCode} ${this.city}  </li>
		      </ul>
   		</div> 

  			`);
  	}
}

// END Basic class ______________________________________

// Location Objects_______________________________________


var Karlskirche = new place ("img/Karlskirche.jpg","Karlskirche","Wien","Karlsplatz 1",1010);

// Karlskirche.display();

var localZoo = new place ("img/zoo1.jpg","Schoenbrunn","Wien","Schoenbrunnstr 2",1130);

// localZoo.display();

var displayloc = $(".boxFKOA");


var locations = [Karlskirche,localZoo]; 

checkItUp(locations)


function checkItUp(param) {

	for (let i = 0; i < param.length; i++) { 
	  
	  $(displayloc[i]).html(`
			 <div>
			      <ul>
			    	
			         <li> ${param[i].name} </li>
			      </ul>
	   		</div> 
		`)
	}
}










// END Location Objects____________________________________________________

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





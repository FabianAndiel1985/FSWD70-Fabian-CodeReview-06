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


// END Location Objects____________________________________________________

// derived class 1 

	class restaurant extends place {
		telephone: number;
	  	type:string;
	  	webadress:string;
	  		constructor(teaserImg, name, adress,zipCode, city, telephone, type, webadress)
		{
			super(teaserImg, name, adress,zipCode, city)
			this.telephone = telephone;
			this.type = type;
			this.webadress = webadress;
		}

  	display() {
  		$(".container-fluid").html(`
			<div>
		      <ul>
		      	 <li> <img src="${this.tesaserImg}"></li>	
		      	 <li> ${this.name} </li>
		         <li> ${this.adress}  </li>
		         <li> ${this.zipCode} ${this.city}  </li>
		         <li> ${this.telephone} </li>
		         <li> ${this.type}</li>
		         <li> ${this.webadress}</li>
		      </ul>
   			</div> 
  			`);
  	}
		
}



// END derived class 1 ____________________________________________ 


// Restaurant Objects____________________________________________________

var WaldorfAstoria = new restaurant ("img/WaldorfRestaurant.jpg","Waldorf Astoria","Stephansplatz 1", 1010,"Wien",234455,"higclass","waldorf.at");


// WaldorfAstoria.display();

var SteiererEck = new restaurant ("img/SteiererEck.jpg","SteiererEck","Am Heumarkt 2A", 1010,"Wien",26532986,"highest class","steierereck.at");

// SteiererEck.display();

// END Restaurant Objects____________________________________________________


// derived class 2 	

	class events extends place  {
			eventdate: string;
			time:string;
			price:number;

	  		constructor(teaserImg, name, adress,zipCode, city, eventdate, time, price)
		
				{
					super(teaserImg, name, adress,zipCode, city)
					this.eventdate = eventdate;
					this.time = time;
					this.price= price;
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
		         <li> ${this.eventdate}</li>
		         <li> ${this.time}</li>
		         <li> ${this.price}</li>
		      </ul>
   		</div> 

  			`);	
		}
	}

// END derived class 2 ____________________________________________ 


	

var Nazar = new events ("img/rap.jpg","Nazar","Stadthallenplatz 1",2120,"Wien","12.08.2019","14:00",70);

// Nazar.display();

var Raf = new events ("img/rap2.jpg","Nazar","Museumsquartier 1 ",2120,"Wien","30.04.2019","14:00",70);

// Raf.display();



// ENDING SOLUTION_________________________________________________


var displayloc = $(".boxFKOA");

// console.log(displayloc);

var locations = [Karlskirche,localZoo,WaldorfAstoria,SteiererEck,Nazar,Raf];

console.log(locations);


// VERSUCH 3

function checkItUp() {

	for (let i = 0; i <7; i++) { 
	  $(displayloc[i]).each(function () {locations[i].display()}
		)
	}
}




// VERSUCH 2
// function checkItUp(param) {

// 	for (let i = 0; i < param.length; i++) { 
	  
// 	  $(displayloc[i]).html(`
// 	  	${param[i].name}
// 	  	${param[i].eventdate}
// 		`)
// 	}
// }



// VERSUCH 1

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
// window.onload = function() {
// 	alert("Welcome to my crib");
// }

// Basic class 


class place {
	name:string;
  	tesaserImg: string;
  	city:string;
  	adress:string;
  	zipCode:number;

  	constructor(name,teaserImg, city, adress, zipCode)
		{
			this.name = name;	
			this.tesaserImg = teaserImg;
			this.city = city;
			this.adress= adress;
			this.zipCode=zipCode;
		}
  	display() {
  		// document.write(` `);
  		$(".container-fluid").html(`
  			TEST
		 <div>
		      <ul>
		      	 <li></li>
		         <li> ${this.adress}  </li>
		         <li> ${this.zipCode} ${this.city}  </li>
		      </ul>
   		</div> 

  			`);
  	}
}


var Wien = new place ("img/Karlskirche.jpg","Wien","Karlsplatz 1",1010);

Wien.display();

// derived class 1 
	class restaurant extends place {
		telephone: number;
	  	type:string;
	  	webadress:string;
	  		constructor(teaserImg, city, adress, zipCode, telephone, type, webadress)
			{
				super(teaserImg, city, adress, zipCode);
				this.telephone = telephone;
				this.type = type;
				this.webadress = webadress;
			}
		}

// var ForuSeasons = new restaurant ("Test1","Test2","Test3",2020,22134,"Austrian","www.genickbruch");

// ForuSeasons.display();




// derived class 2 	

	class events extends place  {
			eventdate: string;
			time:string;
			price:number;

	  		constructor(teaserImg, city, adress, zipCode,eventdate,time,price)
			{
				super(teaserImg, city, adress, zipCode);
				this.eventdate = eventdate;
				this.time = time;
				this.price = price;
			}
			// Eigenschaften wie EventDate („12.10.2019“) und EventTime („17:00“)
	}	

// 	var Festival = new events ("Test1","Test2","Test3",2020,"12.08.2019","14:00");

// Wien.display();





/*var fn = () => {
	console.log(456);
}

fn();

class Student {
	hello(){
		console.log("hello")
	}
}

var s = new Student;

s.hello();

class leo extends Student{

}

var l = new leo;

l.hello();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var a=new Point(10,20);
console.log(a.toString());*/

//////////////////获取经纬 度后，然后传给百度地图或者高德地图/////////////////////

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude);
// }
// console.log("===========================");
// getLocation()

// import Bird from './common/Bird'
// import Name from './business/name1'

// var name=new Name({"id":"3257","name":"王伟","contents":"中天佳话"});
require('../css/img.css');
import axios from 'axios';
 axios.get('/api/books').then((res) => {
    console.log(res.data.data)
            var books = res.data.data;
           for(let item of books){
              console.log(item.name)
           }
      //       console.log(books)
      //       var totalBooks = res.body.total_records
      // console.log(books);
      // console.log(totalBooks);
          }, (error) => {
            console.log(error)
          })
// this.bookService = this.$resource('/api/books')
//      this.bookService.query({page: 1, size: this.pageSize})
//           .then((res) => {
//             this.books = res.body.data
//             this.totalBooks = res.body.total_records
//       console.log(this.books);
//       console.log(this.totalBooks);
//           }, (error) => {
//             console.log(error)
//           })
// let bird=new Bird({'name':"你奶奶","type":"没有什么"});
// bird.eat();


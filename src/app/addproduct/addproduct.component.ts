import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  brand=""
  name=""
  price=""

  readValue=()=>{
    let data={
     "brand":this.brand, 
     "name":this.name,
     "price":this.price
    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (responce)=>{
        console.log(responce)
      }
    )
    alert("ADDED")
    this.brand=""
    this.name=""
    this.price=""

  }

  ngOnInit(): void {
  }

}

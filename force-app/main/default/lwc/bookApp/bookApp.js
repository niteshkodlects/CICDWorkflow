import { LightningElement } from 'lwc';
const BOOK_URL ='https://www.googleapis.com/books/v1/volums?q='
export default class BookApp extends LightningElement {
 searchKey='Man'
 books
 connectedCallback(){

    this.fetchBookData()
  }
  fetchBookData(){
    fetch(BOOK_URL+this.searchKey)
    .then(response=>response.json())
    .then(data=>{
        this.books=data
    }).catch(error=>console.error(error))

  }


}
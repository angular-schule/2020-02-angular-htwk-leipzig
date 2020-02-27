import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;
  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }


  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }


  submitForm() {
    if (this.bookForm.invalid) {
      return;
    }

    const book: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    this.submitBook.emit(book);
    this.bookForm.reset();
  }

}

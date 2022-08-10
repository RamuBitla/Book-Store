
let form = document.querySelector("#book-store");
let input1 = document.querySelector("#bookname");
let input2 = document.querySelector("#bookauthor");
let input3 = document.querySelector("#bookprice");
let details = document.querySelector(".book-details");

let book_1;
let book_2;
let book_3;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  book_1 = input1.value;
  book_2 = input2.value;
  book_3 = input3.value;
  if (!book_1) {
    alert("please provide the details here..!");
    book_1.focus();
    return;
//   } else if (!book_2) {
//     alert("please provide the book author");
//     input2.focus();
//     return;
//   } else if (!book_3) {
//     alert("please provide the book price");
//     input3.focus();
//     return;
//   }
  }
  // Elements with javscript...

  // view-data> book-name> Input 1...

  let view_data = document.createElement("div");
  view_data.classList.add("view-data");
  details.appendChild(view_data);

  let book_name = document.createElement("div");
  book_name.classList.add("book-name");

  let label_name1 = document.createElement("label");
  label_name1.innerHTML = "Book Name";

  let input1_name = document.createElement("input");
  input1_name.classList.add("name-input");
  input1_name.value = book_1;
  input1_name.setAttribute("readonly", "readonly");
  input1_name.type = "text";

  book_name.appendChild(label_name1);
  book_name.appendChild(input1_name);
  view_data.appendChild(book_name);

  // view-data> book-author> Input 2...

  let book_author = document.createElement("div");
  book_author.classList.add("book-auther");

  let label_name2 = document.createElement("label");
  label_name2.innerHTML = "Book Author";

  let input2_name = document.createElement("input");
  input2_name.classList.add("author-input");
  input2_name.value = book_2;
  input2_name.setAttribute("readonly", "readonly");
  input2_name.type = "text";

  book_author.appendChild(label_name2);
  book_author.appendChild(input2_name);
  view_data.appendChild(book_author);

  // view-data> book-price> Input 3...

  let book_price = document.createElement("div");
  book_price.classList.add("book-price");

  let label_name3 = document.createElement("label");
  label_name3.innerHTML = "Book Price";

  let input3_name = document.createElement("input");
  input3_name.classList.add("price-input");
  input3_name.value = book_3;
  input3_name.setAttribute("readonly", "readonly");
  input3_name.type = "text";

  book_price.appendChild(label_name3);
  book_price.appendChild(input3_name);
  view_data.appendChild(book_price);

  input1.value = "";
  input2.value = "";
  input3.value = "";

  // Buttons for edit and delete...

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let edit_btn = document.createElement("button");
  edit_btn.classList.add("edit");
  edit_btn.innerHTML = "Edit";

  let delete_btn = document.createElement("button");
  delete_btn.classList.add("delete");
  delete_btn.innerHTML = "Delete";

  buttons.appendChild(edit_btn);
  buttons.appendChild(delete_btn);
  view_data.appendChild(buttons);

  edit_btn.addEventListener("click", () => {
    if (edit_btn.innerHTML == "Edit") {
      input1_name.removeAttribute("readonly");
      input2_name.removeAttribute("readonly");
      input3_name.removeAttribute("readonly");
      edit_btn.innerHTML = "Save";

      input1_name.focus();
      // return;
    } else {
      input1_name.setAttribute("readonly", "readonly");
      input2_name.setAttribute("readonly", "readonly");
      input3_name.setAttribute("readonly", "readonly");
      edit_btn.innerHTML = "Edit";
    }
  });

  delete_btn.addEventListener("click", () => {
    details.removeChild(view_data);
  });
});

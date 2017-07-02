function deleteBook() {
  var bookID = document.getElementById("deleteBtn").value;
  $.ajax({
     method: "DELETE",
     url: "/books/",
     data: {"book_id": bookID},
     success: function() {
        window.location='/books'
     },
     error: function() {
       alert("error");
     },
  })
}

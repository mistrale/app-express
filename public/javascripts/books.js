function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function deleteBook() {
  var bookID = document.getElementById("deleteBtn").value;
  $.ajax({
     method: "DELETE",
     url: "/books/",
     data: {"book_id": bookID},
     success: function() {
        window.location='/books'
     },
     error: function(error) {
       alert(error);
     },
  })
}

jQuery(function($){
  $("form").submit(function(e){
    e.preventDefault(); // Keep the form from submitting
    var form = $(this);
    var data = getFormData(form);

    console.log("HEHEHEHE")
    console.log(data)
    $.ajax({
         url   : form.attr('action'),
         type  : form.attr('method'),
         data  : data, // data to be submitted
         success: function(response){
           window.location='/books'
         },
         error: function(error) {
           alert(error);
        },
    });
  });
});

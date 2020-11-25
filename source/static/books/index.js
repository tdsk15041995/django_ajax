$('#save_button').click(function(){
    
    var $name = $("#name");
    var $price = $("#price");
    var $pages = $("#pages");
    var $csrf = $("input[name=csrfmiddlewaretoken]");

    if (!(($name.val() == '') || ($price.val() == '') || ($pages.val() == ''))){
        
        $.ajax({
            type: 'POST',
            url: '/books/save_books_details/',
            data:{
                name : $name.val(),
                price : $price.val(),
                pages : $pages.val(),
                csrfmiddlewaretoken : $csrf.val()
            },
            dataType: 'json',
            success:function(response){
                if (response.status == 200){
                    alert("Saved successfully");
                }
                if (response.status == 400){
                    alert("Book name already taken");
                }
            },
            error:function(response){
                alert("not saved");
            }
        });
        
    }
    else{
        alert("Please fill all the fields");
    }
});

function showBooks(){

    $.ajax({
        type: 'GET',
        url: '/books/show_books_details/',
        data:{},        
        dataType: 'html',
        success:function(response){

            response = eval(response);

            var table = document.getElementById('books-table');

            for(i=0;i<response.length;i++){

                var row = table.insertRow(i+1);
                var name = row.insertCell(0);
                var price = row.insertCell(1);
                var pages = row.insertCell(2);

                name.innerHTML = response[i].name;
                price.innerHTML = response[i].price;
                pages.innerHTML = response[i].pages;
            }

            

        },
        error:function(response){
            alert("nothing was recieved");
        }
    });
    
}
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
        dataType: 'json',
        success:function(response){
            console.log(response);
        },
        error:function(response){
            alert("nothing was recieved");
        }
    });
    
}



let category = ["Phone" , "Computer" , "TV"];

let subCategory = [
    {name : "Samsung" , category_id :0},
    {name : "Mi" , category_id :0},
    {name : "HP" , category_id :1},
    {name : "Acer" , category_id :1},
    {name : "panasonic" , category_id :2},
]

category.map(function(el , index){
    $("#c").append(`<option value="${index}">${el}</option>`);
});

subCategory.map(function(el , index){
    $("#sc").append(`<option value = "${index}" data-category = "${el.category_id}">${el.name}</option>`);
});

$("#c").on("change" , function(){
    // console.log($(this).val())
    let currentCategoryId = $(this).val();
    $("#sc option").hide();
    $(`[data-category =${currentCategoryId}]`).show();
})
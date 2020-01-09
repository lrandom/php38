$(document).ready(function () {
    var index = $('.slider ul li').length - 1;
    $('.btn-next').click(function () {
        $('.slider ul li').eq(index).hide();
        index--;
    });

    $('.btn-prev').click(function () {
        index++;
        $('.slider ul li').eq(index).show();
    })
})
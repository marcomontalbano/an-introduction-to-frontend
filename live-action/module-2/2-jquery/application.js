
// Greet
$('#greet').on('click', function() {
    alert('Hello World!');
});


// Ajax
function doAjax() {
    $.ajax({
        url: 'ajax-data.html',
        data: {
            key: 'value',
        },
        success: function( result ) {
            alert( result );
        }
    });
};

$('#ajax').on('click', doAjax);


// Replace HTML
var replaceHtml = function() {
    $(this).parent().prev().text("Hello World!");
};

$('#replace-html').on('click', replaceHtml);

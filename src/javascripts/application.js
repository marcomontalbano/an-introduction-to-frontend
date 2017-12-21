
// manage cookie policy
$('.cookie-policy .cookie-policy--close').on('click', function() {
    $(this).closest('.cookie-policy').fadeOut();
});

// Ajax Like
$(document).on('click', '.article .article--like', function()
{
    var $button = $(this);
    var $article = $button.closest('.article');
    var articleId = $article.data('articleId');

    $.ajax({
        url: 'http://localhost:8080/articles/like',
        method: 'PATCH', // 'PUT',
        contentType: "application/json",
        data: JSON.stringify({
            id: articleId
        }),
        success: function (data) {
            console.log('data', data);
            $button.toggleClass('btn-success', data.like);
        }
    });
});

// Load Articles
$(function() {

    $.ajax({
        url: 'http://localhost:8080/articles',
        method: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'loadArticles'

    });

});

function loadArticles (articles) {
    var $articles = $('.articles');
    var $articlePlaceholder = $articles.find('.article.hide');
    $articles.empty();
    for (var i = 0; i < articles.length; i++) {
        var $article = $articlePlaceholder.clone();
        var article = articles[i];

        $article.removeClass('hide');
        $article.data('articleId', article.id);
        $article.find('.article--title').text(article.title);
        $article.find('.article--picture').attr('src', article.picture);
        $article.find('.article--plot').text(article.plot);
        $article.find('.article--tag').text(article.tag);
        $article.find('.article--like').toggleClass('btn-success', article.like);
        $article.find();
        $articles.append($article);
    }
}



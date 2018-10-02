
// manage cookie policy
$('.cookie-policy .cookie-policy--close').on('click', function() {
    $(this).closest('.cookie-policy').fadeOut();
})

// Ajax Like
$(document).on('click', '.article .article--like', function(e)
{
    e.preventDefault();

    var $button = $(this);
    var $article = $button.closest('.article');
    var articleId = $article.data('articleId');

    $.ajax({
        url: 'https://my-json-server.typicode.com/marcomontalbano/an-introduction-to-frontend-for-beginners/articles/' + articleId,
        method: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify({
            like: !$button.hasClass('btn-success')
        }),
        success: function (article) {
            $button.toggleClass('btn-success', article.like);
        }
    });
});

// Load Articles
$(function() {
    var $articles = $('.articles');
    var source = document.getElementById('template-article').innerHTML;
    var template = Handlebars.compile(source);
    var html;

    $.ajax({
        url: 'https://my-json-server.typicode.com/marcomontalbano/an-introduction-to-frontend-for-beginners/articles',
        method: 'GET',
        contentType: 'application/json',
        success: function (articles) {
            $.each(articles, function (index, article) {
                html = template(article);
                $articles.append(html);
            });
        }
    });
});

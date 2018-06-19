
// manage cookie policy
$('.cookie-policy .cookie-policy--close').on('click', function() {
    $(this).closest('.cookie-policy').fadeOut();
})

// Ajax Like
$(document).on('click', '.article .article--like', function()
{
    var $button = $(this);
    var $article = $button.closest('.article');
    var articleId = $article.data('articleId');

    $.ajax({
        url: 'https://my-json-server.typicode.com/marcomontalbano/an-introduction-to-frontend-for-beginners/articles/' + articleId,
        method: 'PATCH',
        data: {
            like: !$button.hasClass('btn-success')
        },
        success: function (article) {
            console.log('article', article);
            $button.toggleClass('btn-success', article.like);
        }
    });
});

// Load Articles
$(function() {
    var $articles = $('.articles');
    var $articlePlaceholder = $articles.find('.article.hide');

    $.ajax({
        url: 'https://my-json-server.typicode.com/marcomontalbano/an-introduction-to-frontend-for-beginners/articles',
        method: 'GET',
        success: function (articles) {
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
                $articles.append($article);
            }
        }
    });
});

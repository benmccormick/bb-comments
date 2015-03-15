(function() {
    var Comment = Backbone.Model.extend({
        defaults: {
            text: '',
            name: 'Anonymous'
        }
    });

    var CommentList = Backbone.Collection.extend({

        model: Comment,

        url: 'comments',

        parse: function(response, options) {
            return response.comments;
        }
    });

    var CommentView = Backbone.View.extend({

        template : _.template($('#comment-template').html()),

        initialize: function(options) {
            this.index = options.index;
        },

        render: function() {
            var data = _.extend({ index: this.index}, this.model.toJSON());
            this.$el.html(this.template(data));
            return this;
        }
    });

    var CommentContainerView = Backbone.View.extend({

        el: '#comment-container',

        events: {
            'click .add-comment' : 'addComment'
        },

        render: function() {
            var $commentArea = $('#comment-area');
            $commentArea.empty();
            this.collection.each(function(model, index) {
                var view = new CommentView({
                    model: model,
                    index: index + 1
                });
                $commentArea.append(view.render().el);
            });
        },

        addComment: function() {
            var $text = $('#comment-content'),
                $author = $('#comment-author'),
                text = $text.val(),
                author = $author.val() || undefined;

            this.collection.create({
                text: text,
                name: author
            });

            $text.val('');
            $author.val('');
            this.render();
            window.scrollTo(0, document.body.scrollHeight);
        }

    });

    var comments = new CommentList([{
        name: 'Ben',
        text: 'test'
    }, {
        text: 'test 2'
    }]);

    var commentView = new CommentContainerView({
        collection: comments
    });
    comments.fetch({
        success: function() {
            commentView.render();
        }
    });
})();

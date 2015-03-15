(function() {

    //Data Code (Unchanged from 2010)

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

    //View Code:  Refactored

    var CommentContainerView = Marionette.LayoutView.extend({

        el: '#comment-container',

        template: false,

        regions: {
            'input': '#comment-entry',
            'comments': '#comment-area'
        },

        initialize: function() {
            this.showChildView('input', new CommentInputView({
                collection: this.collection
            }));
            this.showChildView('comments', new CommentListView({
                collection: this.collection
            }));
        },

    });

    var CommentInputView = Marionette.ItemView.extend({

        template: '#input-template',

        templateHelpers: function() {
            return {
                numComments: this.collection.length
            };
        },

        collectionEvents: {
            'sync': 'render'
        },

        events: {
            'click .add-comment' : 'addComment'
        },

        addComment: function() {
            var text = $('#comment-content').val(),
                author = $('#comment-author').val() || undefined;

            this.collection.create({
                text: text,
                name: author
            });
            //render to clear the inputs
            this.render();
            window.scrollTo(0, document.body.scrollHeight);
        }
    });

    var CommentView = Marionette.ItemView.extend({

        template : '#comment-template',

        templateHelpers: function(options) {
            return {
                index: this.options.index
            };
        },
    });


    var CommentListView = Marionette.CollectionView.extend({

        childView: CommentView,

        childViewOptions: function(model, index) {
            return {
                index: index + 1
            };
        }
    });

    //setup

    var comments = new CommentList();

    var commentView = new CommentContainerView({
        collection: comments
    });

    comments.fetch();
    commentView.render();
})();
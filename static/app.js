(function() {

    //Data Code (Unchanged from 2010)

    var Comment = Backbone.Model.extend({
        defaults: {
            text: '',
            name: 'Anonymous'
        }
    });

    var CommentList = Backbone.Firebase.Collection.extend({

        url: 'https://intense-torch-2544.firebaseio.com',

        model: Comment,

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

    var CommentInputView = Marionette.VDOM.ItemView.extend({

        template: '#input-template',

        collectionEvents: {
            'add' : 'render'
        },

        templateHelpers: function() {
            return {
                numComments: this.collection.length
            };
        },

        events: {
            'click .add-comment' : 'addComment'
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

            //clear the inputs
            $text.val('');
            $author.val('');

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

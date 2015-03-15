(function() {

    //Data Code (Unchanged from 2010)

    class Comment extends Backbone.Model {
        defaults() {
            return {
                text: '',
                name: 'Anonymous'
            };
        }
    }

    class CommentList extends Backbone.Firebase.Collection {

        constructor(...args) {
           this.url = 'https://intense-torch-2544.firebaseio.com';
           this.model = Comment;
           super(...args);
        }
    }

    //View Code:  Refactored

    class CommentContainerView extends Marionette.LayoutView {

        constructor(...args) {
            this.el = '#comment-container';
            this.template = false;
            this.regions = {
                'input': '#comment-entry',
                'comments': '#comment-area'
            };
            super(...args);
        }

        initialize() {
            this.showChildView('input', new CommentInputView({
                collection: this.collection
            }));
            this.showChildView('comments', new CommentListView({
                collection: this.collection
            }));
        }

    }

    class CommentInputView extends Marionette.VDOM.ItemView {

        constructor(...args) {
            this.template = '#input-template';

            this.ui = {
                text: '#comment-content',
                author: '#comment-author',
                add: '.add-comment'
            };

            this.collectionEvents = {
                'add' : 'render'
            };

            this.events = {
                'click @ui.add' : 'addComment'
            };

            super(...args)
        }

        templateHelpers() {
            return {
                numComments: this.collection.length
            };
        }

        addComment() {

            this.collection.create({
                text: this.ui.text.val(),
                name: this.ui.author.val() || undefined
            });

            //clear the inputs
            this.ui.text.add(this.ui.author).val('');

            window.scrollTo(0, document.body.scrollHeight);
        }
    }

    class CommentView extends Marionette.ItemView {

        constructor(...args) {
           this.template = '#comment-template';
           super(...args);
        }

        templateHelpers(options) {
            return {
                index: this.options.index
            };
        }
    }


    class CommentListView extends Marionette.CollectionView {

        constructor(...args) {
           this.childView = CommentView;
           super(...args);
        }

        childViewOptions(model, index) {
            return {
                index: index + 1
            };
        }
    }

    //setup

    var comments = new CommentList();

    var commentView = new CommentContainerView({
        collection: comments
    });

    comments.fetch();
})();
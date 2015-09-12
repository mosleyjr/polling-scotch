/**
 * Created by jasonmosley on 9/12/15.
 */
Template.body.helpers({
    polls: function() {
        return Polls.find();
    }
});

UI.registerHelper('HelperArray', function (context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index;
            return item;
        })
    }
})
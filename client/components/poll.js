/**
 * Created by jasonmosley on 9/12/15.
 */

// attach events to poll template
Template.poll.events({

    // event to handle clicking of a choice
    'click .vote': function(event) {

        // prevent the default behavior
        event.preventDefault();

        // get the parent (poll) id
        var pollID = $(event.currentTarget).parent('.poll').data('id');
        var voteID = $(event.currentTarget).data('id');

        // create the vote incrementing object
        var voteString = 'choices.' + voteID + '.votes';
        var action = {};
        action[voteString] = 1;

        // increment votes for this choice
        Polls.update(
            {_id: pollID},
            {$inc: action}
        );
    }
});
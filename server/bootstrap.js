/**
 * Created by jasonmosley on 9/12/15.
 */
// run this when meteor app is started
Meteor.startup(function() {

    // if there are no polls available create sample data
    if (Polls.find().count() === 0) {

        // create sample polls
        var samplePolls = [
            {
                question: "Is Meteor awesome?",
                choices: [
                    { text: "Yup!", votes: 0 },
                    { text: 'Eh', votes: 0 },
                    { text: "No", votes: 0 }
                ]
            },
            {
                question: "CSS Flexbox >= sliced bread?",
                choices: [
                    { text: "100% yes", votes: 0 },
                    { text: 'kinda', votes: 0 },
                    { text: "Not on your life", votes: 0 }
                ]
            }
        ];

        // loop over each sample poll and insert into database
        _.each(samplePolls, function(poll) {
            Polls.insert(poll);
        });
    }
});
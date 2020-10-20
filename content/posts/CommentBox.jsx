import React from 'react';
import commentBox from 'commentbox.io';

export class CommentBox extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox(`{process.env.COMMENT_PROJECT_ID}`, {
            className: 'commentbox', // the class of divs to look for
            defaultBoxId: 'commentbox', // the default ID to associate to the div
            tlcParam: 'tlc', // used for identifying links to comments on your page
            backgroundColor: null, // default transparent
            textColor: null, // default black
            subtextColor: null, // default grey
            /**
             * Creates a unique URL to each box on your page.
             * 
             * @param {string} boxId
             * @param {Location} pageLocation - a copy of the current window.location
             * @returns {string}
             */
            createBoxUrl(boxId, pageLocation) {
        
                pageLocation.search = ''; // removes query string!
                pageLocation.hash = boxId; // creates link to this specific Comment Box on your page
                return pageLocation.href; // return url string
            },
            /**
             * Fires once the plugin loads its comments.
             * May fire multiple times in its lifetime.
             * 
             * @param {number} count
             */
            onCommentCount(count) {
        
            }
        });
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" />
        );
    }
}

export default CommentBox;
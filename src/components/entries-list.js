import React from 'react';
import moment from 'moment';
import { durationToMoment } from '../util/formatting';
import ReadMoreText from '../components/read-more-text';

const EntriesList = (props) => {
    return(
        <div className="entry-list">
            <div className="entries">
                { (props.entries.length > 0)
                ? props.entries.map((entry, index) => {
                    return(
                    <article className="entry" key={index}>
                        <h4><a href="">{ moment(entry.created_date).format('dddd MMMM Do') }</a></h4>

                        <ul className="list-inline">
                        <li>
                            <p className="subheading">
                            Duration { durationToMoment(entry.time_spent).format('HH[h] mm[m]', { trim: false }) }
                            </p>
                        </li>
                        </ul>
                        <p>
                        <ReadMoreText text={ entry.comment } limit="200" />
                        </p>
                    </article>
                    )})
                : <p className="display-text">You haven't logged any sessions on this week.</p>
                }
            </div>
        </div>
    );
}

export default EntriesList;
import React, { useEffect, useState } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';
import CircularProgress from '@material-ui/core/CircularProgress';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    
    useEffect(() => {
        fetch('https://mysterious-headland-87886.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    }, [])

    return (
        <section className="container py-5 mb-5">
            <h2 className="font-weight-bold text-center py-5">Clients <span className="item-text">Feedback</span></h2>
            <div className="row py-5">
                {
                    feedbacks.length === 0 && <CircularProgress className="mx-auto" />
                }
                {
                    feedbacks.map((feedback, idx) => <FeedbackList key={idx} feedback={feedback}/>)
                }
            </div>
        </section>
    );
};

export default Feedback;
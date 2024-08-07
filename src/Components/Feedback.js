//importing Libraries
import React from 'react';
import './Feedback.css';

function Feedback (){
  
  const feedbacks = [
    {
      customer: 'Jenny Wilson',
      rating: 4,
      comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      customer: 'Dianne Russell',
      rating: 5,
      comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
      customer: 'Devon Lane',
      rating: 4,
      comment: 'Normally wings are wings, but theirs are lean meaty and tender, and well seasoned.',
    },
  ];
  
  return (
    <div className="feedback" style={{ maxHeight: "500px",
    overflowY: "auto" }}>
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-card">
          <div className="customer"><img src=
"https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg"
className="p-2" alt="Image" width="50px" height="50px"/>{feedback.customer}</div>
          <div className="rating">{'⭐'.repeat(feedback.rating)}</div>
          <div className="comment">{feedback.comment}</div>
          <hr width="100%" size="1" className='hr'></hr>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
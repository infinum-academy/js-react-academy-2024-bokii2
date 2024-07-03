const mockReviews = [
    {
        description: 'Great series',
        rating: 5
    },
    {
        description: 'They can did it better',
        rating: 3
    },   
];

function renderReviewList() {
    const reviewListElement = document.getElementById('reviewList');
    
    reviewListElement.innerHTML = '';
    mockReviews.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });
}

function createReviewItem(review) {
    const reviewItemElement = document.createElement('div');
    reviewItemElement.classList = ['review']

    const reviewItemDescElement = document.createElement('span');
    reviewItemDescElement.textContent = review.description;
    reviewItemElement.appendChild(reviewItemDescElement);

    const reviewItemRatingElement = document.createElement('span');
    reviewItemRatingElement.textContent = review.rating + "/5";
    reviewItemElement.appendChild(reviewItemRatingElement);
    return reviewItemElement;
}

const postButtonHandler = () => {
    const newReviewDescInput = document.getElementById('reviewDesc');
    const newReviewDesc = newReviewDescInput.value;

    const newReviewRatingInput = document.getElementById('reviewRating');
    const newReviewRating = newReviewRatingInput.value;
    
    const newReview = {
        description: newReviewDesc,
        rating: newReviewRating
    }

    mockReviews.push(newReview);
    renderReviewList();

    newReviewDescInput.value = '';
    newReviewRatingInput.value = '';
};

renderReviewList();
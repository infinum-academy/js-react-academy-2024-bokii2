let mockReviews = [
    // {
    //     description: 'Great series',
    //     rating: 5
    // },
    // {
    //     description: 'They can did it better',
    //     rating: 3
    // },   
];

function saveToLocalStorage(reviewList) {
    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem('review-list', reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('review-list');
    const reviewList = JSON.parse(reviewListString);
    return reviewList;
}

function renderReviewList() {
    const reviewListElement = document.getElementById('reviewList');
    
    reviewListElement.innerHTML = '';
    mockReviews.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });

    saveToLocalStorage(mockReviews);
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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.onclick = () => {
        mockReviews = mockReviews.filter((t) => {
            return t !== review;
        });
        renderReviewList();
    };
    reviewItemElement.appendChild(deleteButton);

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

mockReviews = loadFromLocalStorage();
renderReviewList();
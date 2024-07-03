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
    calculateRating();
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
        rating: parseInt(newReviewRating, 10)
    }

    mockReviews.push(newReview);
    renderReviewList();

    newReviewDescInput.value = '';
    newReviewRatingInput.value = '';
};

function calculateRating() {
    const desc = document.getElementsByClassName('desc');
    let total = 0;

    mockReviews.forEach(review => {
        total += review.rating;
    })

    const averageRating = (total / mockReviews.length).toFixed(2);

    const rat = document.getElementById('rat');
    rat.innerText = averageRating + '/5';
}

mockReviews = loadFromLocalStorage();
renderReviewList();
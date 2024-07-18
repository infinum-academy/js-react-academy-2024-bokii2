const apiUrl = 'https://tv-shows.infinum.academy';

export const swrKeys = {
    register: `${apiUrl}/users`,
    login: `${apiUrl}/users/sign_in`,
    me: `${apiUrl}/users/me`,
    allshows: `${apiUrl}/shows`,
    toprated: `${apiUrl}/shows/top_rated`,
    showdetails: (id: string) => `${apiUrl}/shows/${id}`,
    getReviews: (id: string) => `${apiUrl}/shows/${id}/reviews`,
    createReview: `${apiUrl}/reviews`
}
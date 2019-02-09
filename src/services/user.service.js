const fetch = require("node-fetch");
const url = 'https://cerrajeria-1ee61.firebaseio.com/';

/**
 * Get user information like name and lastname
 * @param {number} id user id
 */
function getUser(id){
    return fetch(`${url}/Users/${id}.json`)
        .then(res => res.json());
}

/**
 * Get array of images 
 * @param {number} id user id
 */
function getUserImages(id){
    return fetch(`${url}/Images.json?userId=${id}`)
        .then(res => res.json());
}

/**
 * Get array of items
 * @param {number} id user id
 */
function getUserItems(id){
    return fetch(`${url}/Items.json?userId=${id}`)
        .then(res => res.json());
}

/**
 * Async function that gets all user information in one obj
 * @param {number} id user id
 */
async function getUserComplete(id){
    const [usr, img, itm] = await Promise.all([getUser(id), getUserImages(id), getUserItems(id)]);
    const user = usr;
    user.images = img;
    user.items = itm;
    return user;
}

module.exports = {
    getUserComplete: getUserComplete
}
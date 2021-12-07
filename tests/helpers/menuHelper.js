function checkMenuVODsRating(userRating, vod_genre) {
    let failedArray = [];
    vod_genre.forEach(function (vodGenre){
       vodGenre.vods.forEach(function (vod){
           const result = findAccessRating(vod.rating, userRating);
           if (!result) {
               failedArray.push( `Genre ${vodGenre.genre} , VOD ${vod.title} has an unsupported Rating ${vod.rating}`);
           }
       }) ;
    });
    return {'status':failedArray.length === 0, 'messages' : failedArray};
}


function findAccessRating(vodRating, userRatings) {
    const result = userRatings.find(function (userRating) {
        return userRating === vodRating;
    });

    return result != null;
}


module.exports = {
    checkMenuVODsRating,
}
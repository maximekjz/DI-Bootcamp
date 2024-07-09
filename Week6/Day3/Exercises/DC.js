// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title='', uploader='', time =0){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        return`${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    }
}

const all_videos = [
new Video('Prank', 'Dan', 120),
new Video('Gag', 'Ilan', 390),
new Video('Top music', 'Ana', 134),
new Video('Prank 3', 'Lea', 23),
new Video('Prank 4', 'Sarah', 923)
]

console.log(all_videos);
all_videos.forEach(video => {
    console.log(video.watch())
})
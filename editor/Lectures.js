class Lectures {
    constructor(lectures){
        this.lectures = lectures;
    }

    getLectureById(lectureId){
        return this.lectures.find(lecture => lecture.id === lectureId);
    }
}

module.exports = Lectures;
import httpService from "./httpService";


const service = {
    getFilmList(){
        httpService.get({
            url:'https://ghibliapi.herokuapp.com/films',
        })
    }
}


export default service
import axios from "axios";
const urlEndPoint="http://www.omdbapi.com/?apikey=461da771&t="
export const fetchMovieInfo = async (title) => {
    try {
        const { data } = await axios.get(urlEndPoint + title);
        return data;
    } catch (error) {
        return { status: "error", message:error.message}
    }

}

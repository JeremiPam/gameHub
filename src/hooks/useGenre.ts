import genres from "../data/genres"

export interface genre{
    name:string,
    id:number,
    background_image:string
}
const useGenres=()=>({
    data: genres,
    isLoading: false,
    error: null
})
export default useGenres;
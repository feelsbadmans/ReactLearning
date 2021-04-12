export interface EpisodeType {
    id:number,
    title:string,
    season: number,
    episode: number,
    air_date: string;
    characters: Array<string>
}
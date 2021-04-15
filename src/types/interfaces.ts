import { EpisodeType } from "./EpisodeType";

export interface PropsCarousel {
  episodes : Array<object>,
  key: number
}

export interface PropsEpisodeItem {
    episode: EpisodeType
}

export interface PropsSeasonBlock {
    data : object
}

export interface PropsEpisodeBlock {
    episodes: Array<object>,
    X: number
}
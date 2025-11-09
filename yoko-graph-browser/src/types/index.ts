export type SearchQuery = string;

export interface GraphData {
    x: number[];
    y: number[];
}

export interface AppState {
    searchQuery: SearchQuery;
    graphData: GraphData;
    isLandscape: boolean;
}
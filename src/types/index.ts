export type Orientation = 'portrait' | 'landscape';

export interface BrowserState {
    url: string;
    isLoading: boolean;
    error: string | null;
}

export interface AppContextType {
    state: BrowserState;
    dispatch: React.Dispatch<any>;
}
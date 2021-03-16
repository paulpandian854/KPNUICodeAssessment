export interface TRAINSTATION {
    code: number,
    message: string
}

export interface STATION {
    code: string,
    namen: NAMEN
}

export interface NAMEN {
    lang: string;
}

export interface DEPARTURE {
    source: string,
    departures: DEPARTUREARRAY[],
}

export interface DEPARTUREARRAY {
    direction: string,
    plannedDateTime: string,
    plannedTrack: string,
    trainCategory: string,
}
export enum GenderInterpretation {
    Male = 'Male',
    Female = 'Female',
    Unknown = 'Unknown',
}

export enum PERMAInterpretation {
    Positive = 'Positive',
    Neutral = 'Neutral',
    Negative = 'Negative',
}

export interface PERMAAnalysis {
    positive_emotion: PERMAInterpretation;
    engagement: PERMAInterpretation;
    relationships: PERMAInterpretation;
    meaning: PERMAInterpretation;
    accomplishment: PERMAInterpretation;
}

export enum EmolexInterpretation {
    Low = 'Low',
    Moderate = 'Moderate',
    Neutral = 'Neutral',
    High = 'High',
    VeryHigh = 'VeryHigh',
    Unknown = 'Unknown',
}

export interface EmoLexEmotions {
    anger: EmolexInterpretation;
    anticipation: EmolexInterpretation;
    disgust: EmolexInterpretation;
    fear: EmolexInterpretation;
    joy: EmolexInterpretation;
    negative: EmolexInterpretation;
    positive: EmolexInterpretation;
    sadness: EmolexInterpretation;
    surprise: EmolexInterpretation;
    trust: EmolexInterpretation;
}

export interface RagegunResult {
    age?: number;
    gender?: GenderInterpretation;
    distress?: number;
    perma?: PERMAAnalysis;
    emolex_all_languages?: EmoLexEmotions;
    emolex_english?: EmoLexEmotions;
}

export function analysis(
    text: string,
): Promise<RagegunResult>;

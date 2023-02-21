export interface USER_DATA {
    User: {
        nickname: string;
        id: string;
    };
    certified_account: boolean;
}

export type Period = "dawn" | "morning" | "afternoon" | "evening";

export type Emotion =
    | "confidence"
    | "excitement"
    | "thanks"
    | "comfort"
    | "worry"
    | "sad"
    | "hurt"
    | "angry";

export type Weather = "sunny" | "cloudAndSun" | "cloudy" | "rainy" | "snowy";

export interface Diary {
    id: number;
    title: string;
    description: string;
    emotion: Emotion;
    lock: boolean;
    likes: number;
    weather: Weather;
    createdAt: string;
    updatedAt: string;
    author: string;
}

export interface FetchingDiaryListOption {
    user: "true" | "false";
    count: number;
    page: number;
    emotion: "all" | Emotion;
    lock: "true" | "false";
}

export type WriteDiary2 = Omit<Diary, "id" | "emotion" | "likes">;
export type EditorDiary2 = Omit<Diary, "likes" | "createdAt">;

export interface WriteDiary {
    title: string;
    description: string;
    weather: Weather;
    lock: boolean;
    createdAt: string;
}

export interface EditorDiary {
    id: number;
    title: string;
    description: string;
    emotion: Emotion;
    lock: boolean;
    weather: Weather;
}

// certification
export interface SendCertification {
    email: string;
    target: "email" | "password";
}

export interface NewAccount {
    nickname: string;
    email: string;
    userID: string;
    password: string;
}

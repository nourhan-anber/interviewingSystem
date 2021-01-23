export interface Rule {
    id: number,
    name: string,
    checked: boolean
}

export interface Question{
    id: number,
    title: string,
    explanation: string,
    expectedAnswer: string,
    weight: number,
    level: number,
    questionType: string,
    choices: string[],
}

export interface User{
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    answers: string[],
    level: number,
    total: number
}
export type Entry = {
    reason: string;
    amount: number | undefined;
    category: string;
    id: string;
}

export type AddEntry = (newEntry: Entry) => void
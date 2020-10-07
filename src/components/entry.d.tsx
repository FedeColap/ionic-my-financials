export type Entry = {
    reason: string;
    amount: number | undefined;
    category: string;
    id: string;
    datetime: object;
}

export type AddEntry = (newEntry: Entry) => void

export type deleteEntry = (deleteThisEntryID: Entry["id"]) => void
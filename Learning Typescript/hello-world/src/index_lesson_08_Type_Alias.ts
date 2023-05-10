type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void

}
let employee01: {
} = {
    id: 1,
    name: 'Harman',
    retire: (date: Date) => {
        console.log(date);
    }
};
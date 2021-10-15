export interface Duck{
    name: string;
    numberOfLegs: number;
    makeSound: (sound: string) => void;
}


const duck1 :Duck = {
    name: 'huyey',
    numberOfLegs: 2,
    makeSound: (sound : any) => {console.log(sound)}
}

const duck2 :Duck = {
    name: 'duey',
    numberOfLegs: 2,
    makeSound: (sound : any) => {console.log(sound)}
}


export const ducks = [duck1,duck2];
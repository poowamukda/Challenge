const animals = [
    {
        name: "cat",
        sound: "meow",
        feedingRequirements: {
            food: 2,
            water: 3
        }
    },
    {
        name: "dog",
        sound: "woof",
        feedingRequirements: {
            food: undefined,
            water: null
        }
    }
];
interface Animal {
    name: string;
    sound: string;
}
function useAnimals(animal: Animal) {
    return [
        animal.name,
        function () {
            console.log(animal.sound);

        }
    ]
}


export default animals;
export { useAnimals };
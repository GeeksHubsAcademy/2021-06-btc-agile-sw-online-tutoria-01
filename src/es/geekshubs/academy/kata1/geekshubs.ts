const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ + BUZZ;
const LN = "\n"

function mod_3(input: number): boolean {
   return (input % 3 === 0)
}

function mod_5(input: number): boolean {
   return (input % 5 === 0)
}

function mod_3_5(input: number): boolean {
   return (mod_3(input) && mod_5(input))
}



export function fizzBuzz(input : number) : String {
    let res = "";

    for (let i = 1; i <= input; i++) {
        if (mod_3_5(i))
            res += FIZZBUZZ + LN
        else if (mod_3(i))
            res += FIZZ + LN
        else if (mod_5(i))
            res += BUZZ + LN
        else
            res += i + LN;
    }

    return res;
};

export function fizzBuzz(input : Number) : String {
    let res = "";

    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0)
            res += "Fizz" + "\n"
        else
            res += i + "\n";
    }

    return res;
};


//First Assignment
function convertFahrToCelsius(f) {
    const c = (f - 32) * 5/9;
    let fahr = Object.prototype.toString.call(f);

    if (fahr==="[object Number]" || (fahr==="[object String]" && !isNaN(f))){
        return c.toFixed(4);
    }

    else{
        let paramtype = fahr.split(" ");
        paramtype[1] = paramtype[1]. substring(0, paramtype[1]. length-1);
        return `${JSON.stringify(f)} is not a valid number but a/an ${paramtype[1]}`;

    }
}

//Second Assignment (una no go kill person (-_-) )
function checkYuGiOh(n) {
    const result = [];
    if(isNaN(n)) {
        return `invalid parameter: "${n}"`;
    }
    for (let i = 0; i <= n; i++) {
        let localvar= [];
        if (i % 2 == 0) {
            localvar.push("yu");
        }
        
        if(i % 3 == 0) {
            localvar.push("gi");
        }

        if(i % 5 == 0) {
            localvar.push("oh");
        }
        if(localvar.length > 0) {
            result.push(localvar.join("-"));
        }

        else {
            result.push(i);
        }
    }
        return result;
}
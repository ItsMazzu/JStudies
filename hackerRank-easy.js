//EXERCÍCIOS TESTADOS DIRETAMENTE NO HACKERRANK

//(1) "Simple Array Sum"
function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++)
    {
        sum+=ar[i];
    }
    return sum;
}

//(2) "Compare Triplets"
function compareTriplets(a, b)
{
    let alicePoints = 0;
    let bobPoints = 0;
    
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > b[i])
        {
            alicePoints++;
        }
        else if(b[i] > a[i])
        {
            bobPoints++;
        }
    }
    return[alicePoints, bobPoints];
}

//(3) "A Very Big Sum"
function aVeryBigSum(ar)
{
    let n = 0;
    for(let i=0;i<ar.length;i++)
    {
        n+=ar[i];
    }
    return n;
}

//(4) "MinMax Sum"
function miniMaxSum(arr)
{
    arr.sort((a, b) => a - b);
    let minSum = 0;
    for(let i = 0; i < arr.length - 1; i++)
    {
        minSum += arr[i];
    }
    let maxSum = 0;
    for(let i = 1; i < arr.length; i++)
    {
        maxSum += arr[i];
    }
    
    console.log(minSum, maxSum);
}

//(5) "Birthday Cake Candles"

function birthdayCakeCandles(candles)
{
    let tallest = candles[0];
    for(let i = 1; i<candles.length; i++)
    {
        if(candles[i] > tallest)
        {
            tallest = candles[i];
        }
    }
    let height = 0;
    for (let i = 0; i < candles.length; i++)
    {
        if (candles[i] === tallest)
        {
            height++;
        }
    }

    return height;
}

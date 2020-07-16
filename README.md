# Data Structures & Algorithms

## Overview

- Collection of DS&As from Code Fellows coursework and online studies
<!-- - TO-DO: Table of Contents -->

## Discussion

### Big O Notation

> #### Time
>
> - We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)** as **n** increase
> - Different machines will record different times
> - The same machine will record different times
> - For fast algorithms, speed measurements may not be precise enough
> - Talks about how the runtime of an algorithm grows as the inputs grow
> - Focuses on trends

> #### Shorthands
>
> - Arithmetic operations are constant
> - Variable assignment is constant
> - Accessing elements in any array or object by index or key respectively is constant
> - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

> #### Space
>
> - O(1) for creating new variables
> - O(n) for arrays and objects with sizes based on the input, n

> #### Time of Objects
>
> - Insertion O(1)
> - Removal O(1)
> - Access O(1)
> - Those three are O(1) because of how hashes work
> - Searching O(n)

> #### Time of Object Methods
>
> - Object.keys O(n)
> - Object.values O(n)
> - Object.entries O(n)
> - hasOwnProperty O(1)

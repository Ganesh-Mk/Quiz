export const javaQuizData = [
    {
        question: `What will be the output? :

        String s1="Hello";
        String s2="World";
        String s3=s1+s2;
        S.O.P(s3 == "HelloWorld");`,
        option1: "true",
        option2: "false",
        option3: "Compilation Error",
        option4: "Runtime Error",
        answer: 2,
    },
    {
        question: `What will be the output? :
        
        System.out.println(5 % 2);`,
        option1: "2",
        option2: "2.5",
        option3: "1",
        option4: "0.5",
        answer: 3,
    },
    {
        question: `What will be the output? : 
        
        System.out.println('A' + 1);`,
        option1: "A",
        option2: "B",
        option3: "65",
        option4: "66",
        answer: 3,
    },
    {
        question: `What will be the output? :
       
        int x = 10;
        S.o.p(x++ + ++x);`,
        option1: "10",
        option2: "22",
        option3: "21",
        option4: "20",
        answer: 2,
    },
    {
        question: `What will be the output? :
        
        int x = 5;
        S.o.p(++x + x++ + ++x);`,
        option1: "5",
        option2: "18",
        option3: "25",
        option4: "20",
        answer: 3,
    },
  
    {
        question: "Which keyword is used to define a constant in Java?",
        option1: "constant",
        option2: "final",
        option3: "const",
        option4: "static",
        answer: 2
    },
    {
        question: "In Java, which access modifier allows a class to be accessed only within the same package?",
        option1: "private",
        option2: "protected",
        option3: "public",
        option4: "default",
        answer: 4
    },
    {
        question: "Which Java keyword is used to create a subclass?",
        option1: "extend",
        option2: "implements",
        option3: "subclass",
        option4: "superclass",
        answer: 1
    },
    {
        question: "Which of the following is not loop in java",
        option1: "forEach loop",
        option2: "do while loop",
        option3: "for loop",
        option4: "None of the above",
        answer: 4
    },
    {
        question: "In Java, which loop is used to iterate through a collection, such as an array or ArrayList?",
        option1: "if-else loop",
        option2: "for loop",
        option3: "while loop",
        option4: "forEach loop",
        answer: 4
    },
    
];










// ================================================================================












export const javaScriptQuizData = [
    {
        question: 'In JavaScript, what does the "typeof" operator return for an array?',
        option1 : 'Object',
        option2 : 'List',
        option3 : 'Array',
        option4 : 'Function',
        answer: 1,
    },
    {
       question: `What will be the output? :
       function foo() {
           console.log(a);
           var a = 10;
       }
       foo();`,
       option1: '10',
       option2: 'undefined',
       option3: 'ReferenceError',
       option4: 'null',
       answer: 2,
    },
    {
       question: `What will be the output? :
       const a = [1, 2, 3];
       const b = a;
       b[0] = 5;
       console.log(a);`,
       option1: '[1, 2, 3]',
       option2: '[5, 2, 3]',
       option3: '[1, 2, 3, 5]',
       option4: 'Error',
       answer: 2,
    },
    {
        question: 'What is the result of the expression "2" + 2 in JavaScript?',
        option1: '22',
        option2: '4',
        option3: 'TypeError',
        option4: 'NaN',
        answer: 1,
    },  
    {
        question: `What is the value of x after running this code?
        
        let x = 5;
        x = x++;`,
        option1: '4',
        option2: '5',
        option3: '6',
        option4: 'NaN',
        answer: 2,
    },
    {
        question: 'Which JavaScript method is used to add elements to the beginning of an array?',
        option1: 'push()',
        option2: 'unshift()',
        option3: 'append()',
        option4: 'addToStart()',
        answer: 2,
    },
    {
        question: 'What is the result of the expression null == undefined in JavaScript?',
        option1: 'true',
        option2: 'false',
        option3: 'undefined',
        option4: 'null',
        answer: 1,
    },
    {
        question: 'What is the scope of a variable declared with the "let" keyword in JavaScript?',
        option1: 'Function scope',
        option2: 'Block scope',
        option3: 'Global scope',
        option4: 'Object scope',
        answer: 2,
    },
    {
        question: 'Which JavaScript method is used to join the elements of an array into a string?',
        option1: 'concat()',
        option2: 'join()',
        option3: 'split()',
        option4: 'slice()',
        answer: 2,
    },
    {
        question: 'What does the "NaN" stand for in JavaScript?',
        option1: 'Not a Number',
        option2: 'New and Notable',
        option3: 'Numeric Algorithm',
        option4: 'Null and None',
        answer: 1,
    }
];













// ================================================================================









export const cQuizData = [
    {
        question: "Which C function is used to allocate memory dynamically?",
        option1: "malloc()",
        option2: "calloc()",
        option3: "realloc()",
        option4: "free()",
        answer: 1
    },
    {
        question: `What will be the output?:
        
        int x = 10;
        if (x = 5) {
            printf("Hello, World!");
        }`,
        option1: "Hello, World!",
        option2: "No output",
        option3: "Compilation Error",
        option4: "Runtime Error",
        answer: 1
    },
    {
        question: `What will be the output?:

        printf("%d", sizeof(char)); 
        `,
        option1: "1",
        option2: "2",
        option3: "4",
        option4: "8",
        answer: 1
    },
    {
        question: `What will be the output? : 

        printf("%c", 'A' + 32);`,
        option1: "A",
        option2: "B",
        option3: "a",
        option4: "b",
        answer: 3
    },
    {
        question: `What will be the output?: 
        
        if("Hello")
            printf("Hello World!");
        else
            printf("Good Bye!");`,
        option1: "Good Bye!",
        option2: "Hello World",
        option3: "Error",
        option4: "Nothing",
        answer: 2
    },
    {
        question: `What will be the output?: 

        int function(int x){
            return x++; }
        void main() {
            int x = 5;
            function(x);
            printf("%d",x);  }`,
        option1: "5",
        option2: "6",
        option3: "4",
        option4: "Error",
        answer: 1
    },
    {
        question: `What will be the output?: 

        char a[10] = "Hello";
        char b[10] = "Hello";
        a == b ? printf("True") : printf("False");
        `,
        option1: "True",
        option2: "False",
        option3: "Run-time Error",
        option4: "Compilation Error",
        answer: 2
    },
    {
        question: `What is the output of the following C code?
        
        int x = 5; 
        printf("%d", x++);`,
        option1: "Undefined behavior",
        option2: "6",
        option3: "Compile error",
        option4: "5",
        answer: 4
    },
    {
        question: "In C, which operator is used to access the value at a pointer's address?",
        option1: "&",
        option2: "*",
        option3: "->",
        option4: ".",
        answer: 2
    },
    {
        question: "Which is correct declaration of pointer?",
        option1: "int * ptr;",
        option2: "int* ptr;",
        option3: "int *ptr",
        option4: "All of the above",
        answer: 4
    }
];
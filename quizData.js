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
        answer: 2
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
        answer: 4,
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
        option1: "extends",
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










// =================================================================================================================================












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













// =================================================================================================================================









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
            return x++; 
        }
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
        option3: "int *ptr;",
        option4: "All of the above",
        answer: 4
    }
];












// =================================================================================================================================















// =======================================================================================================================================================================










export const evsAllQuizData = [
    {
        question: "Eutrophication means",
        option1: "Thermal change in water ",
        option2: "Filling up of water body with aquatic due to extra nourishment ",
        option3: "Solid waste ",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "Biochemical oxygen demand means",
        option1: "Industrial pollution ",
        option2: "Air pollution ",
        option3: "Polluting capacity of effluent ",
        option4: "Dissolved O2 needed by microbes to decompose organic waste",
        answer: 4
    },
    {
        question: "The main components of photochemical smog is ",
        option1: "Water vapour ",
        option2: "Sulphur dioxide ",
        option3: "Oxides of nitrogen ",
        option4: "All of the above",
        answer: 3
    },
    {
        question: "Deforestation generally decreases ",
        option1: "Rainfall ",
        option2: "Soil erosion ",
        option3: "Drought ",
        option4: "Global warming",
        answer: 1
    },
    {
        question: "The term Alpha diversity refers to ",
        option1: "Genetic diversity ",
        option2: "Community and ecosystem diversity ",
        option3: "Species diversity ",
        option4: "Diversity among the plant",
        answer: 2
    },
    {
        question: "____________ is defined as an ecological state of a species being unique to a specific geographic location. ",
        option1: "Exotic species ",
        option2: "Endemic species ",
        option3: "Ecosystem ",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "5th June is observed as ",
        option1: "World forest day ",
        option2: "World environment day ",
        option3: "World wildlife day ",
        option4: "World population day",
        answer: 2
    },
    {
        question: "The Ecological pyramid that is always upright ",
        option1: "Pyramid of energy ",
        option2: "Pyramid of biomass ",
        option3: "Pyramid of number ",
        option4: "None of these",
        answer: 1
    },
    {
        question: "Most stable ecosystem is ",
        option1: "Forest ",
        option2: "Desert",
        option3: "Ocean",
        option4: "Mountain",
        answer: 3
    },
    {
        question: "Atomospheric ozone layer which protect us from UV-B & C is getting depleted most by addition of ",
        option1: "Chloro flurocarbon ",
        option2: "Carbon monooxide ",
        option3: "Carbon dioxide ",
        option4: "Sulpur dioxide",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 10
    

    {
        question: "Which of the following are important biotic factors that can affect the structure and organization of biological communities? ",
        option1: "Nutrient availability, soil pH, light intensity ",
        option2: "Precipitation, wind, temperature ",
        option3: "Predation, competition, disease ",
        option4: "all of the above",
        answer: 4
    },
    {
        question: "All of the following statements about ecology are correct except: ",
        option1: "Ecology is the study of the interactions between biotic and abiotic aspects of the environment ",
        option2: "Ecology is a discipline that is independent from natural selection and evolutionary history ",
        option3: "Ecologists may study populations and communities of organisms ",
        option4: "Ecology spans increasingly comprehensive levels of organization, from individuals to ecosystems",
        answer: 4
    },
    {
        question: "Detritus food chain starts from ",
        option1: "Green plants ",
        option2: "Grass ",
        option3: "Dead organic matter ",
        option4: "Phytoplankton",
        answer: 3
    },
    {
        question: "Who coined the term acid rain?",
        option1: "Christ Ralph",
        option2: "Elmer Joseph Clark",
        option3: "Ernest Flower",
        option4: "Robert Angus Smith",
        answer: 4
    },
    {
        question: "The damage caused by acid rain is due to_________ nature of acid rain",
        option1: "balancing",
        option2: "protecting",
        option3: "withstanding",
        option4: "corrosive",
        answer: 4
    },
    {
        question: "Acid rain reacts with marble and limestone to form",
        option1: "calcium carbonate",
        option2: "calcium hydroxide",
        option3: "calcium sulphate",
        option4: "None of the above",
        answer: 3
    },
    {
        question: "The ecological pyramid always starts with the following at the base ",
        option1: "Decomposer ",
        option2: "Producer ",
        option3: "Consumer ",
        option4: "None of these",
        answer: 2
    },
    {
        question: "Which of the following is a non-renewable resource? ",
        option1: "Coal ",
        option2: "Forest ",
        option3: "Water ",
        option4: "Wildlife",
        answer: 1
    },
    {
        question: "Chipko movement was started to conserve ",
        option1: "Forests ",
        option2: "Grasslands",
        option3: "Deserts ",
        option4: "Soil",
        answer: 1
    },
    {
        question: "What is common to the techniques (i) in vitro fertilization, (ii) Cryo preservation and (iii) tissue culture? ",
        option1: "All are in situ conservation methods",
        option2: "All are ex situ conservation methods ",
        option3: "All require ultra-modern equipment and large space ",
        option4: "All are methods of conservation of extinct organisms",
        answer: 2
    },

    // =================================================------------------------------------------------------------------------ 20
    
    {
        question: "The type of diversity including all the different kinds of living things found in a certain habitat is called as ",
        option1: "Species diversity ",
        option2: "Genetic diversity ",
        option3: "Ecosystem diversity ",
        option4: "Population diversity",
        answer: 1
    },
    {
        question: "Biosphere reserve has following zone except one",
        option1: "Core zone ",
        option2: "Command zone ",
        option3: "Buffer zone ",
        option4: "Spherical zone",
        answer: 4
    },
    {
        question: "Conservation of biodiversity outside the natural habitat is called as",
        option1: "Ex-situ ",
        option2: "In-situ ",
        option3: "Conservation ",
        option4: "In-vivo",
        answer: 1
    },
    {
        question: "Which out of the following are the causes of soil erosion?",
        option1: "Unrestricted grazing",
        option2: "Over cultivation",
        option3: "Deforestation",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "Red data book contains data of",
        option1: "All plant species",
        option2: "All animal species",
        option3: "Threatened species",
        option4: "Economically important species",
        answer: 3
    },
    {
        question: "Which of the following regions has the maximum diversity?",
        option1: "Mangroves",
        option2: "Temperate forest",
        option3: "Taiga",
        option4: "Coral reefs",
        answer: 4
    },
    {
        question: "Which one of the following is not included under in situ conservation?",
        option1: "Zoo",
        option2: "National Park",
        option3: "Wild life Sanctuary",
        option4: "Biosphere Reserve",
        answer: 1
    },
    {
        question: "Hotspots are regions of high",
        option1: "Rareism",
        option2: "Endemism",
        option3: "Diversity",
        option4: "Critically endangered population",
        answer: 2
    },
    {
        question: "A poisonous gas given out of vehicles exhaust is",
        option1: "Carbon monoxide",
        option2: "Ethane",
        option3: "Methane",
        option4: "Carbon dioxide",
        answer: 1
    },
    {
        question: "Yellowing of Taj Mahal is an effect of",
        option1: "Acid rain",
        option2: "Global warming",
        option3: "Ozone depletion",
        option4: "All of the above",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 30

    {
        question: "Pollutants that are easily manageable and decomposable in nature are called",
        option1: "Biodegradable pollutants",
        option2: "Non-biodegradable pollutants",
        option3: "Renewable pollutants",
        option4: "None of these",
        answer: 1
    },
    {
        question: "BOD stands for",
        option1: "Biotic oxidation demand",
        option2: "Biological oxygen demand",
        option3: "Biological oxidation demand",
        option4: "Biochemical oxygen demand",
        answer: 2
    },
    {
        question: "What is Kyoto Protocol?",
        option1: "It is an agreement among countries to take steps for reducing global warming",
        option2: "It is an agreement among countries to take steps for reducing acid rain",
        option3: "It is an agreement among countries to take steps for planting trees to control pollution",
        option4: "It is an agreement among countries to start using nuclear energy",
        answer: 1
    },
    {
        question: "Which of the following is a greenhouse gas?",
        option1: "Methane",
        option2: "Water vapor ",
        option3: "Carbon dioxide",
        option4: "All of the above ",
        answer: 4
    },
    {
        question: "Ozone day is observed on",
        option1: "3rd January",
        option2: "16th September",
        option3: "10th November",
        option4: "26th March",
        answer: 2
    },
    {
        question: "A population is a group of",
        option1: "Individual in a family",
        option2: "Individuals in a species",
        option3: "Communities in an ecosystem",
        option4: "Species in a community",
        answer: 2
    },
    {
        question: "Sustainable development means",
        option1: "meeting present needs without compromising on future needs",
        option2: "progress of human beings",
        option3: "balance between human needs and the ability of earth to provide the resources",
        option4: "all of the above",
        answer: 4
    },
    {
        question: "Energy flow in an ecosystem is",
        option1: "Bidirectional",
        option2: "Unidirectional",
        option3: "Multidirectional",
        option4: "All rounds",
        answer: 2
    },
    {
        question: "The upright pyramid of numbers is absent in",
        option1: "Lake",
        option2: "Pond",
        option3: "Grasslands",
        option4: "Forests",
        answer: 4
    },
    {
        question: "The final stable community in ecological succession is",
        option1: "Climax",
        option2: "Pioneer",
        option3: "Sere",
        option4: "Carnivores",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 40

    {
        question: "Which of the following is not an inexhaustible form of energy?",
        option1: "Water",
        option2: "Wind",
        option3: "Solar",
        option4: "Fossil",
        answer: 3
    },
    {
        question: "The burning of fossil fuels releases a large amount of",
        option1: "Nitrogen into air",
        option2: "Sulphur into air",
        option3: "Carbon dioxide into air",
        option4: "Oxygen into air",
        answer: 3
    },
    {
        question: "Which is a list of renewable resources?",
        option1: "Petroleum, geothermal, wind",
        option2: "Biomass, geothermal, hydropower",
        option3: "Natural gas, wind, biomass",
        option4: "Hydropower, solar, wind energy",
        answer: 4
    },
    {
        question: "In ecological succession, the intermediate developmental phase is known as",
        option1: "Ecesis",
        option2: "Climax",
        option3: "Nudation",
        option4: "Sere",
        answer: 4
    },
    {
        question: "Order of basic processes involved in succession is",
        option1: "Invasion -> stabilization -> completion and coaction -> reaction -> nudation",
        option2: "Nudation -> stabilization -> completion and coaction -> invasion -> reaction",
        option3: "Invasion -> nudation -> completion and coaction -> reaction -> stabilization",
        option4: "Nudation -> invasion -> completion and coaction -> reaction -> stabilization",
        answer: 4
    },
    {
        question: "The organic material of the solid waste will decompose",
        option1: "By the flow of water",
        option2: "By the soil particles",
        option3: "By the action of microorganisms",
        option4: "By oxidation",
        answer: 3
    },
    {
        question: "In which year, the Indian Wildlife (Protection) Act was implemented?",
        option1: "1970",
        option2: "1971",
        option3: "1972",
        option4: "1974",
        answer: 1
    },
    {
        question: "Which of the following convention aimed to bring conservation of biological diversity, the sustainable use of its components, and the fair and equitable sharing?",
        option1: "Convention on Biological Diversity (CBD)",
        option2: "Consultative group for International Agriculture Research (CGIAR)",
        option3: "Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)",
        option4: "All of the above",
        answer: 1
    },
    {
        question: "Which of the following was started in 1973 to save the evergreen tropical forest in the Palakkad district of Kerala, India from being flooded by a hydroelectric project?",
        option1: "Chipko Movement",
        option2: "Silent Valley Movement",
        option3: "Appiko Movement",
        option4: "Jungle Bachao Andola",
        answer: 2
    },
    {
        question: "The protection of Human Rights Act in India was enacted in the year",
        option1: "1993",
        option2: "1994",
        option3: "1995",
        option4: "1996",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 50

    {
        question: "The tigers are found in which of the following biosphere reserve",
        option1: "Thar desert biosphere reserve",
        option2: "Neelgiri biosphere reserve",
        option3: "Namdhapa biosphere reserve",
        option4: "Sunderbans biosphere reserve",
        answer: 4
    },
    {
        question: "Lions are found in ",
        option1: "Gir Forest ",
        option2: "Western Ghat ",
        option3: "Sundarban",
        option4: "Buxa Forest ",
        answer: 1
    },
    {
        question: "National Park associated with conservation of one-horned rhinoceros ",
        option1: "Kaziranga ",
        option2: "Ranthambore ",
        option3: "Corbette",
        option4: "Valley of flowers ",
        answer: 1
    },
    {
        question: "Algal bloom results in ",
        option1: "Global Warming ",
        option2: "Eutrophication ",
        option3: "Salinization",
        option4: "Biomagnification",
        answer: 2
    },
    {
        question: "____________ is used in measuring the magnitude of earthquake",
        option1: "Barometer",
        option2: "Seismometer ",
        option3: "Anemometer ",
        option4: "Thermometer ",
        answer: 2
    },
    {
        question: "Who publish Red-list?",
        option1: "WWF",
        option2: "IUCN",
        option3: "MAB",
        option4: "IBWL",
        answer: 2
    },
    {
        question: "Covering the soil surface by straw, leaves or grasses is known as ",
        option1: "Leaching ",
        option2: "Mulching ",
        option3: "Terracing ",
        option4: "Crop rotation ",
        answer: 2
    },
    {
        question: "A disease not caused by water pollution is ",
        option1: "Jaundice ",
        option2: "Cholera ",
        option3: "AIDS",
        option4: "Dysentery ",
        answer: 3
    },
    {
        question: "COD stands for ",
        option1: "Chemical Oxygen Demand ",
        option2: "Carbon and Oxygen Demand ",
        option3: "Climate of Deserts ",
        option4: "None of the above ",
        answer: 1
    },


    {
        question: "Red Panda, a highly endangered species is found in which part of India? ",
        option1: "Costal region ",
        option2: "Trans Himalayan region ",
        option3: "North-Eastern Himalayas ",
        option4: "Terai region ",
        answer: 3
    },

    // =================================================------------------------------------------------------------------------ 60

    {
        question: "Asian elephant is now endangered because it is being killed for ",
        option1: "Skin ",
        option2: "Musk ",
        option3: "Ivory ",
        option4: "Fur ",
        answer: 3
    },
    {
        question: "Trophic levels are formed by ",
        option1: "Only plants ",
        option2: "Only animals ",
        option3: "Only carnivals ",
        option4: "Food chain linked organisms ",
        answer: 4
    },
    {
        question: "Process of photosynthesis is found in ",
        option1: "Decomposers ",
        option2: "Producers ",
        option3: "Consumers ",
        option4: "Top consumers ",
        answer: 2
    },
    {
        question: "The 3 R principle in waste management stand for",
        option1: "Reduce, Reuse and Recycle",
        option2: "Reduce, regain and reuse",
        option3: "Reduce, reset and reform",
        option4: "Reduce, retain and regain",
        answer: 1
    },
    {
        question: "Which of the following is not an air pollutant? ",
        option1: "Smoke ",
        option2: "CO2",
        option3: "Nitrogen ",
        option4: "Sulphur Dioxide",
        answer: 3
    },
    {
        question: "Who is associated with 'Chipko Movement'?",
        option1: "Salim Ali",
        option2: "Sundarlal Bahuguna",
        option3: "Rachel Carson",
        option4: "None of these ",
        answer: 2
    },
    {
        question: "In which year Silent Valley was declared as National Park?",
        option1: "1982",
        option2: "1984",
        option3: "1988",
        option4: "1992",
        answer: 2
    },
    {
        question: "Ozone is formed in the upper atmosphere by a photochemical reaction with",
        option1: "Ultra violet solar radiation",
        option2: "Infra-red radiation",
        option3: "Visible light",
        option4: "All of the above",
        answer: 1
    },
    {
        question: "Minamata disease is caused due to pollution by ",
        option1: "Lead ",
        option2: "PAN ",
        option3: "Mercury ",
        option4: "SO2",
        answer: 3
    },


    {
        question: "Sardar Sarovar Project is situated on the river ",
        option1: "Ganga ",
        option2: "Yamuna ",
        option3: "Cauvery",
        option4: "Narmada ",
        answer: 4
    },

    // =================================================------------------------------------------------------------------------ 70

    {
        question: "The biggest nuclear accident occurred in ",
        option1: "New York ",
        option2: "Bhopal ",
        option3: "Chernobyl ",
        option4: "Beijing ",
        answer: 3
    },
    {
        question: "The lowest layer of atmosphere is ",
        option1: "Mesosphere ",
        option2: "Stratosphere ",
        option3: "Troposphere ",
        option4: "Ionosphere ",
        answer: 3
    },
    {
        question: "The first National Park established in India in 1936 is ",
        option1: "Dudhwa National Park ",
        option2: "Rajaji National Park ",
        option3: "Jim Corbett National Park ",
        option4: "Kaziranga National Park ",
        answer: 3
    },
    {
        question: "The Indian Environmental Protection Act. Came into force in ",
        option1: "1976",
        option2: "1996",
        option3: "1986",
        option4: "1988",
        answer: 3
    },
    {
        question: "An aquarium is an ------------------------ ecosystem ",
        option1: "Aquatic ",
        option2: "Self-regulating ",
        option3: "Artificial ",
        option4: "Both a & c",
        answer: 4
    },
    {
        question: "Plants that can grow in dry places are called ",
        option1: "Hydrophytes ",
        option2: "Mesophytes ",
        option3: "Halophytes ",
        option4: "Xerophytes ",
        answer: 4
    },
    {
        question: "The process that causes wearing away and transportation of particles of rock or soil is called ",
        option1: "Salinization ",
        option2: "Soil formation ",
        option3: "Erosion ",
        option4: "Landslide ",
        answer: 3
    },
    {
        question: "All consumers are ",
        option1: "Autotrophs ",
        option2: "Carnivores ",
        option3: "Heterotrophs ",
        option4: "All of these ",
        answer: 3
    },
    {
        question: "The conversion of ammonia to nitrates is known as ",
        option1: "Denitrification ",
        option2: "Nitrification ",
        option3: "Ammonification ",
        option4: "Nitrogen-fixation ",
        answer: 2
    },


    {
        question: "Matter must be recycled again and again by an ecological process called ",
        option1: "Ecological pyramid ",
        option2: "Ecological Succession ",
        option3: "Biogeochemical cycle ",
        option4: "Energy flow ",
        answer: 3
    },

    // =================================================------------------------------------------------------------------------ 80

    {
        question: "------------------------ is conserved in Jaldapara Sanctuary",
        option1: "Rhino ",
        option2: "Nilgai ",
        option3: "Hangul ",
        option4: "Crocodile ",
        answer: 1
    },
    {
        question: "The --------------------------- biosphere reserve lies in Western Ghats ",
        option1: "Nanda Devi ",
        option2: "Nilgiri ",
        option3: "Nokrek",
        option4: "Sunderbans ",
        answer: 2
    },
    {
        question: "The phenomenon of accumulation of non-biodegradable pesticides in human beings ",
        option1: "Bio-magnification ",
        option2: "Bio-degradation ",
        option3: "Bio-remediation ",
        option4: "Bio-accumulation",
        answer: 4
    },
    {
        question: "The study that deals with the interaction of organisms with their environment ",
        option1: "Etiology ",
        option2: "Botany ",
        option3: "Ecology ",
        option4: "Biology ",
        answer: 3
    },
    {
        question: "------------------------------- is the phenomenon in which the earth retains heat ",
        option1: "Air pollution ",
        option2: "Green House effect ",
        option3: "Global effect ",
        option4: "Land pollution ",
        answer: 2
    },
    {
        question: "Leader of “Narmada Bachao Andolan” ",
        option1: "Vandana Siva ",
        option2: "Medha Patkar ",
        option3: "Maneka Gandhi ",
        option4: "None of the above ",
        answer: 2
    },
    {
        question: "The cause of Bhopal Gas Tragedy is ",
        option1: "Methyl alcohol ",
        option2: "Methyl carbonate ",
        option3: "Methyl iso-cyanate",
        option4: "Methyl sulphate ",
        answer: 3
    },
    {
        question: "On which date was the Stockholm Conference on Human Environment held? ",
        option1: "July 6th 1974 ",
        option2: "August 8th 1976",
        option3: "June 5th 1972 ",
        option4: "Dec 12th 1990 ",
        answer: 3
    },
    {
        question: "The cutting down of trees and setting them on fire and raising crops on the resulting ash is called ",
        option1: "Jhum cultivation ",
        option2: "Crop rotation ",
        option3: "Terrace farming ",
        option4: "Taungya system ",
        answer: 1
    },


    {
        question: "The first International Conference on Environment was held in ",
        option1: "Rio de Jeneiro",
        option2: "Johannesburg",
        option3: "Stockholm ",
        option4: "New Delhi ",
        answer: 3
    },

    // =================================================------------------------------------------------------------------------ 90

    {
        question: "First International Conference on “Wetland Conservation” was held in ",
        option1: "Ramsagar",
        option2: "Ramsar ",
        option3: "Ramsahar ",
        option4: "Stockholm ",
        answer: 2
    },
    {
        question: "Forest helps in mitigating global warming through ",
        option1: "Heat radiation ",
        option2: "Heat absorption ",
        option3: "Transpiration ",
        option4: "Photosynthesis ",
        answer: 4
    },
    {
        question: "Both power and manure are provided by ",
        option1: "Thermal plant ",
        option2: "Nuclear plant ",
        option3: "Biogas plant ",
        option4: "Hydroelectric plant ",
        answer: 3
    },
    {
        question: "Main source of noise pollution ",
        option1: "Urbanization ",
        option2: "Industrialization ",
        option3: "Photochemical smog ",
        option4: "Both a & b ",
        answer: 4
    },
    {
        question: "A recent technique for the study of vegetation ",
        option1: "Photography ",
        option2: "Remote sensing ",
        option3: "Genetic Information analysis ",
        option4: "Observation ",
        answer: 2
    },
    {
        question: "The primary producer of a pond ecosystem is ",
        option1: "Zooplankton ",
        option2: "Red algae ",
        option3: "Phytoplankton ",
        option4: "Floating plants ",
        answer: 3
    },
    {
        question: "The zone in which two ecosystems are united is known as ",
        option1: "Niche ",
        option2: "Habitat",
        option3: "Ecotype ",
        option4: "Ecotone ",
        answer: 4
    },
    {
        question: "Which rock can be eroded by solution process? ",
        option1: "Granite ",
        option2: "Pegmatite ",
        option3: "Lime stone ",
        option4: "Ophiolite ",
        answer: 3
    },
    {
        question: "Which will not cause any atmospheric pollution? ",
        option1: "H2",
        option2: "SO2",
        option3: "CO2",
        option4: "CO ",
        answer: 1
    },
    {
        question: "A food web consists of ",
        option1: "A single food chain ",
        option2: "Many independent food chain",
        option3: "Many interconnected food chains ",
        option4: "All of these ",
        answer: 3
    },

    // =================================================------------------------------------------------------------------------ 100

    {
        question: "The efficiency of energy flow in the ecosystem is about ",
        option1: "1%",
        option2: "10%",
        option3: "50%",
        option4: "100% ",
        answer: 2
    },
    {
        question: "The most harmful environmental pollution from nuclear reactor is",
        option1: "radioactivity",
        option2: "particulate formation",
        option3: "thermal pollution",
        option4: "noise pollution",
        answer: 3
    },
    {
        question: "The term sustainable development was first used by ",
        option1: "World Development Report ",
        option2: "Brundtland Report ",
        option3: "World Environment Report ",
        option4: "None of the above.",
        answer: 3
    },
    {
        question: "The term biodiversity is coined by",
        option1: "W.G.Rosen",
        option2: "Ronald Coarse",
        option3: "Rachel Carson",
        option4: "None of the above.",
        answer: 1
    },
    {
        question: "The conversion of ammonia to nitrate is known as ",
        option1: "Ammonification",
        option2: "Nitrification",
        option3: "Denitrification",
        option4: "All of these",
        answer: 2
    },
    {
        question: "Which of the following enhances soil fertility?",
        option1: "Crop rotation",
        option2: "Improved methods of agriculture",
        option3: "Using new seed verities",
        option4: "Irrigation",
        answer: 1
    },
    {
        question: "Energy is returned to the atmosphere in the form of",
        option1: "Potential energy",
        option2: "Metabolic energy",
        option3: "Heat",
        option4: "Vapors",
        answer: 3
    },
    {
        question: "The presence of Ozone layer in the atmosphere was first observed by",
        option1: "W.G.Rosen",
        option2: "Ronald Coarse",
        option3: "Chapman",
        option4: "None of the above",
        answer: 3
    },
    {
        question: "The term Green House Effect was coined by",
        option1: "Ronald Coarse",
        option2: "Garret Hardin",
        option3: "J.Fourier",
        option4: "None of these",
        answer: 3
    },
    {
        question: "The species which are likely to become extinct in the near future is called",
        option1: "Rare species",
        option2: "Vulnerable species",
        option3: "Endangered species",
        option4: "Indeterminate species",
        answer: 2
    },

    // =================================================------------------------------------------------------------------------ 110

    {
        question: "Threatened species include",
        option1: "Rare species",
        option2: "Vulnerable species",
        option3: "Endangered species",
        option4: "All the above",
        answer: 4
    },
    {
        question: "Global warming is a consequence of----------------",
        option1: "Acid rain",
        option2: "Greenhouse effect",
        option3: "Depletion of ozone layer",
        option4: "Radioactive fall out",
        answer: 2
    },
    {
        question: "The study of individual organism is known as",
        option1: "Syn ecology",
        option2: "Population ecology",
        option3: "Autecology",
        option4: "Human ecology",
        answer: 3
    },
    {
        question: "Phagotropic mode of nutrition is found in ----------------",
        option1: "Products",
        option2: "Consumers",
        option3: "Decomposers",
        option4: "All of these",
        answer: 2
    },
    {
        question: "An example of e-waste is",
        option1: "Paper",
        option2: "Plastic",
        option3: "Industrial effluent",
        option4: "Mobile phone",
        answer: 4
    },
    {
        question: "Which of the following is not a waterborne disease?",
        option1: "Measles",
        option2: "Typhoid",
        option3: "Cholera",
        option4: "Hepatitis",
        answer: 1
    },
    {
        question: "__________ is an organism used to gauge the quality of an ecosystem. ",
        option1: "Decomposers",
        option2: "Predator",
        option3: "Bio-remediator",
        option4: "Bioindicator",
        answer: 4
    },
    {
        question: "Which of the following facts are incorrect?",
        option1: "Global warming is the rise in the average temperature of the earth’s climate system",
        option2: "Eutrophication is observed in water bodies",
        option3: "The greenhouse effect is a natural phenomenon",
        option4: "Ozone is harmless to breathe",
        answer: 4
    },
    {
        question: "Which of the following is called the secondary air pollutant?",
        option1: "PANs",
        option2: "Ozone",
        option3: "Carbon monoxide",
        option4: "Nitrogen Dioxide",
        answer: 2
    },
    {
        question: "Which of the following statements is true about smog?",
        option1: "Smog is derived from the fog",
        option2: "Smog is derived from smoke",
        option3: "Smog is derived from water vapor",
        option4: "Smog is derived from both fog and smoke",
        answer: 4
    },

    // =================================================------------------------------------------------------------------------ 120

    {
        question: "Which of the following diseases are caused by smog?",
        option1: "Rickets",
        option2: "Bronchitis",
        option3: "Breathing Problems",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "The protocol which decided to completely phase out CFC is",
        option1: "Cartagena protocol",
        option2: "Stockholm Convention",
        option3: "Montreal protocol",
        option4: "Kyoto protocol",
        answer: 3
    },
    {
        question: "Which of the following is said to be a biodegradable waste?",
        option1: "Plastics",
        option2: "Glasses",
        option3: "Eggshell",
        option4: "Polythene",
        answer: 3
    },
    {
        question: "The uses of CFCs are ",
        option1: "Insulators",
        option2: "Aerosol propellants",
        option3: "Refrigerants",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "The ozone layer is present in -",
        option1: "Mesosphere",
        option2: "Thermosphere",
        option3: "Stratosphere",
        option4: "None of the above",
        answer: 3
    },
    {
        question: "Which of the following are the negative health effects of noise pollution?",
        option1: "Hypertension",
        option2: "Hearing loss",
        option3: "Stress and headache",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "Wildlife week is celebrated from ",
        option1: "2nd October to 8th October",
        option2: "15th October to 21st October",
        option3: "14th June to 20th June",
        option4: "None of the above",
        answer: 1
    },
    {
        question: "CNG stands for ",
        option1: "Common Natural gas",
        option2: "Compressed National gas",
        option3: "Compressed Natural gas",
        option4: "Certified National gas",
        answer: 3
    },
    {
        question: "Animals whose primary source of food is based on plants are known as ",
        option1: "Carnivores",
        option2: "Herbivores",
        option3: "Omnivores",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "Which of the following device is used to measure the atmospheric humidity?",
        option1: "Photometer",
        option2: "Auxanometer",
        option3: "Hygrometer",
        option4: "None of the above",
        answer: 3
    },

    // =================================================------------------------------------------------------------------------ 130

    {
        question: "The year declared as the \"water year\" by the Indian Government is ",
        option1: "2010",
        option2: "2005",
        option3: "2006",
        option4: "2007",
        answer: 4
    },
    {
        question: "What kind of Eco-system is known as sustainable?",
        option1: "The one in which all species are in balance",
        option2: "The one in which there are no animals",
        option3: "The one in which animals feed on each other",
        option4: "All of these",
        answer: 1
    },
    {
        question: "Which of the following statement is TRUE?",
        option1: "Eco-Systems may vary in size",
        option2: "Eco-Systems are always very large",
        option3: "Eco-Systems are always very small.",
        option4: "None of these is true. ",
        answer: 1
    },
    {
        question: "Plants growing under direct sunlight are known as",
        option1: "Heliophytes",
        option2: "Sciophytes",
        option3: "Psamophytes",
        option4: "Dicots",
        answer: 1
    },
    {
        question: "What type of food chain is it? Dead animals → blowfly maggot → maggots → frog → snake",
        option1: "Detrital food chain",
        option2: "Decomposer food chain",
        option3: "Predator food chain",
        option4: "Grazing food chain",
        answer: 1
    },
    {
        question: "“The pyramid of energy is always upright” states that",
        option1: "The energy conversion efficiency of herbivores is better than carnivores",
        option2: "The energy conversion efficiency of carnivores is better than herbivores",
        option3: "Producers have the lowest energy conversion efficiency",
        option4: "Energy conversion efficiency is the same in all trophic levels",
        answer: 1
    },
    {
        question: "Plant species with a wide range of genetic distribution evolve into a local population known as",
        option1: "Ecotype",
        option2: "Population",
        option3: "Ecosystem",
        option4: "Biome",
        answer: 1
    },
    {
        question: "Edaphic factor refers to",
        option1: "Water",
        option2: "Soil",
        option3: "Relative humidity",
        option4: "Altitude",
        answer: 2
    },
    {
        question: "The following is an example of Terrestrial Biome",
        option1: "Tropical rain forest",
        option2: "Rivers",
        option3: "Streams",
        option4: "All of the above",
        answer: 1
    },
    {
        question: "Terrestrial biomes has a rapid exchange of",
        option1: "Carbon dioxide",
        option2: "Oxygen",
        option3: "Water",
        option4: "All of the above",
        answer: 4
    },

    // =================================================------------------------------------------------------------------------ 140

    {
        question: "Ecosystem is smallest unit of",
        option1: "Ionosphere",
        option2: "Lithosphere",
        option3: "Biosphere",
        option4: "Mesosphere",
        answer: 3
    },
    {
        question: "This is true about secondary succession",
        option1: "Follows primary succession",
        option2: "Takes place on a deforested site",
        option3: "is similar to primary succession except that it has a relatively slower pace",
        option4: "Begins on a bare rock",
        answer: 2
    },
    {
        question: "This about ecological succession is incorrect",
        option1: "Food chain relationships become more complex",
        option2: "Species diversity increases as succession proceeds",
        option3: "Role of decomposers becomes all the more important",
        option4: "is a random process",
        answer: 4
    },
    {
        question: "Process of the successful establishment of species in a new area is known as",
        option1: "Climax",
        option2: "Sere",
        option3: "Ecesis",
        option4: "Invasion",
        answer: 3
    },
    {
        question: `Ecological Succession is an important function of an Eco-system. Which of the following statements about Ecological succession is are correct? 
        (1) Succession refers to the changes in population or community structures that occur at the boundary of two habitats. 
        (2) It is a universal process of directional change in vegetation and animal life on an ecological time scale. Select the correct code`,
        option1: "1 only",
        option2: "2 only",
        option3: "Both 1 and 2",
        option4: "Neither 1 nor 2",
        answer: 2
    },
    {
        question: `In context of types of ecological successions, consider the following statements and identify the correct one/s 
        (1) Autogenic Succession is brought about by living inhabitants of the community itself. 
        (2) Allogenic Succession is brought about by the external forces. Select the correct code`,
        option1: "1 only",
        option2: "2 only",
        option3: "Both 1 and 2",
        option4: "Neither 1 or 2",
        answer: 3
    },
    {
        question: "Which of the following is an anti-forest conservation activity?",
        option1: "Preservation of wild animals",
        option2: "Preservation of fires",
        option3: "Clear felling",
        option4: "Economy in lumbering",
        answer: 3
    },
    {
        question: "The energy produced by the hydel-power plant is",
        option1: "Non-polluting and non-renewable",
        option2: "Polluting and non-renewable",
        option3: "Non-polluting and renewable",
        option4: "Polluting and renewable",
        answer: 3
    },
    {
        question: "Which one represents the regulative function of forests?",
        option1: "Storage and release of gases",
        option2: "Production of essential oils",
        option3: "Production of wood",
        option4: "Conservation of water and soil",
        answer: 1
    },
    {
        question: "'Ozone-hole' means",
        option1: "A large sized hole in the ozone layer",
        option2: "Thinning of the ozone layer",
        option3: "Small holes scattered in the ozone layer",
        option4: "Thickening of ozone in the ozone layer",
        answer: 2
    },

    // =================================================------------------------------------------------------------------------ 150

    {
        question: "Biotic component of biosphere is not constituted by",
        option1: "Producers",
        option2: "Consumers",
        option3: "Decomposer",
        option4: "Air",
        answer: 4
    },
    {
        question: "Soil erosion can be prevented by",
        option1: "Raising forests",
        option2: "Deforestation",
        option3: "Excessive use of fertilizer",
        option4: "Overgrazing by animals",
        answer: 1
    },
    {
        question: "What would happen, if all the oxygen present in the environment is converted to ozone?",
        option1: "We will be protected more",
        option2: "It will become poisonous and kill living forms",
        option3: "Ozone is not stable, hence it will be toxic",
        option4: "It will help harmful sun radiations to reach earth and damage many life forms.",
        answer: 2
    },
    {
        question: "The functional aspects of the ecosystem are",
        option1: "Energy cycles",
        option2: "Nutrient cycles",
        option3: "Food chains",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "Which of the following is also called Detrivores?",
        option1: "Herbivores",
        option2: "Decomposers",
        option3: "Carnivores",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "Which of the following activity is incorrect about the impact of human activities on the ecosystem?",
        option1: "Depletion of ground water",
        option2: "Extinction of species",
        option3: "Decrease of forest area",
        option4: "None of the above",
        answer: 4
    },
    {
        question: "The type of forests grown in the Himalayan mountain region is called",
        option1: "Broad-leaved forests",
        option2: "Coniferous forests",
        option3: "Deciduous forests",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "Which of the following is not a Biogeographic zone of India?",
        option1: "Thar Desert of Rajasthan",
        option2: "The Brahmaputra Plains",
        option3: "South-east zone",
        option4: "North-east zone",
        answer: 3
    },
    {
        question: "What are the numbers of biodiversity hotspots in the world?",
        option1: "18",
        option2: "28",
        option3: "32",
        option4: "36",
        answer: 4
    },
    {
        question: "Which of the following element is responsible for groundwater pollution in various states?",
        option1: "Chlorine",
        option2: "Fluoride",
        option3: "Chemicals",
        option4: "None of the above",
        answer: 2
    },

    // =================================================------------------------------------------------------------------------ 160

    {
        question: "Which element present in the drinking water can lead to various fatal diseases?",
        option1: "Calcium",
        option2: "Arsenic",
        option3: "Phosphorus",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "Forest Conservation act was amended in which of the following year?",
        option1: "1952",
        option2: "1963",
        option3: "1988",
        option4: "1978",
        answer: 3
    },
    {
        question: "Environmental studies is defined as the branch that deals with the",
        option1: "Design, study, and discovery of new materials",
        option2: "The study of humanities, social, biological, and physical sciences",
        option3: "Incorporate the information and physical sciences",
        option4: "Approach about the natural world and the impact of humans on its integrity",
        answer: 4
    },
    {
        question: "Which of the following is not a measure of sustainable water management?",
        option1: "Preventing leakage from dams and canals",
        option2: "Reducing the rate of surface run-off water.",
        option3: "Preventing loss in the municipal pipes.",
        option4: "Building small reservoirs in place of a few mega projects.",
        answer: 2
    },
    {
        question: "What is the world\'s largest potential source of biomass energy?",
        option1: "Animal waste",
        option2: "Industrial waste",
        option3: "Fibrous waste of the paper industry",
        option4: "Fibrous waste of the sugar industry",
        answer: 4
    },
    {
        question: "In an ecotone, the species which become abundant are called",
        option1: "Edge species",
        option2: "Keystone species",
        option3: "Endemic species",
        option4: "Foster species",
        answer: 1
    },
    {
        question: "Which of the following is management option for air pollution?",
        option1: "Regulations and standards",
        option2: "Transport planning",
        option3: "Using CNG as fuel",
        option4: "All of these",
        answer: 4
    },
    {
        question: "The term ‘Environment’ has been derived from the French word which means to encircle or surround",
        option1: "Environ",
        option2: "Oikos",
        option3: "Geo",
        option4: "Aqua",
        answer: 1
    },
    {
        question: "Which among the following is a climatic factor?",
        option1: "Pressure",
        option2: "Humidity",
        option3: "Temperature",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "Which of the following are major environmental issues involved in mining?",
        option1: "Air pollution",
        option2: "Water pollution",
        option3: "Soil degradation",
        option4: "All of the above",
        answer: 4
    },

    // =================================================------------------------------------------------------------------------ 170

    {
        question: "Water logging is a phenomenon in which",
        option1: "Crop patterns are rotated",
        option2: "Soil root zone becomes saturated due to over irrigation",
        option3: "Erosion of soil",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "Environmental impact assessment",
        option1: "is the study of feasibility of a project",
        option2: "is a study of bio-physical characteristics of the environment that may result from a human action",
        option3: "Both a and b",
        option4: "None of the above",
        answer: 2
    },
    {
        question: "A herbivore is also known as a",
        option1: "Producer",
        option2: "First order consumer",
        option3: "Second order consumer.",
        option4: "Third order consumer",
        answer: 2
    },
    {
        question: "The true end of any food chain is the",
        option1: "Decomposer",
        option2: "Predator",
        option3: "Consumer",
        option4: "Human",
        answer: 1
    },
    {
        question: "Which of the following can act as a pioneer species in a xerach succession?",
        option1: "Lichens",
        option2: "Humans",
        option3: "Herbs",
        option4: "Animals",
        answer: 1
    },
    {
        question: "In a pyramid of numbers in grassland ecosystems, the largest population is that of",
        option1: "Herbivores",
        option2: "Primary consumers",
        option3: "Secondary consumer",
        option4: "Producers",
        answer: 1
    },
    {
        question: "Which of these belong to the category of primary consumers in grazing food chain?",
        option1: "Snakes and frogs",
        option2: "Insects and cattle",
        option3: "Eagle and snakes",
        option4: "Cow and rabbit",
        answer: 4
    },
    {
        question: "Which one of the following is not a gaseous biogeochemical cycle?",
        option1: "Nitrogen cycle",
        option2: "Carbon cycle",
        option3: "Sulphur cycle",
        option4: "Phosphorus cycle",
        answer: 4
    },
    {
        question: "July 11 is",
        option1: "World Environment Day",
        option2: "World Population Day",
        option3: "World AIDS Day",
        option4: "World Education Day",
        answer: 4
    },
    {
        question: "Group of interbreeding organisms found in a particular area is",
        option1: "Population",
        option2: "Community",
        option3: "Tribe",
        option4: "Density",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 180

    {
        question: "In the breakdown of the ozone layer, the ozone (O3) directly reacts with",
        option1: "Ultraviolet light",
        option2: "Chlorine atoms",
        option3: "Oxygen atoms",
        option4: "CFC molecules",
        answer: 2
    },
    {
        question: "Thickness of ozone layer is measured in",
        option1: "Decibels",
        option2: "Dobson unit",
        option3: "Meter",
        option4: "Armstrong unit",
        answer: 2
    },
    {
        question: "Which of the following statements about ozone is true?",
        option1: "Ozone is a major constituent of photochemical smog",
        option2: "Ozone is highly reactive",
        option3: "It protects us from harmful UV radiations of sun",
        option4: "All of the above",
        answer: 3
    },
    {
        question: "Formation of hole in Ozone is maximum over",
        option1: "India",
        option2: "Europe",
        option3: "Antarctica",
        option4: "Africa",
        answer: 3
    },
    {
        question: "Which of the following is not a potential adverse effect of global warming?",
        option1: "More extreme weather patterns",
        option2: "Retreat of glaciers",
        option3: "Sea level rise",
        option4: "An increase of UV-B radiation",
        answer: 4
    },
    {
        question: "Excess atmospheric carbon dioxide increases greenhouse effect as carbon dioxide",
        option1: "Precipitates dust in the atmosphere",
        option2: "Is opaque to infrared rays",
        option3: "Reduces atmospheric pressure",
        option4: "Is heavier than other gases",
        answer: 2
    },
    {
        question: "The solar radiation that bounces off the earth back towards the atmosphere is mostly",
        option1: "Gamma radiation",
        option2: "X-ray radiation",
        option3: "Ultraviolet radiation",
        option4: "Infrared radiation",
        answer: 4
    },
    {
        question: "The two major impacts expected as a result of rising global temperatures are",
        option1: "Higher water levels in lakes and streams but more consistent flooding patterns",
        option2: "Regional climatic changes and a rise in sea level",
        option3: "Longer summers and drier winters",
        option4: "Low water levels in lakes and streams and larger floodplains.",
        answer: 2
    },
    {
        question: "Which country has organized its cabinet meeting under the sea to drag attention of the world towards the Global Warming and its threats?",
        option1: "Maldives",
        option2: "Sri Lanka",
        option3: "Fiji",
        option4: "Indonesia",
        answer: 1
    },
    {
        question: "A river with high BOD value means",
        option1: "Highly polluted",
        option2: "Highly clean",
        option3: "Highly productive",
        option4: "None of the above",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 190

    {
        question: "Which of the following is the best indicator of SO2 POLLUTION?",
        option1: "Bryophytes",
        option2: "Pteridophytes",
        option3: "Lichens",
        option4: "Algae",
        answer: 3
    },
    {
        question: "The supersonic jets cause air pollution by the thinning of",
        option1: "Carbon dioxide layer",
        option2: "Sulphur dioxide layer",
        option3: "Ozone layer",
        option4: "Oxygen layer",
        answer: 3
    },
    {
        question: "Increase in concentration of toxic level in each trophic level is referred to as",
        option1: "Eutrophication",
        option2: "Biomagnification",
        option3: "Bioaccumulation",
        option4: "Bioconcentration",
        answer: 2
    },
    {
        question: "Which one of the following regions in India is a hotspot of biodiversity?",
        option1: "Sundarbans",
        option2: "Western Ghats",
        option3: "Eastern Ghats",
        option4: "Gangetic plains",
        answer: 2
    },
    {
        question: "Development activities on the hydrosphere cause",
        option1: "Air pollution",
        option2: "Soil pollution",
        option3: "Water pollution",
        option4: "Soil erosion",
        answer: 3
    },
    {
        question: "Common energy source in Indian villages is",
        option1: "Electricity",
        option2: "Coal",
        option3: "Sun",
        option4: "Wood and animal dung",
        answer: 4
    },
    {
        question: "The one thing that is common to all fossil fuels is that they",
        option1: "Were originally formed in marine environment",
        option2: "Contain carbon",
        option3: "Have undergone the same set of geological processes during their formation",
        option4: "Represent the remains of one living organisms",
        answer: 2
    },
    {
        question: "Which of the below theory is related to non-renewable resources?",
        option1: "Game Theory",
        option2: "Phlogiston Theory",
        option3: "Big Bang Theory",
        option4: "Hotelling's Theory",
        answer: 4
    },
    {
        question: "Bill Gates, Chairman of the Board for Terra Power Company is associated in which of the following non-renewable resources?",
        option1: "Earth minerals",
        option2: "Fossil fuels",
        option3: "Nuclear energy",
        option4: "Metal ores",
        answer: 3
    },
    {
        question: "Which of the following nonrenewable energy is not classified under a fossil fuel?",
        option1: "Nuclear",
        option2: "Petroleum",
        option3: "Oil",
        option4: "Natural gas",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 200


    {
        question: "The major non-renewable energy usage in India is___________",
        option1: "Coal",
        option2: "Petroleum and other liquids",
        option3: "Natural gas",
        option4: "Nuclear",
        answer: 1
    },
    {
        question: "One of the following is the first major environmental protection act to be promulgated in India?",
        option1: "Environmental Act",
        option2: "Air Act",
        option3: "Water Act",
        option4: "Noise Pollution Rule",
        answer: 3
    },
    {
        question: "The first Forest Act was introduced in the_____ year",
        option1: "1989",
        option2: "1980",
        option3: "1972",
        option4: "1979",
        answer: 2
    },
    {
        question: "Plague is caused by",
        option1: "Leishmania donovani",
        option2: "Yersinia pestis",
        option3: "Salmonella typhimuium",
        option4: "Trichinella spiralis",
        answer: 2
    },
    {
        question: "Which of the following is not a vector-borne disease?",
        option1: "Yellow fever",
        option2: "Dengue fever",
        option3: "Viral fever",
        option4: "Malaria",
        answer: 3
    },
    {
        question: "Kala-azar is transmitted by",
        option1: "Dragon fly",
        option2: "Housefly",
        option3: "Tse-tse fly",
        option4: "Sand fly",
        answer: 4
    },
    {
        question: "Yellow fever is transmitted by",
        option1: "Anopheles",
        option2: "Aedes",
        option3: "Housefly",
        option4: "Tse-tse fly",
        answer: 2
    },
    {
        question: "Which of the following is not the mosquito-borne viral disease?",
        option1: "Dengue",
        option2: "Lassa fever",
        option3: "Yellow fever",
        option4: "Japanese B encephalitis",
        answer: 2
    },
    {
        question: "The mosquito-borne Zika virus outbreak was declared an epidemic mainly in which of the following regions?",
        option1: "Europe",
        option2: "China and India",
        option3: "Brazil and North America",
        option4: "South Africa and Ghana",
        answer: 3
    },
    {
        question: "Biodiversity",
        option1: "increases towards the equator",
        option2: "decreases towards the equator",
        option3: "remains same throughout the planet",
        option4: "has no effect on change in latitude",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 210

    {
        question: "The most important reason for decrease in biodiversity is",
        option1: "habitat pollution",
        option2: "introduction of exotic species",
        option3: "over-exploitation",
        option4: "habitat destruction",
        answer: 3
    },
    {
        question: "repared by International Union for Conservation of Nature and Natural Resources for endangered species is classified as",
        option1: "Brown List",
        option2: "White List",
        option3: "Black List",
        option4: "Red List",
        answer: 3
    },
    {
        question: "How many biosphere reserves are present in India?",
        option1: "41",
        option2: "34",
        option3: "14",
        option4: "43",
        answer: 1
    },
    {
        question: `Which is the correct option the Amazon rain forest? 
        I. In this rain forest there might be at least two million insects species waiting to be discovered and named. 
        II. This forest is known as lungs of the planet. 
        III. In this forest digging of mine is performed by dynamine. 
        IV. This forest are destroyed for the cultivation of soyabeans. V. This forest contains world famous Biodiversity`,
        option1: "i, ii, iv, v ",
        option2: "i, ii, iii, iv ",
        option3: "ii, iii, iv, v ",
        option4: "iii, v, iv",
        answer: 3
    },
    {
        question: "-1°C to 13°C annual variations in the intensity and duration of temperature and 50 to 250 cm annual variation in precipitation, account for the formation of major biome as",
        option1: "Tropical forest",
        option2: "Coniferous forest",
        option3: "Temperate forest",
        option4: "Grassland",
        answer: 2
    },
    {
        question: "Which one of the following is not observed in biodiversity hotspots?",
        option1: "Species richness",
        option2: "Endemism",
        option3: "Accelerated species loss",
        option4: "Lesser inter-specific competition",
        answer: 3
    },
    {
        question: "The percentage of forest cover recommended by the National Forest policy (1988) is",
        option1: "33% for plains and 67% for hills",
        option2: "37% for plains and 63% for hills",
        option3: "20% for plains and 70% for hills",
        option4: "23% for plains and 77% for hills",
        answer: 2
    },
    {
        question: "Select the correct statement about biodiversity",
        option1: "The desert areas of Rajasthan and Gujarat have a very high level of desert animal species as well as numerous rare animals",
        option2: "Large scale planting of BT cotton has no adverse effect on biodiversity",
        option3: "Western Ghats have a very high degree of species richness and endemism",
        option4: "Conservation of biodiversity in just a fad pursued by the developed countries",
        answer: 3
    },
    {
        question: "Biodiversity of a geographical region represents",
        option1: "Genetic diversity present in the dominant species of the region",
        option2: "Species endemic to the region",
        option3: "Endangered species found in the region",
        option4: "The diversity in the organisms living in the region",
        answer: 4
    },
    {
        question: "Global warming can be controlled by ",
        option1: "Reducing deforestation, cutting down use of fossil fuel",
        option2: "Reducing reforestation, increasing the use of fossil fuel",
        option3: "Increasing deforestation, slowing down the growth of human population",
        option4: "Increasing deforestation, reducing efficiency of energy usage",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 220

    {
        question: "Which one of the following is not used for ex situ plant conservation? ",
        option1: "Field gene banks",
        option2: "Seed banks",
        option3: "Shifting cultivation",
        option4: "Botanical Gardens",
        answer: 3
    },
    {
        question: "Which of the following represent maximum number of species among global biodiversity? ",
        option1: "Algae",
        option2: "Lichens",
        option3: "Fungi",
        option4: "Mosses and Ferns",
        answer: 3
    },
    {
        question: "The greatest problem of water conservation is to reduce the amount of",
        option1: "Precipitation",
        option2: "Runoff water",
        option3: "Groundwater",
        option4: "Evaporation",
        answer: 3
    },
    {
        question: "Which one of the following expanded forms of the followings acronyms is correct?",
        option1: "IUCN = International Union for Conservation of Nature and Natural Resources",
        option2: "IPCC = International Panel for Climate Change",
        option3: "UNEP = United Nations Environmental Policy",
        option4: "EPA = Environmental Pollution Agency",
        answer: 1
    },
    {
        question: "Sacred groves are especially useful in",
        option1: "Generating environmental awareness",
        option2: "Preventing soil erosion",
        option3: "Year-round flow of water in rivers",
        option4: "Conserving rare and threatened species",
        answer: 1
    },
    {
        question: "Which is the correct option?",
        option1: "There is chance in Natural selection in evolution process due to alpha biodiversity",
        option2: "There is chance in Natural selection in process of evolution due to genetic diversity",
        option3: "There is chance in Natural selection in process of evolution due to Ecosystem biodiversity",
        option4: "There is chance in Natural selection in process of due to bio community diversity",
        answer: 3
    },
    {
        question: "In a marine food chain, small fish eat plankton, big fish eat small fish, and sharks eat big fish. Which organism has the smallest population?",
        option1: "The sharks ",
        option2: "The small fish",
        option3: "The big fish ",
        option4: "The plankton",
        answer: 1
    },
    {
        question: "Which of the following statements best describes a food web?",
        option1: "Many individual organisms of the same species that live in the same space and that share resources",
        option2: "A black bear eats fruit and then spreads the fruit seeds through its excretions",
        option3: "A system that is made up of a community of organisms and their environment",
        option4: "All life is connected by the transfer of energy among organisms and their environment",
        answer: 4
    },
    {
        question: "Grass that gains energy from the sun is an example of a",
        option1: "Consumer",
        option2: "Decomposer",
        option3: "Parasite",
        option4: "Producer. ",
        answer: 4
    },
    {
        question: "Which of the following options is not incorporated as sustainable development parameters?",
        option1: "Gender disparity and diversity",
        option2: "Inter and intra-generational equity",
        option3: "Carrying capacity",
        option4: "None of the above",
        answer: 4
    },

    // =================================================------------------------------------------------------------------------ 230

    {
        question: "Mercury and lead are toxic elements that cause ________________ ",
        option1: "Noise pollution",
        option2: "Air pollution",
        option3: "Water pollution",
        option4: "Land contamination",
        answer: 4
    },
    {
        question: "In which year did the word 'sustainable development' come into existence?",
        option1: "1992",
        option2: "1978",
        option3: "1980",
        option4: "1987",
        answer: 3
    },
    {
        question: "Which of the following options is correct when we only accomplish two out of three pillars of sustainable development?",
        option1: "Economic + Environmental sustainability = Viable",
        option2: "Social + Environmental sustainability = Bearable",
        option3: "Social + Economic sustainability = Equitable",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "Sustainable energy",
        option1: "is clean",
        option2: "can be used over a long period of time",
        option3: "both (a) and (b)",
        option4: "none of the above",
        answer: 3
    },
    {
        question: "The United Nations Conference on Sustainable Development (UNCSD) is also known as",
        option1: "Rio 2010",
        option2: "Rio 2011",
        option3: "Rio 2012",
        option4: "Rio 2013",
        answer: 3
    },
    {
        question: "Which of the following statements is true about the Air Quality Index?",
        option1: "It indicates the colour of the air.",
        option2: "It predicts ozone levels in your area.",
        option3: "It determines the intensity of sound and sound pollution.",
        option4: "It estimates air pollution mainly sulphur content in the air.",
        answer: 2
    },
    {
        question: "What is the total percentage of nitrogen gas in the air?",
        option1: "12 per cent",
        option2: "21 per cent",
        option3: "78 per cent",
        option4: "87 per cent",
        answer: 3
    },
    {
        question: "Increased levels of air pollution results in _______",
        option1: "Soil erosion",
        option2: "Global warming",
        option3: "Respiratory problems",
        option4: "All of the above",
        answer: 3
    },
    {
        question: "Increased levels of air pollution results in _______.",
        option1: "Soil erosion",
        option2: "Global warming",
        option3: "Respiratory problems",
        option4: "All of the above",
        answer: 3
    },
    {
        question: "Smoke, fumes, ash, dust, nitric oxide and sulphur dioxide are the main sources of ________",
        option1: "Primary Pollutants",
        option2: "Secondary pollutants",
        option3: "Bio-Degradable Pollutants",
        option4: "None of the above",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 240

    {
        question: "DDT and Aluminium cans are examples of ________",
        option1: "Primary Pollutants",
        option2: "Secondary pollutants",
        option3: "Biodegradable Pollutants",
        option4: "Non-Biodegradable Pollutants",
        answer: 4
    },
    {
        question: "Which of the following diseases are caused by smog?",
        option1: "Rickets",
        option2: "Bronchitis",
        option3: "Breathing Problems",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "Select non-denitrifying bacteria",
        option1: "Pseudomonas aeruginosa",
        option2: "Thiobacillus",
        option3: "Thiobacillus denitrificans",
        option4: "Bacillus ramosus",
        answer: 4
    },
    {
        question: "dB is the abbreviation used for the quantitative expression of",
        option1: "Density of bacteria in a medium",
        option2: "A Particular Pollutant",
        option3: "Dominant Bacillus in a culture",
        option4: "A pesticide",
        answer: 2
    },
    {
        question: "Identify the mismatched pair",
        option1: "Tundra - Permafrost",
        option2: "Savanna - Acacia trees",
        option3: "Prairie - Epiphytes",
        option4: "Coniferous forest - Evergreen trees",
        answer: 3
    },
    {
        question: "All species of Lemur are endemic to which area?",
        option1: "Madagascar",
        option2: "Seychelles Island",
        option3: "Galapagos Island",
        option4: "New Caledonia",
        answer: 1
    },
    {
        question: "The ability of a population to increase under ideal environmental conditions is called",
        option1: "Natality",
        option2: "Carrying capacity",
        option3: "Biotic potential",
        option4: "Absolute natality",
        answer: 3
    },
    {
        question: "Lincoln index measures",
        option1: "Population mortality rate",
        option2: "Population natality rate",
        option3: "Population size",
        option4: "Population density",
        answer: 3
    },
    {
        question: "Which is not the characteristic of a population?",
        option1: "Natality",
        option2: "Mortality",
        option3: "Stratification",
        option4: "Sex ratio",
        answer: 3
    },
    {
        question: "The bottom area where production is less than respiration in a pond ecosystem is termed as",
        option1: "Profundal zone",
        option2: "Tidal zone",
        option3: "Benthic zone",
        option4: "Limnetic zone",
        answer: 1
    },

    // =================================================------------------------------------------------------------------------ 250

];

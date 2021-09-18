const initData = [
    {
        "username": "Lynnette_Fisher",
        "fullName": "Carr Gill",
        "email": "carrgill@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Listening to podcasts",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Sheri_Kirkland",
        "fullName": "Whitney Atkinson",
        "email": "whitneyatkinson@exospeed.com",
        "yearsOfExperience": 15,
        "interest": "Board/tabletop games",
        "workCategory": "self-employed"
    },
    {
        "username": "Preston_Watkins",
        "fullName": "Florine Freeman",
        "email": "florinefreeman@exospeed.com",
        "yearsOfExperience": 1,
        "interest": "Stock trading",
        "workCategory": "self-employed"
    },
    {
        "username": "Hughes_Dennis",
        "fullName": "Durham Mcintosh",
        "email": "durhammcintosh@exospeed.com",
        "yearsOfExperience": 5,
        "interest": "Crossword puzzles",
        "workCategory": "self-employed"
    },
    {
        "username": "Cathy_Bush",
        "fullName": "May Baxter",
        "email": "maybaxter@exospeed.com",
        "yearsOfExperience": 9,
        "interest": "Crossword puzzles",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Powell_Shields",
        "fullName": "Jill Farmer",
        "email": "jillfarmer@exospeed.com",
        "yearsOfExperience": 9,
        "interest": "Image editing",
        "workCategory": "unemployed"
    },
    {
        "username": "Cole_Rutledge",
        "fullName": "Gill Tate",
        "email": "gilltate@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Photography",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Janis_Cotton",
        "fullName": "Richard Knight",
        "email": "richardknight@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Chess",
        "workCategory": "self-employed"
    },
    {
        "username": "Kirkland_Holt",
        "fullName": "Ericka Atkins",
        "email": "erickaatkins@exospeed.com",
        "yearsOfExperience": 6,
        "interest": "Chess",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Sophie_Norton",
        "fullName": "Phillips Burch",
        "email": "phillipsburch@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Video game developing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Bradley_Barton",
        "fullName": "Rosetta Chang",
        "email": "rosettachang@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Book discussion clubs",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Frieda_Weber",
        "fullName": "Santiago Dillard",
        "email": "santiagodillard@exospeed.com",
        "yearsOfExperience": 4,
        "interest": "Board/tabletop games",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Fay_Barker",
        "fullName": "Mari Barron",
        "email": "maribarron@exospeed.com",
        "yearsOfExperience": 7,
        "interest": "Creative writing",
        "workCategory": "self-employed"
    },
    {
        "username": "Iris_Hunt",
        "fullName": "Odom Hendrix",
        "email": "odomhendrix@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Wikipedia editing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Charity_Hubbard",
        "fullName": "Ratliff Gonzalez",
        "email": "ratliffgonzalez@exospeed.com",
        "yearsOfExperience": 15,
        "interest": "Listening to podcasts",
        "workCategory": "Employed"
    },
    {
        "username": "Neal_Guthrie",
        "fullName": "Roberson Wiley",
        "email": "robersonwiley@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Photography",
        "workCategory": "self-employed"
    },
    {
        "username": "Noreen_Booker",
        "fullName": "Althea Kirk",
        "email": "altheakirk@exospeed.com",
        "yearsOfExperience": 3,
        "interest": "Filmmaking",
        "workCategory": "self-employed"
    },
    {
        "username": "Sheree_Randall",
        "fullName": "Vicki Arnold",
        "email": "vickiarnold@exospeed.com",
        "yearsOfExperience": 1,
        "interest": "Computer programming",
        "workCategory": "self-employed"
    },
    {
        "username": "Morales_Mueller",
        "fullName": "Josefina Ramirez",
        "email": "josefinaramirez@exospeed.com",
        "yearsOfExperience": 1,
        "interest": "Listening to podcasts",
        "workCategory": "self-employed"
    },
    {
        "username": "Price_Bailey",
        "fullName": "Dickson Mcgee",
        "email": "dicksonmcgee@exospeed.com",
        "yearsOfExperience": 9,
        "interest": "Graphic design",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Lorrie_Miles",
        "fullName": "Mcclain Bullock",
        "email": "mcclainbullock@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Photography",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Carpenter_Bauer",
        "fullName": "Guerrero Lawrence",
        "email": "guerrerolawrence@exospeed.com",
        "yearsOfExperience": 12,
        "interest": "Blogging",
        "workCategory": "Employed"
    },
    {
        "username": "Pollard_Fitzpatrick",
        "fullName": "Julie Good",
        "email": "juliegood@exospeed.com",
        "yearsOfExperience": 6,
        "interest": "Bullet journaling",
        "workCategory": "unemployed"
    },
    {
        "username": "Vance_Fuller",
        "fullName": "Karla Kennedy",
        "email": "karlakennedy@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Book collecting",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Kathrine_Obrien",
        "fullName": "Claudia Bentley",
        "email": "claudiabentley@exospeed.com",
        "yearsOfExperience": 10,
        "interest": "Book discussion clubs",
        "workCategory": "unemployed"
    },
    {
        "username": "Carmen_Benton",
        "fullName": "Priscilla Taylor",
        "email": "priscillataylor@exospeed.com",
        "yearsOfExperience": 5,
        "interest": "Bullet journaling",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Middleton_Burris",
        "fullName": "Burns Stein",
        "email": "burnsstein@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Image editing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Carol_Cervantes",
        "fullName": "Boyle Wilson",
        "email": "boylewilson@exospeed.com",
        "yearsOfExperience": 6,
        "interest": "Book collecting",
        "workCategory": "Employed"
    },
    {
        "username": "Dena_Hester",
        "fullName": "Frost Conrad",
        "email": "frostconrad@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Wikipedia editing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Hallie_Richard",
        "fullName": "Nielsen Simpson",
        "email": "nielsensimpson@exospeed.com",
        "yearsOfExperience": 12,
        "interest": "Filmmaking",
        "workCategory": "self-employed"
    },
    {
        "username": "Bryan_Levy",
        "fullName": "Carla Cantu",
        "email": "carlacantu@exospeed.com",
        "yearsOfExperience": 2,
        "interest": "Wikipedia editing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Robles_Cole",
        "fullName": "Humphrey Petty",
        "email": "humphreypetty@exospeed.com",
        "yearsOfExperience": 2,
        "interest": "Chess",
        "workCategory": "self-employed"
    },
    {
        "username": "Cross_Peck",
        "fullName": "Mcneil Sargent",
        "email": "mcneilsargent@exospeed.com",
        "yearsOfExperience": 13,
        "interest": "Board/tabletop games",
        "workCategory": "unemployed"
    },
    {
        "username": "Monica_Mccullough",
        "fullName": "Cook Herman",
        "email": "cookherman@exospeed.com",
        "yearsOfExperience": 2,
        "interest": "Wikipedia editing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Brady_Gamble",
        "fullName": "Nettie Hurst",
        "email": "nettiehurst@exospeed.com",
        "yearsOfExperience": 1,
        "interest": "Video game developing",
        "workCategory": "Employed"
    },
    {
        "username": "Farrell_Robertson",
        "fullName": "Hattie Cortez",
        "email": "hattiecortez@exospeed.com",
        "yearsOfExperience": 3,
        "interest": "Stock trading",
        "workCategory": "self-employed"
    },
    {
        "username": "Leah_Houston",
        "fullName": "Larsen Daniel",
        "email": "larsendaniel@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Image editing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Mendoza_Bowman",
        "fullName": "Turner Preston",
        "email": "turnerpreston@exospeed.com",
        "yearsOfExperience": 4,
        "interest": "Writing ",
        "workCategory": "unemployed"
    },
    {
        "username": "Koch_Avery",
        "fullName": "Mayra Fischer",
        "email": "mayrafischer@exospeed.com",
        "yearsOfExperience": 4,
        "interest": "Photography",
        "workCategory": "self-employed"
    },
    {
        "username": "Angelique_Shepherd",
        "fullName": "Rosemarie Brock",
        "email": "rosemariebrock@exospeed.com",
        "yearsOfExperience": 11,
        "interest": "Creative writing",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Bush_Mccray",
        "fullName": "Francesca Cox",
        "email": "francescacox@exospeed.com",
        "yearsOfExperience": 9,
        "interest": "Graphic design",
        "workCategory": "entrepreneur"
    },
    {
        "username": "Minnie_Ochoa",
        "fullName": "Bridgett Dawson",
        "email": "bridgettdawson@exospeed.com",
        "yearsOfExperience": 10,
        "interest": "Bullet journaling",
        "workCategory": "unemployed"
    },
    {
        "username": "Jenifer_Deleon",
        "fullName": "Juliet Wright",
        "email": "julietwright@exospeed.com",
        "yearsOfExperience": 12,
        "interest": "Creative writing",
        "workCategory": "self-employed"
    },
    {
        "username": "Summers_Moran",
        "fullName": "Lessie Keller",
        "email": "lessiekeller@exospeed.com",
        "yearsOfExperience": 12,
        "interest": "Blogging",
        "workCategory": "Employed"
    },
    {
        "username": "Marsh_Blankenship",
        "fullName": "Shari Ortiz",
        "email": "shariortiz@exospeed.com",
        "yearsOfExperience": 14,
        "interest": "Listening to podcasts",
        "workCategory": "self-employed"
    },
    {
        "username": "Tyler_Tran",
        "fullName": "Padilla Harper",
        "email": "padillaharper@exospeed.com",
        "yearsOfExperience": 15,
        "interest": "Blogging",
        "workCategory": "unemployed"
    }
]

export default initData;
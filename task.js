
const data1=require("./data1")
const yargs = require("yargs");

    yargs.command({
        command:"add",
        builde:{
            fname:{
                describe:"adding the first name",
                demandOption:true,
                type:"string"
            },
            lname:{
                describe:"adding the last name",
                demandOption:true,
                type:"string"
            },
            age:{
                describe:"adding the age",
                demandOption:true,
                type:"string"
            },
            city:{
                describe:"adding the city",
                demandOption:true,
                type:"string"
            },
            },
        
        
       
        handler:(x)=>{
            data1.oneperson(x.fname , x.lname, x.age, x.city)
        }
            
        

        
        })


         



    
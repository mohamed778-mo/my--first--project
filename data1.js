
    const fs = require("fs")
    const oneperson=(fname,lname,age,city)=>{

        const allData=loadData()

        allData.push({

            fname,
            lname,
            age,
            city
    })
         saveAllData(allData)



    }

    const loadData=()=>{
        try {
            const datajson=fs.readFileSync("data1.json").toString()
        return JSON.parse(datajson)
        } catch  {
            return []
        }


    }

    const saveAllData =(allData)=>{

        const saveAllDatajson=JSON.stringify(allData)
        fs.writeFileSync("data1.json",saveAllDatajson)
    }
    


    
person_obj.fname = 'Adel';
person_obj.lname = 'Ahmed';
person_obj.age = 40;
person_obj.city = 'Cairo';

const updated_json_data = JSON.stringify(person_obj);


fs.writeFileSync('updated_person.json', updated_json_data);
    
    
    module.exports={
        oneperson
    }
let main=[]
let arr1=[]
let arr2=[]
let arr3=[]
let arr4=[]

let q1=false
let q2=false
let q3=false
let q4=false
    function f(q,c,r){
     
      if(q=='E'){
        if(c==1 && q1==false){
          main.push(c)
          arr1.push(r)
          q1=true
        }
        else if(c==1 && q1==true){
          arr1.push(r)

        }
        if(c==2 && q2==false){
          main.push(c)
          arr2.push(r)
          q2=true
        }
        else if(c==2 && q2==true){
          arr2.push(r)

        }
        if(c==3 && q3==false){
          main.push(c)
          arr3.push(r)
          q3=true
        }
        else if(c==3 && q3==true){
          arr3.push(r)

        }
        if(c==4 && q4==false){
          main.push(c)
          arr4.push(r)
          q4=true
        }
        else if(c==4 && q4==true){
          arr4.push(r)

        }
      }
      else if (q=="D"){

       while(main[0]==1 && q1==true && main.length!==0) {
        let x= arr1.shift()

        console.log(main[0],x)

        if(arr1.length==0){
          q1=false
          main.shift()
        }


       }
       while(main[0]==2 && q2==true && main.length!==0){
       let x= arr2.shift()

        console.log(main[0],x)
        if(arr2.length==0){
          q2=false
          main.shift()
        }


       }
       while(main[0]==3 && q3==true && main.length!==0){
       let x= arr3.shift()

        console.log(main[0],x)
        if(arr3.length==0){
          q3=false
          main.shift()
        }


       }
       while(main[0]==4 && q4==true && main.length!==0){
       let x= arr4.shift()

        console.log(main[0],x)
        if(arr4.length==0){
          q4=false
          main.shift()
        }


       }



      }


    }
    
    function runProgram(input) {

        // Write code here

        input=input.trim().split("\n")
        n=+input[0]
        let line=1
        for(let i=0;i<n;i++){
          let [q,c,r]=input[line].trim().split(" ").map(String)
          line++
          f(q,c,r)
        }

        
       
      }
      if (process.env.USERNAME=== "mujta") {
        runProgram(`5
        E 1 1
        E 2 1
        E 1 2
        D
        D`);
      } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
          read += input;
        });
        process.stdin.on("end", function () {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
        });
        process.on("SIGINT", function () {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0) ;
        });
      }
const mainbtns = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const btns = data.data ;
//    console.log(btns);
      displaybtns (btns);
      
    }
    const displaybtns = btns => {
        // console.log(btns);

        const btn1 = document.getElementById('btn1')
        btns.forEach(category =>{
            console.log(category)
            const btnList = document.createElement('div');
            btnList.innerHTML = `
            <button>${category.category}</button>
             `
             btn1.appendChild(btnList)
        })

    }

mainbtns ();











// function headingButton(){
//     fetch('https://openapi.programming-hero.com/api/videos/categories')
//     .then(response => response.json())
//           .then(data => headingButtons2(data))
// }


//       function headingButtons2(data){
//         const btn1 = document.getElementById('btn1');
       
//             console.log(data.data[0].category)
    
//             const button1 = document.createElement('button');
//             button1.innerText = ('${data.data[0].category}');
//             btn1.appendChild(button1);
//             button1.style.backgroundColor= 'red';
//             button1.style.width = '80px'; 
//       }
    //     console.log(data.data[0].category)
        
    // const button1 = document.createElement('button');
    // button1.innerText = 'All';
    // btn1.appendChild(button1);
    // button1.style.backgroundColor= 'red';
    // button1.style.width = '80px';

        
    // };

    
    // const btn2 = document.getElementById('btn2');
    // const button2 = document.createElement('button');
    // button2.innerText = 'Music';
    // btn2.appendChild(button2);
    // button2.style.backgroundColor= 'blue';
    // button2.style.width = '80px';

    // const btns = document.getElementById('btn');
    // const button = document.createElement('button');
    // button.innerText = 'All';
    // btns.appendChild(button);
    // button.style.backgroundColor= 'red';
    // button.style.width = '80px';

    // const btns = document.getElementById('btns');
    // const button = document.createElement('button');
    // button.innerText = 'All';
    // btns.appendChild(button);
    // button.style.backgroundColor= 'red';
    // button.style.width = '80px';
    
       

      
        
       
            
        
       
       
            
      







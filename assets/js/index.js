const { ipcRenderer } = require('electron');


// Globally Working sound function

function sound (){
    return document.getElementById('bar-a').innerHTML=('<audio src="assets/Sounds/buttonclick.wav" autoplay type="mp3"></audio>');
  }

  document.getElementById('close').addEventListener('click', () => {
     let tclose = setInterval(tc,1000);
     function tc() {
         clearInterval(tclose);
         ipcRenderer.send('closed');
     }  
   
     });
document.getElementById('max').addEventListener('click', () => {
        ipcRenderer.send('max');
    });
 document.getElementById('min').addEventListener('click', () => {  
        ipcRenderer.send('min');
  }); 

  document.getElementById('max').addEventListener('click', () => {  
   sound();
}); 
document.getElementById('min').addEventListener('click', () => {  
  sound();
}); 
document.getElementById('close').addEventListener('click', () => {  
  sound();
}); 
document.getElementById('start').addEventListener('click', () => {  
   sound();
}); 
document.getElementById('register').addEventListener('click', () => {  
   sound();
}); 
document.getElementById('addclick').addEventListener('click', () => {  
  spund();
}); 
document.getElementById('go-back').addEventListener('click', () => {  
  sound();
}); 
document.getElementById('addButton').addEventListener('click', () => {  
   sound();
}); 

  document.getElementById('start').addEventListener('click', () => { 
    document.getElementById('con').style.display='none';
    // document.getElementById('start-screen').style.display='block';
    const userInput = document.getElementById('name');
    const displayText = document.getElementById('username');
        document.getElementById('start-screen').style.display='block';
        document.getElementById('register').addEventListener('click', () => {  
            if(userInput.value === ''){
               let alertwin = document.getElementById('winalert');
               alertwin.style.color="red";
               alertwin.innerHTML =("* Please Enter at least User name");
            }
            else{
                displayText.textContent = userInput.value; 
                document.getElementById('start-screen').style.display='none';
                document.getElementById('screen2').style.display='block';
            }
           
        });   
   
}); 



// Adding task section istart from here 
document.getElementById('addclick').addEventListener('click', () => {  
    sound()
    document.getElementById('add-task').style.display='block';
}); 

document.getElementById('addButton').addEventListener('click', () => {  
    sound();
    document.getElementById('add-task').style.display='none';
}); 


document.getElementById('go-back').addEventListener('click', () => {  
    sound()
    document.getElementById('add-task').style.display='none';
}); 

// Permanent Adding task section istart from here 

document.getElementById('perclick').addEventListener('click', () => { 
    sound();
    document.getElementById('permanent-task').style.display='block';
}); 

document.getElementById('per-addButton').addEventListener('click', () => {  
    sound();
    document.getElementById('permanent-task').style.display='none';
}); 


document.getElementById('per-go-back').addEventListener('click', () => {  
    sound();
    document.getElementById('permanent-task').style.display='none';
}); 

    



//  Storage system for add task


document.addEventListener('DOMContentLoaded', () => {
   
    const itemList = document.getElementById('itemList');
    const addButton = document.getElementById('addButton'); 
    const details = document.getElementById('details');      
    const inputField = document.getElementById('itemInput');
    const textArea = document.getElementById('userdes');
   

    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(item => addItemToList(item.inputText, item.textAreaText));

    addButton.addEventListener('click', () => {
        const inputText = inputField.value.trim();
        const textAreaText = textArea.value.trim();
        if (inputText) {
            addItemToList(inputText, textAreaText);
            items.push({ inputText, textAreaText });
            localStorage.setItem('items', JSON.stringify(items));
            inputField.value = '';
            textArea.value = '';
        }
    });

    function addItemToList(inputText, textAreaText) {
        const li = document.createElement('li');
        li.textContent = inputText;
        li.dataset.textArea = textAreaText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', (event) => {
            sound();
            event.stopPropagation();
            itemList.removeChild(li);
            const index = items.findIndex(item => item.inputText === inputText && item.textAreaText === textAreaText);
            if (index > -1) {
                items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(items));
            }
            if (details.textContent === `Details: ${textAreaText}`) {
                details.textContent ='Select an item to see additional details here.';
            }
        });
        li.addEventListener('click', () => {    
            sound();
            details.innerHTML =(`<h2>Tittel :</h2> ${inputText} <h4>Description:</h4> ${textAreaText}`);
        });
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    }
});

// date and time settings for Add task
document.getElementById('addButton').addEventListener('click', ()=>{
    var timeids = [];
    var addusertime = document.getElementById('add-itemtime').value;
    var adduserdate = document.getElementById('add-itemdate').value;
    var addtittel = document.getElementById('itemInput').value;
    var des = document.getElementById("userdes").value;
    var datetimestring = adduserdate + " " + addusertime;
    var sheduletime = new Date(datetimestring);
    var currentDateTime = new Date();
    var timediffrence = sheduletime - currentDateTime;
    if (timediffrence > 0) {
        var timeoutid = setTimeout(function () {
            const not = new Notification('Todo App',{
                body: "Please Complete " + addtittel + " " + des,
                icon: 'assets/images/logo.png',
            })
    }, timediffrence);
        timeids.push(timeoutid);
    } else {
        alert("Seduled time is in the past");
    }
})





// Storage system for permanent tasks 
document.getElementById('perclick').addEventListener('click', () => {
   
    const itemList = document.getElementById('itemList');
    const peraddButton = document.getElementById('per-addButton'); 
    const details = document.getElementById('details');      
    const inputField = document.getElementById('peritemInput');
    const textArea = document.getElementById('peruserdes');
   

    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(item => addItemToList(item.inputText, item.textAreaText));

    peraddButton.addEventListener('click', () => {
        const inputText = inputField.value.trim();
        const textAreaText = textArea.value.trim();
        if (inputText) {
            addItemToList(inputText, textAreaText);
            items.push({ inputText, textAreaText });
            localStorage.setItem('items', JSON.stringify(items));
            inputField.value = '';
            textArea.value = '';
        }
    });

    function addItemToList(inputText, textAreaText) {
        const li = document.createElement('li');
        li.textContent = inputText;
        li.dataset.textArea = textAreaText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', (event) => {
            sound();
            event.stopPropagation();
            itemList.removeChild(li);
            const index = items.findIndex(item => item.inputText === inputText && item.textAreaText === textAreaText);
            if (index > -1) {
                items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(items));
            }
            if (details.textContent === `Details: ${textAreaText}`) {
                details.textContent ='Select an item to see additional details here.';
            }
        });
        li.addEventListener('click', () => {    
            sound();
            details.innerHTML =(`<h2>Tittel :</h2> ${inputText} <h4>Description:</h4> ${textAreaText}`);
        });
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    }
});


// Per manent No tification 
document.getElementById('per-addButton').addEventListener('click', ()=>{
    var timeids = [];
    var addusertime = document.getElementById('peritemtime').value;
    var addtittel = document.getElementById('peritemInput').value;
    var des = document.getElementById("peruserdes").value;
    var now = new Date();
    var mon = now.getMonth();
    var month = mon + 1;
    var no2 = now.getFullYear()+"-" + month + "-" + now.getDate();
    var datetimestring = no2 + " " + addusertime;
    var sheduletime = new Date(datetimestring);
    var currentDateTime = new Date();
    timediffrence = sheduletime - currentDateTime;
    if (timediffrence > 0) {
        var timeoutid = setTimeout(function () {
            const not = new Notification('Todo App',{
                body: "Please Complete " + addtittel + " " + des,
                icon: 'assets/images/logo.png',
            })
    }, timediffrence);
        timeids.push(timeoutid);
    } else {
        alert("Seduled time is in the past");
    }
})
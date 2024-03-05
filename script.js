
        const item = document.querySelector("#items"); 
        const date = document.querySelector("#date"); 
        

        const addItem = () => { 
           
            if(item.value==="" ||date.value===""){
                alert("Please enter both detsils")
            }else{
                const addnewItems = document.querySelector("#todo-Item"); 
            let itemRow = document.createElement("div"); 
            itemRow.setAttribute("class", "itemrow"); 
            addnewItems.appendChild(itemRow); 

            let newItems = document.createElement("div"); 
            newItems.setAttribute("class", "newItem"); 
            itemRow.appendChild(newItems); 

            let newdate = document.createElement("div"); 
            newdate.setAttribute("class", "newdate"); 
            itemRow.appendChild(newdate); 

            newItems.innerText = item.value; 
            newdate.innerText =date.value; 

            let btn = document.createElement("button");
            btn.innerText = "Delete"; 
            btn.addEventListener("click", function() {
            addnewItems.removeChild(itemRow); 
    
        });
            itemRow.appendChild(btn);
            }
             
        }
    
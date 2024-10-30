document.addEventListener('DOMContentLoaded',()=>{
    const inp=document.getElementById('inp');
    const abtn=document.getElementById('abtn');
    const em=document.getElementById('em')
    const ul=document.getElementById('list')

    abtn.addEventListener('click',()=>{
        if(inp.value === ""){
            em.textContent="Enter Some task...!"
        }
        else{
            em.textContent=""
            
            const li=document.createElement('li')
            li.innerHTML=`<button class="com">Complete</button><h2>${inp.value}</h2><button class="del">Delete</button>`

            ul.appendChild(li);

            inp.value="";
        }

        const del=document.querySelectorAll('button.del')
        
        del.forEach(item=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode;
                parent.remove();
            })
        })


        const com=document.querySelectorAll('button.com')

        com.forEach(item=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode;
                parent.classList.add('co')
            })
        })
        
    })

})
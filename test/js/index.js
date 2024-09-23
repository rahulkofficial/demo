document.addEventListener('DOMContentLoaded',()=>{
    list=document.getElementById('list')
    btn=document.getElementById('btn')

    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        inp=document.getElementById('inp');
        var text=inp.value;
        if(text==""){
            message="Enter a task"
            para=document.getElementById('message')
            para.textContent=message
        }
        else{
            para=document.getElementById('message')
            para.textContent=""
            li=document.createElement('li');
            li.innerHTML=`<button class="cmt">Complete</button>${text}<button class="dlt">Delete</button>`
            list.appendChild(li);
            inp.value=""
        }

        dlt=document.querySelectorAll('button.dlt')

        dlt.forEach(item => {
            item.addEventListener('click',()=>{            
                const parent = item.parentNode;
                parent.remove();
            })
        });

        cmpt=document.querySelectorAll('button.cmt')
        cmpt.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent = item.parentNode;
                parent.classList.add('complete')
            })
        })
    })
    

})






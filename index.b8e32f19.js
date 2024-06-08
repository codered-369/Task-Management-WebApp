document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("taskForm"),t=document.getElementById("taskList"),n=()=>{let e=[];t.querySelectorAll(".column").forEach(t=>{let n=t.querySelector(".card-header-title").textContent,d=t.querySelector(".content p:nth-child(1)").textContent,l=t.querySelector(".content p:nth-child(2)").textContent.replace("Due Date: ","");e.push({title:n,description:d,dueDate:l})}),localStorage.setItem("tasks",JSON.stringify(e))},d=e=>{let d=document.createElement("div");d.classList.add("column","is-one-third"),d.innerHTML=`
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">${e.title}</p>
                    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>${e.description}</p>
                        <p><strong>Due Date:</strong> ${e.dueDate}</p>
                    </div>
                    <button class="edit-btn"><i class="fas fa-edit"></i> Edit</button>
                </div>
            </div>
        `,t.appendChild(d),d.querySelector(".delete-btn").addEventListener("click",()=>{d.remove(),n()}),d.querySelector(".edit-btn").addEventListener("click",()=>{document.getElementById("title").value=e.title,document.getElementById("description").value=e.description,document.getElementById("dueDate").value=e.dueDate,d.remove(),n()})};e.addEventListener("submit",t=>{t.preventDefault();let l=document.getElementById("title").value,a=document.getElementById("description").value,c=document.getElementById("dueDate").value;if(!l||!a||!c){alert("Please fill in all fields.");return}d({title:l,description:a,dueDate:c}),n(),e.reset()}),(JSON.parse(localStorage.getItem("tasks"))||[]).forEach(e=>d(e))});
//# sourceMappingURL=index.b8e32f19.js.map

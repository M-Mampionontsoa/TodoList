function gererFormulaire()
{
    const newList = document.getElementById("ajout").value;
    const nouveau = document.getElementById("todolis");
    nouveau.innerHTML += `<div>
                            <div class="form-check d-flex align-items-center">
                                <input class="form-check-input me-3 task1" type="checkbox" id="task-${Date.now()}">
                                <label class="form-check-label" for="task-${Date.now()}">${newList}</label>
                            </div>
                            <button class="btn-trash">
                                <i class="fas fa-trash text-danger"></i>
                            </button>
                         </div>`;

    document.getElementById("ajout").value = ""; 

    gererTrash(); 
}

function gererTacheEffectue()
{
    const btn = document.getElementById("btnF");
    btn.addEventListener("click", (e) => 
    {
        const inputss = document.querySelectorAll(".task1"); 
        inputss.forEach((checkbox) =>
        {
            if (!checkbox.checked)
            {
                const taskItem = checkbox.closest('#todolis > div'); 
                if (taskItem) 
                {
                    taskItem.remove();
                }
            }
        });
    });
}

function gererTacheAFaire()
{
    const btn = document.getElementById("btnA");
    btn.addEventListener("click", (e) => 
    {
        const inputss = document.querySelectorAll(".task1"); 
        inputss.forEach((checkbox) =>
        {
            if (checkbox.checked)
            {
                const taskItem = checkbox.closest('#todolis > div'); 
                if (taskItem) 
                {
                    taskItem.remove();
                }
            }
        });
    });
}

function gererTrash()
{
    const btns = document.querySelectorAll(".btn-trash");
    console.log(btns.length); 

    function handleTrashClick(e) {
        const removing = e.currentTarget.parentElement;
        if (removing)
        {
            removing.remove();
        }
    }

    btns.forEach((btn) => {
        btn.removeEventListener("click", handleTrashClick); 
        btn.addEventListener("click", handleTrashClick); 
    });
}

function gererToutesTaches()
{
    const btn = document.getElementById("btnT");
    btn.addEventListener("click", (e) => 
    {
        const todolis = document.getElementById("todolis");
        todolis.innerHTML = `
            <div>
                <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-3 task1" type="checkbox" id="task1">
                    <label class="form-check-label" for="task1">Étudier le Routage statique et dynamique</label>
                </div>
                <button class="btn-trash">
                    <i class="fas fa-trash text-danger"></i>
                </button>
            </div>
            <div>
                <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-3 task1" type="checkbox" id="task2">
                    <label class="form-check-label" for="task2">Maitriser le JavaScript</label>
                </div>
                <button class="btn-trash">
                    <i class="fas fa-trash text-danger"></i>
                </button>
            </div>
            <div>
                <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-3 task1" type="checkbox" id="task3">
                    <label class="form-check-label" for="task3">TD Probabilité</label>
                </div>
                <button class="btn-trash">
                    <i class="fas fa-trash text-danger"></i>
                </button>
            </div>
            <div>
                <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-3 task1" type="checkbox" id="task4">
                    <label class="form-check-label" for="task4">Lier Mysql et libpam</label>
                </div>
                <button class="btn-trash">
                    <i class="fas fa-trash text-danger"></i>
                </button>
            </div>`;
        gererTrash(); 
    });
}

const listeners = document.querySelector("form");
listeners.addEventListener("submit", (e) => 
{
    e.preventDefault();
    gererFormulaire();
});

gererTacheEffectue();
gererTacheAFaire();
gererTrash();
gererToutesTaches(); 
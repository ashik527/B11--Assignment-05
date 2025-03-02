document.addEventListener('DOMContentLoaded', function(){
    let taskCount = 6;
    const taskElement = document.querySelector('.update-task-number');
    const buttons = document.querySelectorAll('.complete');
    const activityLog = document.getElementById('activity-log');
    const clearHistoryBtn = document.getElementById('history-btn');

    // Get Updated time
    function getTime(){
        const now = new Date();
        return now.toLocaleTimeString('en-US',{
            hour: '2-digit',minute: '2-digit',second: '2-digit',hour12 : true
        })
    }

    // Mark Complete
    buttons.forEach((button)=>{
        button.addEventListener('click', function(){
            if(!button.disabled){
                alert("Board Updated Successfully")
                button.classList.add('opacity-15','pointer-events-none');
                taskCount--;
                taskElement.textContent = taskCount;

                // add log entry to activity log
                const logHistory = document.createElement('p');
                logHistory.textContent = `Task "${button.dataset.taskName}" completed at ${getTime()}`;
                logHistory.classList.add("font-bold","mb-4");
                activityLog.appendChild(logHistory);

                // clear history and reset buttons
                clearHistoryBtn.addEventListener('click', function (){
                    activityLog.innerHTML = " ";
                    taskElement.textContent = taskCount;

                    
                })
            }
        })
    })
})
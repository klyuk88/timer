   //Timer
function timer(d,h,m,s,id) {
    
    let deadline = d;

    function getTimeRemining(endtime) {
        let t = Date.parse(endtime) - new Date(),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));
 
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }
 
 
    function setClock(id,endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(h),
            minutes = timer.querySelector(m),
            seconds = timer.querySelector(s),
            timeInterval = setInterval(updateClock, 1000);
 
 
        function updateClock() {
            let t = getTimeRemining(endtime);
            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            } else {
                for (const key in t) {
                    t[key] = '' + t[key];
                    if (t[key].length == 1) {
                        t[key] = '0' + t[key];
                    }
                   
                }
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }
            
        }
 
        
    }
 
    setClock(id,deadline);

    
}

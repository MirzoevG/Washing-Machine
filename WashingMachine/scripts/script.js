document.body.querySelector('.washingMachine_panel_buttonStart').addEventListener('click', ()=>{
    if(document.body.querySelector('.washingMachine_hatch_box').classList.contains('washingMachine_hatch--turn_on')){
        console.log(new Error('Washing machine is working!'));
        return;
    }
    document.body.querySelector('.display_text').classList.remove('display_text--ready');
    document.body.querySelector('.washingMachine_hatch_box').classList.add('washingMachine_hatch--turn_on');
    document.body.querySelector('.display_text').classList.add('display_text--start');

    document.body.querySelector('.washingMachine').classList.add('washingMachine--turn_on');
    setTimeout(()=>{
        document.body.querySelector('.washingMachine_hatch_box').classList.remove('washingMachine_hatch--turn_on', 'display_text--start');
        document.body.querySelector('.washingMachine').classList.remove('washingMachine--turn_on');
        document.body.querySelector('.display_text').classList.add('display_text--ready');
        console.log('Пора отключать');
    }, 4000);
});

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        alert('click on the button!');
    }, 100);
})


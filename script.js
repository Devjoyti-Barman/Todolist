let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inpNewTasks=$('#inpNewTask')
let btnSort=$('#btnSort')
let btnCleanUp=$('#btnCleanUp')


function addItem(){


  let listItem=$('<li>',{
    'class':'list-group-item',
    text:inpNewTasks.val()
  })
  listItem.click( ()=>{
      listItem.toggleClass('done')
  })

  ulTasks.append(listItem)
  inpNewTasks.val('')
    
}

inpNewTasks.keypress( (e)=>{
       if(e.which==13)addItem()
})

btnAdd.click( ()=>{      
    addItem()
})

btnClear.click( ()=>{
  inpNewTasks.val('')
     
})

function clearDone(){
   $('#ulTasks .done').remove()
}

btnCleanUp.click(clearDone)

//appendTo() is a jquery function which is append in the last elements
function sortTasks(){
       $('#ulTasks .done').appendTo(ulTasks)
}
btnSort.click(sortTasks)

function toggleDoneResetBtn(enabled){
     console.log(enabled)
  if(enabled) btnClear.prop('disabled',false)
  else btnClear.prop('disabled',true)

}

inpNewTasks.on('input',()=>{
    toggleDoneResetBtn(inpNewTasks.val() !='')
})

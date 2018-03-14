/**
 * Created by ubuntu on 3/13/18.
 */
var allowDrop=event=>{
    event.preventDefault();
};
var drag=event=>{
    event.dataTransfer.setData('text',event.target.id)
};
var drop=event=>{
    event.preventDefault();
    var data=event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
};
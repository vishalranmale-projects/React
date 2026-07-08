function onSubmit(event){
    event.preventDefault()
    console.log("Form Was Submitted Sucessfully!")
}
export default  function form(){
    return(<form onSubmit={onSubmit} action={"https://www.youtube.com/"}>
        <input placeholder="Enter  Something!"></input>
        <button >Submit</button>
    </form>)
}
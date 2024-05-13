const  NavigationBar= (props) => {
    return (  
        <>
            <nav className="bg-warning container-fluid p2">
                <h3>My Website List</h3>
            </nav>
            <img src={props.img} className="w-100" alt="" srcset=""/>
        </>
    );
}
 
export default NavigationBar;
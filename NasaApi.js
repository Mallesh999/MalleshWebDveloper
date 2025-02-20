import {useEffect, useState} from "react";
function NasaApi(){

     const[Mars,setMars]=useState()
     useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data =>{
            setMars(data);
        })
        
     },[])

    return(
        <div className="container mt-5">
            <table className="table table-hover table-bordered border-danger text-center">
                <thead>
                    <tr>
                        <th>photos_id</th>
                        <th>camers_id</th>
                        <th>camera_name</th>
                        <th>Full_Name</th>
                        <th>Rover_Id</th>
                        <th>Rover_Name</th>
                        <th>launch_Date</th>
                        <th>landing_Date</th>
                        <th>mars_Image</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            Mars && Mars.photos.map(items =>
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.camera.id}</td>
                                    <td>{items.camera.name}</td>
                                    <td>{items.camera.full_name}</td>
                                    <td>{items.rover.id}</td>
                                    <td>{items.rover.name}</td>
                                    <td>{items.rover.launch_date}</td>
                                    <td>{items.rover.landing_date}</td>
                                    <td>
                                        <img src={items.img_src} width={100} height={100}/>
                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )

}
export default NasaApi;
import { useSelector } from "react-redux";

const Dashboard = () => {
 
  const data  = useSelector((state=> state.api.datas));

  return (
    <div>
      <p>TodoList</p>
      {
        data.map((item, index)=> {
          return ( 
            <>
            <li key={index}>{item}</li>
            <button>X</button>
            </>
          )
        })
      }

    </div>
  );
};

export default Dashboard;

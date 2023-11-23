export default function MyFirst() {
    const x = 10;
    const person ={
        name: "aymen",
        surname:"graiet"
    }
    const elemStyle = {
        backgroundColor: "red",
        fontSize: "30px",
        fontWeight: "bold",
        color:"black"
       
    }
  return (
    <div>
          <h1 style={elemStyle}>hello world{x}</h1>
          <h2>hello AGAIN  {person.name}</h2>
          
    </div>

  )
};

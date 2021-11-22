export default function Dashboard(props) {
  const handleClick= () => { 
    console.log(props.fetchList)
    props.fetchList()
  }

  return (

    <div>
      dashboard
      <button onClick={handleClick}>Import</button>
    </div>
  )
}
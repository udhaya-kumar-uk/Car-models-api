const container=document.getElementById("container")
            const search=document.getElementById("search")
        let models=[]
        const url="https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos"
        
        async function fetchdata(){
        const responce=await fetch (url)
        const data=await responce.json()
        models=(data.modelos)
        render(data.modelos)
        }
        fetchdata()
        console.log(models)
        function render(data=[]){
        let car=[]
        for (let i=0;i<=data.length;i++){
        car.push(createcard(data[i]))
        }
        container.innerHTML=""
        container.append(...car)
        // console.log(car)
        
        }

       function handle(target){
       const value=target.value
       console.log(value)
      // console.log(models)
       let searchmatch =models.filter((e,i)=>{
       // console.log(e.nome.toLowerCase())
        return e.nome.toLowerCase().includes(value)
    
     
       })
        console.log(searchmatch)
       render(searchmatch)
       
       }
        function createcard(data={}){
        const card=document.createElement("div")
        card.setAttribute("class","card")
        const title=document.createElement("p")
        const sub=document.createElement("p")
        const{nome="", codigo=""}=data
        title.innerText="Car Name:"+nome
        sub.innerText="Car Code Number:"+codigo
        card.append(title,sub)
        return card
        }
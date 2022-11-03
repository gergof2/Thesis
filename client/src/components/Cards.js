import React, {useState, useEffect} from 'react';
import Card from './Card';
import { 
    ButtonGroup,
    StyledLabel 
} from './Styles/Styles';
import {
    StyledButton, 
} from './../components/Styles/ButtonStyle';

function Cards(){
    const [items, setItems] = useState([]);
    const eng = [];
    const hun = [];
    const [huns, setHuns] = useState([]);
    const [engs, setEngs] = useState([]);
    const [points, setPoints] = useState(0);
    const [done, setDone] = useState(false);
    const [prev, setPrev] = useState(-1);
    const [minus, setMinus] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/words/getwords", {
            method: "POST",
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
            }
        }).catch(err => {return;})
        .then(async res => { 
            await getResJson(res);
            
        })
    }, []);

    async function getResJson(res){
        return res.json().then(async json => {  
            setItems([
                { id: 1, value: json[0].english, stat: ""},
                { id: 1, value: json[0].hungarian, stat: ""},
                { id: 2, value: json[1].english, stat: ""},
                { id: 2, value: json[1].hungarian, stat: ""},
                { id: 3, value: json[2].english, stat: ""},
                { id: 3, value: json[2].hungarian, stat: ""},
                { id: 4, value: json[3].english, stat: ""},
                { id: 4, value: json[3].hungarian, stat: ""},
                { id: 5, value: json[4].english, stat: ""},
                { id: 5, value: json[4].hungarian, stat: ""},
                { id: 6, value: json[5].english, stat: ""},
                { id: 6, value: json[5].hungarian, stat: ""},
                { id: 7, value: json[6].english, stat: ""},
                { id: 7, value: json[6].hungarian, stat: ""},
                { id: 8, value: json[7].english, stat: ""},
                { id: 8, value: json[7].hungarian, stat: ""},
                { id: 9, value: json[8].english, stat: ""},
                { id: 9, value: json[8].hungarian, stat: ""},
                { id: 10, value: json[9].english, stat: ""},
                { id: 10, value: json[9].hungarian, stat: ""}
            ].sort(() => Math.random() - 0.5));
                             
            await json.forEach((word) => {
                eng.push(word.english);
            })
            setEngs(eng);
            await json.forEach((word) => {
                hun.push(word.hungarian);
            }) 
            setHuns(hun);
        });
    }

    function check(current){
        if(items[current].stat != "active"){
            if(items[current].id == items[prev].id){
                items[current].stat = "correct";
                items[prev].stat = "correct";
                setItems([...items])
                setPrev(-1);
            }else{
                items[current].stat = "wrong";
                items[prev].stat = "wrong";
                setMinus(minus+0.5)
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = "";
                    items[prev].stat = "";
                    setItems([...items])
                    setPrev(-1);               
                }, 1000)
            }
        }
        else{
            setItems([...items])
                setTimeout(() => {
                    items[current].stat = "";
                    items[prev].stat = "";
                    setItems([...items])
                    setPrev(-1);               
                }, 1000)
        }
        
    }

    const mode = "me";

    function postTest(engwords, hunwords, score, mode){
        const vals2 = {engwords, hunwords, score, mode}
        fetch("http://localhost:5000/words/posttest", {
            method: "POST",
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vals2),
        }).catch(err => {return;})
    }

    function addScore(score){
        const vals = {score};
        fetch("http://localhost:5000/user/score", {
                method: "POST",
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vals),
            }).catch(err => {return;})
    }

    useEffect(() => {
        let count = 0;
        items.map((element, i) => {
            if(element.stat === "correct")
            count++;           
        });
        if(count === 20){
            postTest(engs, huns, (count - minus < 0 ? 0 : count-minus), mode); 
            if(count - minus > 0){                
                addScore(count-minus);                             
            }    
            setPoints(count-minus);
            setDone(true);           
        }
    }, [prev])

    function handleClick(id){
        if(items[id].stat === "correct"){
            handleClick2()
        }
        else if(prev === -1){
            items[id].stat = "active";
            setItems([...items])
            setPrev(id);
        }else{
            check(id)
        }
    }


    function handleClick2(id){}

    function refreshPage() {
        window.location.reload(false);
      }

    function ListCards(){
        
    }
    
    return (
        <div>
            <div className='container'>
                {items.map((item, index) => (               
                    <Card key={index} item={item} id={index} handleClick={!done ? handleClick : handleClick2}/>
                ))}           
            </div> 
            {!done ? (
                <ButtonGroup>
                    <StyledButton to="/tests">Vissza a tesztekhez</StyledButton>
                </ButtonGroup>
            ) : (
            <div>
                <StyledLabel>Elért pontszámod: {points}</StyledLabel><br/>
                <ButtonGroup>
                    <StyledButton to="/tests">Vissza</StyledButton>
                    <StyledButton onClick={refreshPage}>Újra</StyledButton>
                </ButtonGroup>
            </div>
    
        )}
        </div>
         
                   
    )
}

export default Cards;
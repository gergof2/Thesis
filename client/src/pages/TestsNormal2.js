import {
    StyledTitle,    
    ButtonGroup,
    StyledFormArea,
    StyledLabel,
    color,
} from './../components/Styles/Styles';
import {
    TableTd, 
    Table,
} from './../components/Styles/TableStyles';
import {
    TestTextInput
} from './../components/Styles/InputStyle';
import {Formik, Form} from 'formik';
import {
    StyledButton,
    StyledFormButton, 
} from './../components/Styles/ButtonStyle';

import React, { useContext, useEffect, useState} from 'react';

import {AccountContext} from  '../auth/AccountContext';

const TestsNormal2 = () => {
    const {setUser} = useContext(AccountContext)
    const [answer0, setAnswer0] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [answer8, setAnswer8] = useState('');
    const [answer9, setAnswer9] = useState('');
    const [newanswers, setNews] = useState([]);
    const [huns, setHuns] = useState([]);
    const [engs, setEngs] = useState([]);
    const engWords = [];
    const hunWords = [];
    const answers = [];

    async function getResJson(res){
        return res.json().then(async json => { 

            await json.forEach((eng, i) => {
                engWords.push(json[i].english);
            })
            setEngs(engWords);
            await json.forEach((hun, i) => {
                hunWords.push(json[i].hungarian);
            })    
            setHuns(hunWords);
           
            

        })};
    

    useEffect(() => {
            fetch("http://localhost:5000/words/getwords", {
                method: "GET",
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                }
            }).catch(err => {return;})
            .then(async res => { 
                await getResJson(res);
                
            })
        }, []);

    function ListHunWords(){
        return huns.map((element, index) => <tr  key={index}><TableTd><StyledLabel>{element}</StyledLabel></TableTd></tr>)
    }

    function ListAnswers(){
        return newanswers.map((element, index) =>
            <tr  key={index}>
                <TableTd>
                    <StyledLabel style={{color: element[0] === "X" ? "red" : "green"}}>
                    {element[0] === "X" ? element.split("X ")[1] : element}
                    </StyledLabel>
                </TableTd>
            </tr>)
    }

    let getstatus = '';

    async function getResJson2(res){
        return res.json().then(json => {
            getstatus = json.message;                                   
        })};

    function PostScore(){
        let score = 0;
        let engwords = "";
        let hunwords = "";
        
        answers.push(answer0, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9);
        engs.map(async (element, index) => {
            if(element === answers[index]){
                score += 1;
                engwords += answers[index];
                hunwords += huns[index];
                console.log(huns[index] + " " + hunwords)
            }
            else{
                answers[index] = "X " + element;
                engwords += answers[index];
                hunwords += huns[index];
            }
            setNews(answers);
            
        }) 

        const vals = {score}
              
        fetch("http://localhost:5000/user/score", {
                method: "POST",
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vals),
            }).catch(err => {return;})
            .then(async res => { 
                await getResJson2(res);
                postTest(answers, huns, score, mode);
            })

    }
    
    async function getResJson3(res){
        return res.json().then(json => {
            getstatus2 = json.data;                                   
        })};

    let getstatus2 = '';
    const mode = "ma";

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
        .then(async res => { 
            await getResJson3(res);
        })
    }

    function refreshPage() {
        window.location.reload(false);
      }
      
    return (
        
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
            </div>

            <StyledFormArea bg={color.dark2}>
                <Formik
                initialValues={{
                    answer0: "",
                    answer1: "",
                    answer2: "",
                    answer3: "",
                    answer4: "",
                    answer5: "",
                    answer6: "",
                    answer7: "",
                    answer8: "",
                    answer9: "",
                }}
                onSubmit={PostScore}
                >

                    {({isSubmitting}) => (<Form>
                    <StyledTitle size={40}>
                        Normál magyar-angol
                    </StyledTitle>
                    <p>Írd be az magyar szó/kifejezés angol megfelelőjét</p>
                    <div style={{display: 'flex', flexDirection: 'row', width: 500, height: 600}}>
                        <Table style={{width: '49%', flex: 1}}>
                            <tbody>
                                <ListHunWords/>
                            </tbody>
                        </Table> 
                        <Table style={{width: '49%', flex: 1}}>
                            
                                {!isSubmitting ? (
                                    <tbody>
                                        <tr><TableTd><TestTextInput name="answer0" type="text" value={!isSubmitting ? answer0 : newanswers[0]} onChange={e => setAnswer0(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer1" type="text" value={!isSubmitting ? answer1 : newanswers[1]} onChange={e => setAnswer1(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer2" type="text" value={!isSubmitting ? answer2 : newanswers[2]} onChange={e => setAnswer2(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer3" type="text" value={!isSubmitting ? answer3 : newanswers[3]} onChange={e => setAnswer3(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer4" type="text" value={!isSubmitting ? answer4 : newanswers[4]} onChange={e => setAnswer4(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer5" type="text" value={!isSubmitting ? answer5 : newanswers[5]} onChange={e => setAnswer5(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer6" type="text" value={!isSubmitting ? answer6 : newanswers[6]} onChange={e => setAnswer6(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer7" type="text" value={!isSubmitting ? answer7 : newanswers[7]} onChange={e => setAnswer7(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer8" type="text" value={!isSubmitting ? answer8 : newanswers[8]} onChange={e => setAnswer8(e.target.value)}/></TableTd></tr>
                                        <tr><TableTd><TestTextInput name="answer9" type="text" value={!isSubmitting ? answer9 : newanswers[9]} onChange={e => setAnswer9(e.target.value)}/></TableTd></tr>
                                     </tbody>
                                ) : (
                                    <tbody>
                                         <ListAnswers/>
                                    </tbody>
                                       
                                )}                                  
                            
                        </Table> 
                    </div>
                    <ButtonGroup>
                        {!isSubmitting ? (
                            <div>
                            <ButtonGroup>
                                <StyledFormButton type="submit">Befejez</StyledFormButton>
                                <StyledButton to="/tests"> Vissza </StyledButton>
                            </ButtonGroup>
                            </div>
                        ) : (
                            <div>
                            <ButtonGroup>
                                <StyledButton to="/tests"> Vissza </StyledButton>
                                <StyledButton onClick={refreshPage}> Újra</StyledButton>
                            </ButtonGroup>
                            </div>
                        )}
                    </ButtonGroup>
                </Form>)}</Formik>
            </StyledFormArea>
        </div>
    );
}

export default TestsNormal2;
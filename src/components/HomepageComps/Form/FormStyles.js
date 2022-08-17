import styled from "styled-components";

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

</style>

export const FormMaster = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
border-radius: 0.25rem; 

`
export const FormCol = styled.div`
display: flex;
flex-direction: column;

margin: 3rem;
border-radius: 0.25rem;
box-shadow: 0 7px 13px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const FormBox = styled.div`
background-color: #E6BEAE;
padding: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
border-radius: 0.25rem;

`
export const FormButton = styled.button`
width: 14vw;
height: 4vh;
border: none;
background-color: #333333;
color: white;
font-size: 1.5rem;
font-family: 'Amatic';
margin: 1rem;
&:hover{
background-color: white;
color: #333333;
cursor: pointer;
}
@media screen and (max-width: 768px) {
	font-size: 1rem;
	}
`
export const LabelRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
color: white;
padding: 1rem;
`
export const FormLabel = styled.label`
padding-right: .75rem;
font-size: 1.5rem;
font-family: 'Poppins', monospace;
outline: #333333;
word-wrap: break-word;
width: 15vw;
@media screen and (max-width: 768px) {
	font-size: 1rem;
	}
`
export const FormInput = styled.input`
width: 20vw;
height: 4vh;
font-size: 1.5rem;
border: none;
outline-color: #E6BEAE;
padding: .55rem;
@media screen and (max-width: 768px) {
	height: 2vh;
	font-size: 1rem;
	}
`
export const FormTextArea = styled.textarea`
width: 20vw;
height: 10vh;
padding: .55rem;
outline-color: #E6BEAE;
@media screen and (max-width: 768px) {
	height: 5vh;

}
`
export const SelectForm = styled.select`
outline-color: #E6BEAE;
width: 21.5vw;
height: 5vh;
@media screen and (max-width: 768px) {

font-size: .75rem;
}
`
export const FormOption = styled.option`
background-color: #C84c09;
&:hover {
	background-color: #C84c09;
}
@media screen and (max-width: 768px) {

	font-size: .5rem;
	}
`
let word = document.querySelector("#word");
let phonetic = document.querySelector("#phonetic");
let audio = document.querySelector("audio");
let audio_Text = document.querySelector("#audio_Text");
let definition = document.querySelector("#definition");
let example = document.querySelector("#example");
let partOfSpeech = document.querySelector("#partOfSpeech");

let search_field = document.querySelector("#search_Field");
let btn = document.querySelector("#btn");

btn.addEventListener("click",clicked);

async function searching(word){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);
    let Word = data[0].word;
    console.log(Word);
    let Phonetic = data[0].phonetics[0].text;
    console.log(Phonetic);
    let Audio = data[0].phonetics[0].audio;
    console.log(Audio);
    let Definition = data[0].meanings[0].definitions[0].definition;
    console.log(Definition);
    let Example = data[0].meanings[0].definitions[0].example;
    console.log(Example);
    let PartOfSpeech = data[0].meanings[0].partOfSpeech;
    console.log(PartOfSpeech);
    finalChange(Word,Phonetic,Audio,Definition,Example,PartOfSpeech);
    return data;
}
function finalChange(Word,Phonetic,Audio,Definition,Example,PartOfSpeech)
{
    word.innerText = Word;
    phonetic.innerText = Phonetic;
    audio.src = Audio;
    audio.setAttribute("controls","controls");
    definition.innerText = Definition;
    example.innerText = Example;
    partOfSpeech.innerText = PartOfSpeech;
}

function clicked(e)
{
    e.preventDefault();
    let newval = search_field.value;
    searching(newval);
}

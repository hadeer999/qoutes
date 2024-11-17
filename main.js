var btn = document.getElementById('btn');
var qoute =document.getElementById('qoute');
var qoutes =[
'“You only live once, but if you do it right, once is enough.” Mae West',

'“Be the change that you wish to see in the world.” Mahatma Gandhi',

'“If you tell the truth, you dont have to remember anything.”Mark Twain',

'“Always forgive your enemies; nothing annoys them so much.”Oscar Wilde',

'“We accept the love we think we deserve.” Stephen Chbosky, The Perks of Being a Wallflower',

'“Without music, life would be a mistake.” Friedrich Nietzsche, Twilight of the Idols',

'“Money cant buy happiness. It was cliché, but it was true.” Ana Huang, King of Pride',

'“So… stop being sad. Right now! “Feelings” are for artists and madme― Therese Oneill, Ungovernable: The Victorian Parents Guide to',

'“Anything imagined can be made real...given sufficient genius.” Brian Herbert, The Butlerian Jihad',

'“As your bonded mate, Iwill be deciding many things for you.”Christina C. Jones, Caution',

];

btn.addEventListener('click', function () 
{
var randQout=  qoutes[Math.floor(Math.random() * qoutes.length)]
qoute.innerHTML=randQout;   
}
)




// LOADER
window.addEventListener("load",()=>{
  const loader=document.getElementById("loader");
  loader.style.opacity="0";
  setTimeout(()=>loader.style.display="none",1000);
});

// THEME
document.getElementById("theme-toggle").onclick=()=>{
  document.body.classList.toggle("light");
};

// TYPING EFFECT
const typing=document.getElementById("typing");
const words=["Web Developer","UI Designer","Tech Enthusiast"];
let i=0,j=0,isDeleting=false;

function type(){
  let word=words[i];
  typing.textContent=word.substring(0,j);
  if(!isDeleting){
    j++;
    if(j>word.length){isDeleting=true;}
  } else {
    j--;
    if(j==0){isDeleting=false;i=(i+1)%words.length;}
  }
  setTimeout(type,100);
}
type();

// COPY EMAIL
document.getElementById("copy-email").onclick=()=>{
  const email=document.getElementById("email-text").textContent;
  navigator.clipboard.writeText(email);
  alert("Email copied!");
};

// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// 3D TILT
document.querySelectorAll(".project").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const rect=card.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    card.style.transform=`rotateX(${(y-rect.height/2)/15}deg) rotateY(${(rect.width/2-x)/15}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="rotateX(0) rotateY(0)");
});

// SCROLL REVEAL
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// SIMPLE CHATBOT
const chatInput=document.getElementById("chat-input");
const chatBody=document.getElementById("chat-body");

chatInput.addEventListener("keypress",e=>{
  if(e.key==="Enter"){
    chatBody.innerHTML+=`<div>You: ${chatInput.value}</div>`;
    chatBody.innerHTML+=`<div>AI: I'm Kyo's assistant 🤖</div>`;
    chatInput.value="";
    chatBody.scrollTop=chatBody.scrollHeight;
  }
});
